// Thin, safe wrapper around GA4's gtag for firing custom conversion events
// (click_book_table, click_whatsapp, click_get_directions).
//
// The GA4 base tag is injected in pages/_app.jsx. That inline snippet defines a
// global `gtag()` and a `dataLayer`. This helper prefers `window.gtag` but falls
// back to pushing onto `dataLayer` directly, so an event fired before the GA
// script finishes loading is still queued and processed once it does. No-ops
// during SSR so it's safe to call from anywhere.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || !name) return

  window.dataLayer = window.dataLayer || []
  const gtag =
    typeof window.gtag === 'function'
      ? window.gtag
      : function () {
          // Mirror gtag's own implementation: push the arguments object as-is.
          window.dataLayer.push(arguments)
        }

  gtag('event', name, params)
}

export default trackEvent
