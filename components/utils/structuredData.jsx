import React from 'react'
import {
  SITE_URL,
  absoluteUrl,
  ORGANIZATION,
  VENUE,
  familySchemaFor,
} from '@/helpers/seo/siteConfig'

// Single JSON-LD emitter used for every schema on the site so the output is
// consistent and fully under our control. next-seo is still used for the
// <meta>/OpenGraph layer (see components/utils/seo.jsx); for structured data
// its serializer HTML-escapes `&` -> `&amp;`, which mangles Sanity image URL
// query params, so we render the script ourselves.
//
// Serialization rules:
//  - drop empty / null / undefined values so blocks stay clean
//  - escape only `<` as <, which is the documented, safe way to embed
//    JSON in an HTML <script> (prevents a `</script>` or `<!--` breakout if a
//    CMS field ever contains one). `&` is valid raw inside script data.
const serialize = (data) =>
  JSON.stringify(data, (_k, v) =>
    v === '' || v === null || v === undefined ? undefined : v,
  ).replace(/</g, '\\u003c')

export const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: serialize(data) }}
  />
)

// Organization entity — used on the home page. Reclaims the "locavore" entity
// via name + url + logo + sameAs (official social profiles).
export const OrganizationSchema = () => (
  <JsonLd
    data={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: ORGANIZATION.name,
      legalName: ORGANIZATION.legalName,
      url: ORGANIZATION.url,
      logo: ORGANIZATION.logo,
      sameAs: ORGANIZATION.sameAs,
    }}
  />
)

// Rich local-business entity for the physical venue. Rendered on /nxt/visit,
// the page that actually displays the address, phone and opening hours.
export const LocalBusinessSchema = ({ description = '', images = [] }) => (
  <JsonLd
    data={{
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${SITE_URL}/#restaurant`,
      name: ORGANIZATION.name,
      description,
      url: absoluteUrl('/nxt/visit'),
      telephone: VENUE.telephone,
      email: VENUE.email,
      priceRange: VENUE.priceRange,
      servesCuisine: ['Progressive Indonesian', 'Contemporary'],
      acceptsReservations: 'True',
      image: images && images.length ? images : undefined,
      hasMap: VENUE.mapUrl,
      sameAs: ORGANIZATION.sameAs,
      address: { '@type': 'PostalAddress', ...VENUE.address },
      openingHoursSpecification: VENUE.openingHours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.dayOfWeek,
        opens: h.opens,
        closes: h.closes,
      })),
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    }}
  />
)

// Per-family-page entity. Type comes from the family schema map (Restaurant by
// default, BarOrPub / Organization for the exceptions). No per-outlet address
// is asserted because the family pages don't display one.
export const RestaurantSchema = ({ slug, name, description = '', image = '', url }) => {
  const { type, servesCuisine } = familySchemaFor(slug)
  const isFoodVenue = type !== 'Organization'
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': type,
        '@id': `${url}#entity`,
        name,
        url,
        description,
        image: image || undefined,
        servesCuisine: servesCuisine || undefined,
        areaServed: isFoodVenue ? 'Bali, Indonesia' : undefined,
        priceRange: isFoodVenue ? VENUE.priceRange : undefined,
        parentOrganization: {
          '@type': 'Organization',
          name: ORGANIZATION.name,
          url: ORGANIZATION.url,
        },
      }}
    />
  )
}

// Menu entity for /nxt/menu, attributed to the restaurant.
export const MenuSchema = ({ name, description = '', url, image = '' }) => (
  <JsonLd
    data={{
      '@context': 'https://schema.org',
      '@type': 'Menu',
      name,
      description,
      url,
      image: image || undefined,
      inLanguage: 'en',
      provider: {
        '@type': 'Restaurant',
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
      },
    }}
  />
)

// FAQPage entity — makes an on-page Q&A block eligible for FAQ rich results
// and gives AI answer engines a clean, extractable source. `faqs` is an array
// of { question, answer } with plain-text answers.
export const FAQPageSchema = ({ faqs = [] }) => {
  const items = (faqs || []).filter((f) => f && f.question && f.answer)
  if (!items.length) return null
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }}
    />
  )
}

// --- Sitewide breadcrumbs -------------------------------------------------

// Segment overrides: `null` = non-navigable segment, skipped as a crumb but
// kept in the URL of its children (there is no /nxt landing page, for example).
const SEGMENT_LABELS = {
  nxt: null,
  'events-programs': 'Events & Programs',
  list: 'Articles',
}

const humanize = (s) =>
  decodeURIComponent(s)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

export const buildBreadcrumbs = (asPath = '/') => {
  const clean = asPath.split('?')[0].split('#')[0]
  if (!clean || clean === '/') return []
  const segments = clean.split('/').filter(Boolean)
  const items = [{ name: 'Home', url: absoluteUrl('/') }]
  let acc = ''
  for (const seg of segments) {
    acc += `/${seg}`
    const override = Object.prototype.hasOwnProperty.call(SEGMENT_LABELS, seg)
      ? SEGMENT_LABELS[seg]
      : humanize(seg)
    if (override === null) continue // skip non-navigable segment, keep URL path
    items.push({ name: override, url: absoluteUrl(acc) })
  }
  return items
}

export const BreadcrumbSchema = ({ path = '/' }) => {
  const items = buildBreadcrumbs(path)
  if (items.length < 2) return null
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
