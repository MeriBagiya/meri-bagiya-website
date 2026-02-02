/**
 * Google Analytics 4 event tracking helper.
 * Wraps window.gtag() so components don't need to check for its existence.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
