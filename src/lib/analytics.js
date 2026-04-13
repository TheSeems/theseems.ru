let outboundBound = false;

function canonicalHost(hostname) {
  return hostname.replace(/^www\./i, "");
}

/**
 * @param {HTMLAnchorElement} a
 */
function isOutbound(a) {
  if (a.getAttribute("data-umami-event")) return false;
  try {
    const u = new URL(a.href, window.location.href);
    if (u.protocol === "http:" || u.protocol === "https:") {
      return canonicalHost(u.hostname) !== canonicalHost(window.location.hostname);
    }
    if (u.protocol === "mailto:" || u.protocol === "tel:" || u.protocol === "sms:") {
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

/**
 * Self-hosted Umami (production only). Set VITE_UMAMI_URL and VITE_UMAMI_WEBSITE_ID at build time.
 * @see https://umami.is/docs
 */
export function initAnalytics() {
  if (!import.meta.env.PROD) return;

  const base = import.meta.env.VITE_UMAMI_URL?.replace(/\/$/, "");
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  if (!base || !websiteId) return;

  setupOutboundTracking();

  if (document.querySelector(`script[data-website-id="${websiteId}"]`)) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${base}/script.js`;
  script.dataset.websiteId = websiteId;
  script.dataset.domains = "theseems.ru,www.theseems.ru";
  document.head.appendChild(script);
}

function setupOutboundTracking() {
  if (!import.meta.env.PROD || outboundBound) return;
  outboundBound = true;

  document.addEventListener("click", (e) => {
    const t = e.target;
    const el = t instanceof Element ? t : t instanceof Node ? t.parentElement : null;
    const anchor = el?.closest("a[href]");
    if (!anchor || anchor.getAttribute("data-umami-event")) return;
    const a = /** @type {HTMLAnchorElement} */ (anchor);
    if (!isOutbound(a)) return;
    trackEvent("outbound-link-click", { url: a.href });
  });
}

/**
 * Custom Umami events (v2+). No-op if tracker not loaded or not production.
 * @see https://umami.is/docs/track-events
 * @param {string} name — max 50 characters
 * @param {Record<string, string | number | boolean>} [data]
 */
export function trackEvent(name, data) {
  if (!import.meta.env.PROD) return;
  const u = globalThis.umami;
  if (!u || typeof u.track !== "function") return;
  data !== undefined ? u.track(name, data) : u.track(name);
}
