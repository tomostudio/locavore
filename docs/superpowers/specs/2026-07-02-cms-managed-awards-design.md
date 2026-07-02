# CMS-managed Awards on Family Pages

**Date:** 2026-07-02
**Repos:** `locavore` (Next.js site) and `locavore-cms` (Sanity Studio v2.36)

## Problem

Award badges on Family pages (`/family/[slug]`) are currently hard-coded in
[`pages/family/[slug].jsx`](../../../pages/family/[slug].jsx). Awards are regular
image blocks placed inside the page `description` body, matched against three
hard-coded asset-ID arrays (`locavorenxtAwards`, `nightRoosterAwards`,
`nusantaraAwards` — ~26 entries total). Each award's **year** and **click-through
URL** live in code (year arrays + a large `imageUrlMapping`), and two awards are
"code-only," rendered from raw CDN URLs. The page strips these images out of the
body, groups them by year (newest first), and renders them in rows of ~5 with a
year label.

Every award change (new award, new year, new link) requires a code edit and
deploy. The client cannot manage awards themselves.

## Goal

Replace the hard-coded machinery with a proper, editor-managed **Awards** feature
in Sanity. Each award carries its own image (PNG), title, year, and optional link.
The front-end renders awards from structured CMS data, preserving the current
visual (year-grouped rows of badges). Uploads are restricted to **PNG**.

## Non-goals

- No redesign of the awards visual layout — preserve current appearance.
- No changes to other Family page sections (logo, info, CTA, Instagram embed).
- No migration to Sanity v3/v4 (tracked separately in `DEPLOY.md`).

## Design

### 1. Sanity schema (`locavore-cms`)

Add a dedicated top-level `awards` array field to
[`schemas/family_list.js`](../../../../locavore-cms/schemas/family_list.js),
placed immediately after the `description` field. No changes to `blockFamily.js`.

Each array item is an inline `award` object with fields:

| Field   | Type   | Required | Notes |
|---------|--------|----------|-------|
| `image` | image  | yes      | PNG only. `options: { accept: 'image/png' }` restricts the upload picker; a `description` states PNG is required; a custom validation rule rejects any asset whose extension is not `png`. |
| `title` | string | yes      | Used for image alt text and the Studio preview label. |
| `year`  | number | yes      | Drives year grouping. Validation: integer within a sensible range (e.g. `Rule.required().integer().min(2000).max(2100)`). |
| `link`  | url    | no       | Click-through URL (http/https). |

Field-level details:

- The `awards` field has a `description` explaining the feature ("Award badges
  shown in year-grouped rows on the page; upload transparent PNG logos").
- The `image` field keeps a nested `name`/alt pattern consistent with the rest of
  the schema is **not** needed — `title` serves as alt. The image field only needs
  `accept` + validation.
- `preview` on the `award` object shows `title` + `year` as subtitle and the image
  as media.

**PNG enforcement mechanism (to verify against Sanity v2 during implementation):**
Primary enforcement is `options: { accept: 'image/png' }` on the image field,
which sets the file dialog filter. Because drag-and-drop can bypass the picker,
add a `Rule.custom` async validation that resolves the referenced asset and checks
its `extension`/`mimeType === 'image/png'`, returning an error otherwise. If the
v2 validation context cannot resolve the asset, fall back to picker + description
only and note the limitation. Confirm the exact v2 API via Context7/Sanity docs
before finalizing.

### 2. Frontend (`locavore`)

In [`pages/family/[slug].jsx`](../../../pages/family/[slug].jsx):

**Remove** all hard-coded award machinery:
- `OAD_2026_SRC`, `TATLER_BEST_2026_SRC` constants.
- `locavorenxtAwards`, `nightRoosterAwards`, `nusantaraAwards` arrays.
- `getAwardsForSlug`, the three `*SideBySideIds` `Set`s.
- `extractId`, `isSideBySideImage`, `getImageUrl`.
- The `slug === 'locavorenxt' | 'night-rooster' | 'nusantara'` conditional branch
  that strips award images from `description` and injects code-only blocks and
  renders the year-grouped grid.

The `imageModule` serializer reverts to its plain form (drop the
`isSideBySideImage` / `getImageUrl` / side-by-side sizing and plain-URL award
injection). The description then always renders via a single
`<PortableText value={family.description} components={serializers} />`.

**Add** an `AwardsSection` (small local component or inline block) that:
- Reads `family.awards` (array).
- Groups awards by `year`; awards with no year fall into the current year's group.
- Sorts years descending (newest first).
- For each year: renders a year label, then the badges in rows (≤5 per row, same
  `w-[100px] md:w-[120px]` sizing as today), each image rendered via `urlFor()`.
- Wraps an award image in `FancyLink` (blank) when `award.link` is set, otherwise
  renders the image alone.
- Renders in the same position as today: after the description block, before the
  Instagram embed, inside the centered `editor-styling` column.
- Renders for **any** family that has a non-empty `awards` array (not limited to
  the three hard-coded slugs). Renders nothing when `awards` is empty/absent.

`getStaticProps` already fetches the full document
(`*[_type == "family_list" && slug.current == "…"]`), so `awards` (including
`image.asset._ref`) is returned without a GROQ change. `urlFor()` resolves the
asset ref for rendering.

### 3. Migration script (`locavore-cms`, one-time)

A Node script (e.g. `scripts/migrate-awards.js`) using `@sanity/client` with a
write token, run manually against the production dataset **after** the schema is
deployed. For each of the three families (`locavorenxt`, `night-rooster`,
`nusantara`):

1. Fetch the family document.
2. Build the target awards list from the known hard-coded data (asset IDs → year →
   link), copied from the current `[slug].jsx`:
   - For awards whose image lives in `description`: find the matching
     `imageModule` block by extracting the 40-char asset hash from
     `image.asset._ref`; take the **full** asset ref from that block.
   - For the two "code-only" awards (OAD 2026 `5e8dcfaa…-790x460`, Tatler Best 2026
     `99c5dbf9…-1080x1080`): reconstruct the full asset ref from the known CDN URL
     (`image-<hash>-<w>x<h>-png`); those assets already exist in the dataset.
3. Assemble the `awards` array: for each entry
   `{ _key, _type: 'award', image: { _type: 'image', asset: { _type: 'reference', _ref: <fullRef> } }, title, year, link }`.
   Title comes from the code comment label (e.g. "Asia's 50 Best 2025").
4. Patch the document: `set` the new `awards` array **and** replace `description`
   with a copy that excludes the award image blocks (blocks whose extracted hash is
   in that family's award ID set), so awards do not double-render as full-width
   body images.

Properties:
- **Idempotent**: re-running detects that awards already exist / award blocks are
  already removed and makes no further change (or produces the same result).
- **Safe**: only removes `imageModule` blocks whose hash matches a known award ID.
- **Observable**: logs each family's before/after award count and the number of
  description blocks removed.
- Supports a `--dry-run` flag that prints the planned patch without writing.

### 4. Deployment

Order of operations:

1. **Deploy schema** (`locavore-cms`) via the prebuilt flow in
   [`DEPLOY.md`](../../../../locavore-cms/DEPLOY.md):
   `rm -rf public && ./node_modules/.bin/sanity build public -y` → package into
   `.vercel/output` Build Output v3 → `npx vercel@latest deploy --prebuilt --prod --scope locavore-nxt`.
   Then verify the live bundle contains the new schema:
   `curl -s https://admin.locavorenxt.com/static/js/app.bundle.js | grep -c "awards"`
   (expect non-zero) and hard-refresh the Studio.
2. **Run the migration script** against production (dry-run first, then live).
   Verify in the Studio that each family shows its awards and the description no
   longer contains the award images.
3. **Deploy the frontend** (`locavore`) normally. Verify each family page renders
   awards identically to before.

Rollback: the frontend change and schema change are independent; if the migration
misbehaves, the script's dry-run output and per-family logs identify the exact
patch, and description edits can be reverted from Sanity document history.

## Edge cases & error handling

- Family with no `awards`: no awards section rendered.
- Award missing `year`: grouped under the current year (frontend default).
- Award missing `image`: prevented by required validation in the Studio.
- Non-PNG upload: blocked by picker `accept` and (where supported) custom
  validation.
- Migration on a family already migrated: no-op / same result.
- Shared award images across families (Tatler Best / OAD used by multiple
  restaurants): each family gets its own award entry with its own per-slug link
  from the current `imageUrlMapping`.

## Success criteria

- Editors can add/edit/remove awards (image, title, year, link) per family in the
  Studio, with PNG-only image uploads.
- Family pages render awards from CMS data, grouped by year (newest first), in the
  same visual layout as today.
- After migration, the three existing family pages look identical to the current
  live pages, with zero hard-coded award data remaining in `[slug].jsx`.
