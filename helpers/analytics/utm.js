import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Attribution params we forward from the visitor's current URL onto outbound
// booking (Revasi) links: the standard utm_* set plus the ad-network click IDs
// that actually carry paid attribution end-to-end.
const FORWARD_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'fbclid',
  'msclkid',
]

// Fallback source-tagging used only when the visitor arrived with no inbound
// attribution at all — so every booking click is still attributable to the site.
const FIXED_UTM = {
  utm_source: 'locavorenxt.com',
  utm_medium: 'website',
  utm_campaign: 'book_now',
}

// Decorate an outbound booking URL with attribution.
//   "forward inbound, else fixed":
//   - if the visitor's URL carries any forwardable param, forward those onto the
//     booking link (inbound wins — overwrites a same-named param on the link).
//   - otherwise stamp the FIXED_UTM defaults, without clobbering params the
//     booking link already defines.
// A missing or non-absolute/malformed URL is returned untouched.
export function appendUTM(baseUrl, search = '') {
  if (!baseUrl) return baseUrl

  let url
  try {
    url = new URL(baseUrl)
  } catch {
    return baseUrl
  }

  const inbound = new URLSearchParams(search)
  const forwarded = FORWARD_KEYS.filter((key) => inbound.has(key))

  if (forwarded.length > 0) {
    forwarded.forEach((key) => url.searchParams.set(key, inbound.get(key)))
  } else {
    Object.entries(FIXED_UTM).forEach(([key, value]) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value)
    })
  }

  return url.toString()
}

// Returns the current browser query string (e.g. "?utm_source=ig"). Starts empty
// so the server render and first client render match (no hydration mismatch),
// then fills in after mount and on client-side route changes.
export function useUTMSearch() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSearch(window.location.search || '')
    }
  }, [router.asPath])

  return search
}
