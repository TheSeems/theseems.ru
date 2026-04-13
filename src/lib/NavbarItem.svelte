<script>
  import { activeSectionId } from "./activeSection.svelte.js";
  import { trackEvent } from "./analytics.js";

  /**
   * @typedef {Object} NavbarItemProps
   * @property {string} href
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {NavbarItemProps} */
  let { href, children } = $props();

  let sectionId = $derived(href.startsWith("#") ? href.slice(1) : "");
  let active = $derived(sectionId !== "" && activeSectionId.value === sectionId);

  function onNavigate() {
    if (sectionId) trackEvent("nav_click", { section: sectionId });
  }
</script>

<a
  {href}
  onclick={onNavigate}
  class="inline-flex h-10 items-center rounded-lg px-3 text-sm font-medium tracking-tight text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 {active
    ? 'bg-zinc-900/5 text-zinc-900 dark:bg-white/10 dark:text-white'
    : ''}"
  aria-current={active ? "page" : undefined}
>
  {@render children?.()}
</a>
