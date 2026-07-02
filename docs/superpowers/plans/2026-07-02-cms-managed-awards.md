# CMS-managed Awards on Family Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hard-coded award badges on Family pages with an editor-managed `awards` field in Sanity, preserving the current year-grouped visual.

**Architecture:** Add a dedicated `awards` array to the `family_list` document in the `locavore-cms` Studio (Sanity v2). A one-time migration script moves the existing hard-coded awards (images/years/links) into that field and strips the award images out of the `description` body. The `locavore` Next.js site drops all hard-coded award logic and renders a new `AwardsSection` component from `family.awards`.

**Tech Stack:** Sanity Studio v2.36 (schema JS, no TypeScript), `@sanity/client` v6 (migration script, Node CJS), Next.js + `@portabletext/react` + `next-sanity-image`, Tailwind.

## Global Constraints

- Two separate git repos: site = `locavore` (branch `feat/cms-managed-awards`), Studio = `locavore-cms` (separate remote owned by another org; changes may ship as local commits deployed via `DEPLOY.md`, not via push/PR).
- Sanity project `n3bn5042`, dataset `production`.
- Award images MUST be **PNG only** — enforced by `options: { accept: 'image/png' }` (picker) **and** a validation rule that rejects any asset whose `_ref` format segment is not `png`.
- No test framework exists in `locavore`; verification is `next build` / lint + the migration script's `--dry-run`. Do NOT add a test harness (out of scope).
- Schema/migration deploy order is fixed: **deploy schema → run migration → deploy frontend** (see Task 5).
- Sanity image asset `_ref` format is `image-<40hexhash>-<w>x<h>-<ext>`; the last `-`-segment is the file format.
- Do NOT commit any Sanity write token. It is passed via the `SANITY_WRITE_TOKEN` env var at runtime only.

---

### Task 1: Add `awards` field to the Family schema (`locavore-cms`)

**Files:**
- Modify: `locavore-cms/schemas/family_list.js` (insert new field after the `description` field, which ends at line 122 `},`)

**Interfaces:**
- Produces: a `family_list.awards` array field. Each item is an inline object `award` with shape `{ _type: 'award', _key, image: {_type:'image', asset:{_ref}}, title: string, year: number, link?: string }`. Consumed by Task 3 (frontend) and Task 2 (migration).

- [ ] **Step 1: Add the `awards` field**

In `locavore-cms/schemas/family_list.js`, insert this field object immediately after the `description` field object (after its closing `},` around line 122, before the `address` field):

```js
    {
      name: 'awards',
      title: 'Awards',
      description:
        'Award badges shown in year-grouped rows on the family page (newest year first). Upload transparent PNG logos only.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'award',
          title: 'Award',
          fields: [
            {
              name: 'image',
              title: 'Award Image (PNG only)',
              description: 'Transparent PNG badge/logo. Only .png files are accepted.',
              type: 'image',
              options: { accept: 'image/png' },
              validation: (Rule) =>
                Rule.required().custom((image) => {
                  if (!image || !image.asset || !image.asset._ref) {
                    return 'Award image is required'
                  }
                  const format = image.asset._ref.split('-').pop()
                  return format === 'png' ? true : 'Award image must be a PNG file'
                }),
            },
            {
              name: 'title',
              title: 'Title',
              description: 'Award name. Used for image alt text and accessibility.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'year',
              title: 'Year',
              description: 'Awards are grouped by year, newest first.',
              type: 'number',
              validation: (Rule) => Rule.required().integer().min(2000).max(2100),
            },
            {
              name: 'link',
              title: 'Link (optional)',
              description: 'Optional click-through URL to the award or announcement page.',
              type: 'url',
              validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
            },
          ],
          preview: {
            select: { title: 'title', year: 'year', media: 'image' },
            prepare({ title, year, media }) {
              return { title: title || 'Award', subtitle: year ? String(year) : '', media }
            },
          },
        },
      ],
    },
```

- [ ] **Step 2: Build the Studio locally to verify the schema compiles**

Run from `locavore-cms/`:
```bash
YARN_IGNORE_ENGINES=true ./node_modules/.bin/sanity build public -y
```
Expected: build completes with no schema errors and writes `public/static/js/app.bundle.js`.

- [ ] **Step 3: Confirm the new field is in the compiled bundle**

Run from `locavore-cms/`:
```bash
grep -c "Award Image (PNG only)" public/static/js/app.bundle.js
```
Expected: a non-zero count (the string is unique to this change).

- [ ] **Step 4: Commit (in the `locavore-cms` repo)**

```bash
cd locavore-cms
git add schemas/family_list.js
git commit -m "feat: add editor-managed awards field to family_list schema"
```

---

### Task 2: Write the awards migration script (`locavore-cms`)

**Files:**
- Create: `locavore-cms/scripts/migrate-awards.js`

**Interfaces:**
- Consumes: `family_list` documents from the `production` dataset, and the `awards` shape from Task 1.
- Produces: patched `family_list` docs with `awards` set and award images removed from `description`. Idempotent (re-running yields the same result). `--dry-run` prints the planned `awards` without writing.

- [ ] **Step 1: Create the migration script**

Create `locavore-cms/scripts/migrate-awards.js` with exactly this content (the `AWARDS` data is copied verbatim from `locavore/pages/family/[slug].jsx` — ids, years, links — with a `title` per the code comments):

```js
// One-time migration: move hard-coded family award badges into the CMS `awards` field.
// Usage:
//   SANITY_WRITE_TOKEN=xxx node scripts/migrate-awards.js --dry-run
//   SANITY_WRITE_TOKEN=xxx node scripts/migrate-awards.js
const { createClient } = require('@sanity/client')

const DRY_RUN = process.argv.includes('--dry-run')

const client = createClient({
  projectId: 'n3bn5042',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

const OAD_2026_SRC =
  'https://cdn.sanity.io/images/n3bn5042/production/5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07-790x460.png'
const TATLER_BEST_2026_SRC =
  'https://cdn.sanity.io/images/n3bn5042/production/99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380-1080x1080.png'

// slug -> ordered list of awards. `src` marks a "code-only" award whose image is
// NOT in the page body (its asset ref is reconstructed from the CDN URL).
const AWARDS = {
  locavorenxt: [
    { id: '6aff0992c9a0ebc8a56b9844c2d3add813677ccc', year: 2025, title: "Asia's 50 Best — Sustainable Restaurant", link: 'https://www.theworlds50best.com/asia/en/awards/sustainable-restaurant-award.html' },
    { id: '602faac7df0984afe4db4182cbd207aed2ed6c81', year: 2025, title: 'The Best Chef', link: 'https://thebestchefawards.com/chefs/eelke-plasmeijer-ray-adriansyah/' },
    { id: '104e22761eb1e670d4b7ad91c9d72a52e5ce7dbe', year: 2025, title: 'La Liste', link: 'https://www.laliste.com/awards/ethical-sustainability-award-awards-2025' },
    { id: '9beebc5300dcedecc33287527d7b8f319831f134', year: 2025, title: 'Prestige Gourmet Awards', link: 'https://www.prestigeonline.com/id/wine-dine/prestige-gourmet-awards-2025/' },
    { id: '27680879083f1134b31e01821f1240de3859937e', year: 2025, title: 'OAD', link: 'https://www.oadguides.com/restaurant/locavore-nxt' },
    { id: 'c1b4a40bd80040a6a6507b2d09c36986719364ad', year: 2025, title: 'Tatler', link: 'https://www.tatlerasia.com/dining/locavore-nxt-id' },
    { id: 'f2703e94ad106c3b08e54e982e39a0238c44f985', year: 2025, title: 'Food Made Good', link: 'https://thesra.org/about-us/food-made-good-directory/' },
    { id: 'ac7b19c73879f83cd6e86d78aa8c107dea47f58d', year: 2025, title: 'Tatler Asia', link: 'https://www.tatlerasia.com/dining/locavore-nxt?listId=281' },
    { id: 'edc5e221323934d0b2b79008c5280b54dea050f8', year: 2025, title: 'Taste Makers Award', link: 'https://www.travelandleisureasia.com/sea/tl-tastemakers/tl-tastemakers-2025-26-these-are-the-best-restaurants-in-indonesia/' },
    { id: '4dd4be020a72f65fd3ec9e5a359f4086532c94ff', year: 2026, title: 'Food Made Good 2026', link: 'https://thesra.org/about-us/food-made-good-directory/' },
    { id: 'd114ce1bf91edb448872938fa089de604e22cd3b', year: 2026, title: "Asia's 50 Best 2026", link: 'https://www.theworlds50best.com/asia/en/list/1-50' },
    { id: '1c1758fa4e3d7098f31eaaa7a16790ab9a7f84a4', year: 2026, title: 'Prestige Gourmet Awards 2026', link: 'https://www.prestigeonline.com/id/wine-dine/prestige-gourmet-awards-2026/' },
    { id: 'e6890e9bb2eee9816d95c24956d58a249e96bc10', year: 2026, title: 'Tatler 2026', link: 'https://www.tatlerasia.com/dining/food/20-restoran-terbaik-tatler-best-indonesia-2026-id' },
    { id: '5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07', year: 2026, title: 'OAD 2026', link: 'https://www.oadguides.com/lists/asia/top-restaurants/2026', src: OAD_2026_SRC },
  ],
  'night-rooster': [
    { id: '3567ce9db6f96a110a3e89c885aaabc8a52117b9', year: 2025, title: 'Tatler', link: 'https://www.tatlerasia.com/dining/night-rooster?listId=282' },
    { id: 'd4250f7ef233482fc3a8324c4ae68689fda335e7', year: 2025, title: "Asia's 50 Best Discovery", link: 'https://www.theworlds50best.com/discovery/Establishments/Indonesia/Bali/Night-Rooster-by-Locavore-NXT.html' },
    { id: '27430b9c4a0dd35429e82e738b1c80196cf00a3e', year: 2025, title: 'Tatler 2025', link: 'https://www.tatlerasia.com/dining/night-rooster?listId=282' },
    { id: '9944e7595d79259aeefe13e8a672d37082eb54bb', year: 2025, title: 'Taste Makers Award', link: 'https://www.travelandleisureasia.com/sea/tl-tastemakers/tl-tastemakers-2025-26-these-are-the-best-bars-in-indonesia/' },
    { id: 'b843596706cc059cc07de1202ba7965d2ace3b11', year: 2026, title: 'Top 500 Bars', link: 'https://www.top500bars.com/copie-de-451-500-2024' },
    { id: '99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380', year: 2026, title: 'Tatler Best 2026', link: 'https://www.tatlerasia.com/dining/drinks/20-bar-terbaik-tatler-best-indonesia-2026-id', src: TATLER_BEST_2026_SRC },
  ],
  nusantara: [
    { id: '5f5d222a9f8c58798daf60761b175594567d8888', year: 2025, title: 'OAD', link: 'https://www.oadguides.com/restaurant/nusantara-by-locavore' },
    { id: '7f8aeb89fdbea91a6f73542db808950397a272b9', year: 2025, title: "Asia's 50 Best Discovery", link: 'https://www.theworlds50best.com/discovery/Establishments/Indonesia/Bali/Nusantara-by-Locavore-NXT.html' },
    { id: 'c0f8daca212f83363fdbec4d5d68383d2cc12646', year: 2025, title: 'Tatler 2025', link: 'https://www.tatlerasia.com/dining/nusantara-by-locavore-id' },
    { id: '72ad8a2cc47aadf5da5d688640e1da7e167132eb', year: 2025, title: 'Taste Makers Award', link: 'https://www.travelandleisureasia.com/sea/tl-tastemakers/tl-tastemakers-2025-26-these-are-the-best-restaurants-in-indonesia/' },
    { id: '5e8dcfaa03d0a5dacedb9aff7c4ed4cf26264b07', year: 2026, title: 'OAD 2026', link: 'https://www.oadguides.com/lists/asia/top-restaurants/2026', src: OAD_2026_SRC },
    { id: '99c5dbf9ab7ad7b45e5b2cb2bec7df1a8e83e380', year: 2026, title: 'Tatler Best 2026', link: 'https://www.tatlerasia.com/dining/food/20-restoran-terbaik-tatler-best-indonesia-2026-id', src: TATLER_BEST_2026_SRC },
  ],
}

// Extract the 40-hex asset hash from an image _ref or a CDN URL.
const extractId = (refOrUrl) => {
  if (!refOrUrl) return null
  const m = String(refOrUrl).match(/(?:image-)?([a-f0-9]{40})-[0-9]+x[0-9]+/)
  return m ? m[1] : null
}

// Build a full asset _ref from a CDN URL: <hash>-<w>x<h>.<ext> -> image-<hash>-<w>x<h>-<ext>
const refFromSrc = (src) => {
  const m = String(src).match(/([a-f0-9]{40})-(\d+x\d+)\.(\w+)/)
  return m ? `image-${m[1]}-${m[2]}-${m[3]}` : null
}

async function run() {
  for (const [slug, list] of Object.entries(AWARDS)) {
    const doc = await client.fetch(
      `*[_type == "family_list" && slug.current == $slug][0]`,
      { slug }
    )
    if (!doc) {
      console.warn(`! ${slug}: document not found — skipping`)
      continue
    }

    const desc = Array.isArray(doc.description) ? doc.description : []

    // Collect full asset refs by hash from BOTH the description body and any
    // existing awards (so re-runs, after the body is stripped, still resolve refs).
    const refByHash = {}
    const collectRef = (ref) => {
      const h = extractId(ref)
      if (h && !refByHash[h]) refByHash[h] = ref
    }
    for (const block of desc) {
      if (block && block._type === 'imageModule') collectRef(block.image && block.image.asset && block.image.asset._ref)
    }
    for (const aw of Array.isArray(doc.awards) ? doc.awards : []) {
      collectRef(aw && aw.image && aw.image.asset && aw.image.asset._ref)
    }

    const awards = []
    for (const a of list) {
      let ref = refByHash[a.id]
      if (!ref && a.src) ref = refFromSrc(a.src)
      if (!ref) {
        console.warn(`! ${slug}: no asset found for ${a.title} (${a.id}) — skipping this award`)
        continue
      }
      const award = {
        _key: `${a.id.slice(0, 12)}-${a.year}`,
        _type: 'award',
        title: a.title,
        year: a.year,
        image: { _type: 'image', asset: { _type: 'reference', _ref: ref } },
      }
      if (a.link) award.link = a.link
      awards.push(award)
    }

    // Remove award image blocks from the description so they don't double-render.
    const awardHashes = new Set(list.map((a) => a.id))
    const newDesc = desc.filter((block) => {
      if (!block || block._type !== 'imageModule') return true
      const h = extractId(block.image && block.image.asset && block.image.asset._ref)
      return !(h && awardHashes.has(h))
    })
    const removed = desc.length - newDesc.length

    console.log(`\n=== ${slug} (${doc._id}) ===`)
    console.log(`awards: ${awards.length} | description blocks removed: ${removed}`)

    if (DRY_RUN) {
      console.log(JSON.stringify(awards, null, 2))
      continue
    }

    await client.patch(doc._id).set({ awards, description: newDesc }).commit()
    console.log(`✓ ${slug}: patched`)
  }
  console.log('\nDone.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
```

- [ ] **Step 2: Dry-run the script against production**

Run from `locavore-cms/` with a token that has write access (read is enough for dry-run):
```bash
SANITY_WRITE_TOKEN=<token> node scripts/migrate-awards.js --dry-run
```
Expected: for each of `locavorenxt`, `night-rooster`, `nusantara`, a printed award count (14 / 6 / 6 respectively, assuming all assets resolve) and a non-zero "description blocks removed" count, plus the JSON of the awards to be written. Any `! no asset found` warning means that award's image is neither in the body nor reconstructable — investigate before the live run.

- [ ] **Step 3: Commit the script (in the `locavore-cms` repo)**

```bash
cd locavore-cms
git add scripts/migrate-awards.js
git commit -m "feat: add one-time awards migration script"
```

Note: the live (non-dry-run) execution happens in Task 5, after the schema is deployed.

---

### Task 3: Create the `AwardsSection` component (`locavore`)

**Files:**
- Create: `locavore/components/modules/family/awardsSection.jsx`

**Interfaces:**
- Consumes: `family.awards` (array of `{ _key, image, title, year, link }` from Task 1).
- Produces: default export `AwardsSection`, used as `<AwardsSection awards={family.awards} />` in Task 4. Renders `null` when there are no valid awards.

- [ ] **Step 1: Create the component**

Create `locavore/components/modules/family/awardsSection.jsx`:

```jsx
import FancyLink from '@/components/utils/fancyLink'
import urlFor from '@/helpers/sanity/urlFor'

const Badge = ({ award }) => {
  const img = (
    <img
      src={urlFor(award.image).width(240).format('webp').url()}
      alt={award.title || ''}
      className='w-full h-auto'
      loading='lazy'
      decoding='async'
    />
  )
  return (
    <div className='w-[100px] md:w-[120px] flex justify-center'>
      {award.link ? (
        <FancyLink
          destination={award.link}
          blank={true}
          className='block hover:opacity-80 transition-opacity duration-300'
        >
          {img}
        </FancyLink>
      ) : (
        img
      )}
    </div>
  )
}

const AwardsSection = ({ awards = [] }) => {
  const valid = (awards || []).filter((a) => a && a.image && a.image.asset)
  if (valid.length === 0) return null

  const currentYear = new Date().getFullYear()
  const byYear = valid.reduce((acc, a) => {
    const year = a.year || currentYear
    if (!acc[year]) acc[year] = []
    acc[year].push(a)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <div className='flex flex-col gap-8 items-center max-w-4xl mx-auto mt-4'>
      {years.map((year) => {
        const items = byYear[year]
        const firstRow = items.slice(0, 5)
        const secondRow = items.slice(5)
        return (
          <div key={year} className='w-full flex flex-col gap-4 items-center'>
            <span className='text-sm font-bold tracking-widest uppercase'>{year}</span>
            <div className='flex justify-center items-center gap-4 flex-wrap w-full'>
              {firstRow.map((award, i) => (
                <Badge key={award._key || i} award={award} />
              ))}
            </div>
            {secondRow.length > 0 && (
              <div className='flex justify-center items-center gap-4 flex-wrap w-full'>
                {secondRow.map((award, i) => (
                  <Badge key={award._key || `s${i}`} award={award} />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AwardsSection
```

- [ ] **Step 2: Verify it compiles (lint)**

Run from `locavore/`:
```bash
npx next lint --file components/modules/family/awardsSection.jsx
```
Expected: no errors for this file (warnings about `<img>` vs `next/image` are acceptable — the existing `imageGallery` serializer uses `<img>` the same way).

- [ ] **Step 3: Commit**

```bash
cd locavore
git add components/modules/family/awardsSection.jsx
git commit -m "feat: add AwardsSection component for CMS-driven family awards"
```

---

### Task 4: Wire `AwardsSection` into the Family page and remove hard-coded awards (`locavore`)

**Files:**
- Modify: `locavore/pages/family/[slug].jsx`

**Interfaces:**
- Consumes: `AwardsSection` from Task 3.
- Produces: a Family page that renders awards purely from `family.awards`, with zero hard-coded award data.

- [ ] **Step 1: Add the import**

In `locavore/pages/family/[slug].jsx`, add near the other family module imports (after line 20 `import InstagramEmbed ...`):

```jsx
import AwardsSection from '@/components/modules/family/awardsSection'
```

- [ ] **Step 2: Delete the hard-coded award machinery**

Remove these blocks entirely from `locavore/pages/family/[slug].jsx`:
- The `OAD_2026_SRC` and `TATLER_BEST_2026_SRC` constants and their comment (lines 54–58).
- The `locavorenxtAwards`, `nightRoosterAwards`, `nusantaraAwards` arrays (lines 60–94).
- `getAwardsForSlug` (lines 96–102).
- The three `*SideBySideIds` sets (lines 104–107).
- `extractId` (lines 109–115).
- `isSideBySideImage` (lines 117–127).
- `getImageUrl` (lines 129–171).

After this, the code between the `slug` definition (`const slug = ...`) and the `useEffect` should contain none of the above.

- [ ] **Step 3: Simplify the `imageModule` serializer**

Replace the entire `imageModule` serializer (currently lines 209–259) with this asset-only version (the CMS requires `image.asset`, so the plain-URL and side-by-side branches are no longer needed):

```jsx
      imageModule: (props) => {
        const imageProps = useNextSanityImage(client, props.value.image, {
          imageBuilder: singleIURB,
        })
        return (
          <div className='image md:!px-24 max-w-[700px] mx-auto'>
            <div
              className='relative w-full rounded-xl overflow-hidden mx-auto'
              style={{ backgroundColor: `rgba(208,208,208, 1)` }}
            >
              <ImageModule
                {...imageProps}
                alt={props.value.image.name || ''}
                placeholder='blur'
                blurDataURL={urlFor(props.value.image)
                  .blur(2)
                  .format('webp')
                  .saturation(-100)
                  .width(100)
                  .url()}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            {props.value.name && (
              <Caption option={false} caption={props.value.name} color='#000' />
            )}
          </div>
        )
      },
```

- [ ] **Step 4: Replace the description render block with a plain PortableText + AwardsSection**

Replace the whole conditional block (currently lines 432–513, the `editor-styling` div containing the `slug === 'locavorenxt' || ...` ternary) with:

```jsx
              <div className='editor-styling w-full mt-8 max-md:max-w-lg'>
                <PortableText value={family.description} components={serializers} />
                <AwardsSection awards={family.awards} />
              </div>
```

- [ ] **Step 5: Build the site to verify everything compiles**

Run from `locavore/`:
```bash
npx next build
```
Expected: build succeeds. (It fetches from Sanity at build time; before the migration runs, `family.awards` is undefined and `AwardsSection` renders `null` — that is fine and must not error.)

- [ ] **Step 6: Commit**

```bash
cd locavore
git add pages/family/[slug].jsx
git commit -m "refactor: render family awards from CMS, remove hard-coded award data"
```

---

### Task 5: Deploy and run the migration (operational runbook)

**Files:** none (deployment + data migration).

**Interfaces:** Consumes Tasks 1–4. Produces the live, migrated state.

- [ ] **Step 1: Deploy the Studio schema** (per `locavore-cms/DEPLOY.md`)

Run from `locavore-cms/`:
```bash
rm -rf public && YARN_IGNORE_ENGINES=true ./node_modules/.bin/sanity build public -y
rm -rf .vercel/output && mkdir -p .vercel/output/static
cp -R public/. .vercel/output/static/
printf '%s\n' '{ "version": 3, "routes": [ { "handle": "filesystem" }, { "src": "/.*", "dest": "/index.html" } ] }' > .vercel/output/config.json
npx vercel@latest deploy --prebuilt --prod --scope locavore-nxt
```

- [ ] **Step 2: Verify the schema shipped live**

```bash
curl -s https://admin.locavorenxt.com/static/js/app.bundle.js | grep -c "Award Image (PNG only)"
```
Expected: non-zero. Then hard-refresh the Studio (Cmd+Shift+R) and confirm the "Awards" field appears on a Family document.

- [ ] **Step 3: Run the migration live** (after a final dry-run)

Run from `locavore-cms/`:
```bash
SANITY_WRITE_TOKEN=<token> node scripts/migrate-awards.js --dry-run   # review once more
SANITY_WRITE_TOKEN=<token> node scripts/migrate-awards.js             # live
```
Expected: `✓ <slug>: patched` for all three families.

- [ ] **Step 4: Verify in the Studio**

For each family (`locavorenxt`, `night-rooster`, `nusantara`): the Awards field is populated (14 / 6 / 6 items), and the award images are no longer present as image blocks in the Description. If a family has a draft, re-publish it so the draft doesn't overwrite the migrated data.

- [ ] **Step 5: Deploy the frontend**

Deploy `locavore` via its normal deploy flow (merge `feat/cms-managed-awards` / trigger the site's Vercel build). Then verify each `/family/<slug>` page renders awards grouped by year, newest first, matching the previous live appearance, and that award links click through correctly.

---

## Self-Review Notes

- **Spec coverage:** schema field (Task 1) ✓; PNG enforcement via picker + `_ref` format validation (Task 1) ✓; title/year/link fields (Task 1) ✓; migration incl. code-only awards + description strip + idempotency (Task 2) ✓; frontend removal of hard-coded logic + AwardsSection + year grouping/rows-of-5/link wrapping (Tasks 3–4) ✓; deploy order schema→migration→frontend (Task 5) ✓; edge cases (empty awards → null, missing year → current year) handled in Task 3 ✓.
- **Type consistency:** award object shape `{ _key, _type:'award', image:{_type:'image',asset:{_ref}}, title, year, link? }` is identical across Tasks 1, 2, 3.
- **No placeholders:** all code is complete; `<token>` is an intentional runtime secret, not a code placeholder.
