// Single source of truth for site-wide SEO data (canonical base URL, the
// organization entity, the physical venue NAP + opening hours, and the
// schema.org type used per /family/[slug] page).
//
// Keeping the base URL here (instead of hardcoding it in multiple files) is
// what previously caused the canonical typo `locavorenext.com` vs the real
// `locavorenxt.com` domain. Change it in one place only.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://locavorenxt.com'
).replace(/\/$/, '')

// Builds an absolute, canonical URL from a router path or relative slug.
// Accepts '/', '/nxt/menu', 'family/nusantara', etc. and always returns a
// single, well-formed absolute URL (no double slashes, no doubled domain).
export const absoluteUrl = (path = '/') => {
  if (!path) return SITE_URL
  if (/^https?:\/\//i.test(path)) return path // already absolute
  const clean = `/${String(path).replace(/^\/+/, '')}`
  return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`
}

// The Locavore NXT brand/entity. `sameAs` helps search engines disambiguate
// the ambiguous "locavore" term and tie it to the official social profiles.
export const ORGANIZATION = {
  name: 'Locavore NXT',
  legalName: 'Locavore NXT',
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  sameAs: [
    'https://www.instagram.com/locavorenxt',
    'https://www.facebook.com/locavorenxt',
    'https://www.youtube.com/channel/UCuaHS2GaDkbJfbuZTLdWIEA',
  ],
}

// Physical venue — sourced from the live `visit` document + `footer` contact.
export const VENUE = {
  telephone: '+6282144956226',
  email: 'eelke@locavorenxt.com',
  priceRange: '$$$',
  mapUrl: 'https://maps.app.goo.gl/kDUaFDS431vKE4hA6',
  address: {
    streetAddress: 'Jl. A.A. Gede Rai, Gang Pura Panti Bija, Lodtunduh',
    addressLocality: 'Ubud',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID',
  },
  // Mirrors the opening hours shown on /nxt/visit. Update here if the CMS copy
  // changes — these are not parsed from Sanity (the source is portable text).
  openingHours: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:30', closes: '20:30' },
    { dayOfWeek: ['Thursday', 'Friday', 'Saturday'], opens: '12:00', closes: '13:30' },
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '20:00', closes: '23:00' },
  ],
}

// schema.org @type (and optional cuisine) used for each member of the Locavore
// family. Defaults to Restaurant; only the entries that are NOT a restaurant,
// or where the cuisine is well established, are overridden. Easy to adjust.
export const FAMILY_SCHEMA = {
  locavorenxt: { type: 'Restaurant', servesCuisine: ['Progressive Indonesian', 'Contemporary'] },
  nusantara: { type: 'Restaurant', servesCuisine: ['Indonesian'] },
  herbivore: { type: 'Restaurant', servesCuisine: ['Plant-based', 'Vegetarian'] },
  'night-rooster': { type: 'BarOrPub' },
  'club-soda': { type: 'BarOrPub' },
  'agency-x': { type: 'Organization' },
}

export const familySchemaFor = (slug) =>
  FAMILY_SCHEMA[slug] || { type: 'Restaurant' }
