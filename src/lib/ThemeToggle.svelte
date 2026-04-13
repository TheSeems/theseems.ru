<script>
  import IconMoon from "./icons/IconMoon.svelte";
  import IconSun from "./icons/IconSun.svelte";
  import { toggleTheme, theme } from "./theme.svelte.js";
  import { trackEvent } from "./analytics.js";

  let { class: className = "" } = $props();

  const base =
    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white/60 text-zinc-700 shadow-sm transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-900";
</script>

<button
  type="button"
  class="{base} {className}"
  onclick={() => {
    toggleTheme();
    trackEvent("theme_toggle", { to: theme.value });
  }}
  aria-label={theme.value === "dark" ? "Switch to light theme" : "Switch to dark theme"}
>
  {#if theme.value === "dark"}
    <IconSun class="h-5 w-5" aria-hidden="true" />
  {:else}
    <IconMoon class="h-5 w-5" aria-hidden="true" />
  {/if}
</button>
