// Single source of truth for the Locavore NXT guides cluster (hub-and-spoke).
// Consumed by the hub (/nxt/guides), each guide's "Next Guide" card, and the
// sitemap intent. Flip `live` to true and the piece links everywhere at once.

export const HUB_HREF = '/nxt/guides'

export const NXT_GUIDES = [
  {
    title: 'How to Get a Reservation at Locavore NXT',
    description:
      'Booking steps, how far ahead to reserve, deposit and cancellation policy, and what to know before you arrive.',
    href: '/nxt/reservation-guide',
    category: 'Visiting',
    readTime: '5 min',
    thumbnail: '/nxt2/visit/hero.png',
    live: true,
  },
  {
    title: 'Locavore NXT Tasting Menu: Courses, Price & What to Expect',
    description:
      'The full tasting-menu experience — course count, price, pairings, dress code and duration.',
    href: '/nxt/tasting-menu-guide',
    category: 'Food',
    readTime: '6 min',
    thumbnail: '/nxt2/section1.png',
    live: false,
  },
  {
    title: 'Is Locavore Michelin Star? Bali & the Michelin Guide, Explained',
    description:
      'Where Bali sits with the Michelin Guide, and the accolades Locavore actually holds.',
    href: '/nxt/michelin-guide',
    category: 'Visiting',
    readTime: '4 min',
    thumbnail: '/nxt2/building.png',
    live: false,
  },
]

// The next live guide after `href`, cycling through the list; null if this is
// the only live guide (caller should fall back to the hub).
export const nextLiveGuide = (href) => {
  const idx = NXT_GUIDES.findIndex((g) => g.href === href)
  if (idx === -1) return NXT_GUIDES.find((g) => g.live) || null
  const ordered = [...NXT_GUIDES.slice(idx + 1), ...NXT_GUIDES.slice(0, idx)]
  return ordered.find((g) => g.live) || null
}
