<script>
  import ExternalLink from "./ui/ExternalLink.svelte";
  import IconPin from "./icons/IconPin.svelte";
  import { trackEvent } from "./analytics.js";

  let { title, url = null, year = null, pinned = false, tags = [], children } = $props();
</script>

<article
  class="flex h-full flex-col rounded-[var(--radius-card)] border border-zinc-200/80 bg-white/55 p-7 shadow-[var(--shadow-soft)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/35 dark:shadow-[var(--shadow-soft-dark)] dark:hover:border-zinc-700/90 sm:p-8"
>
  <h3
    class="m-0 flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
  >
    {#if url}
      <ExternalLink
        href={url}
        variant="card"
        class="min-w-0 flex-1 leading-snug"
        data-umami-event="project_click"
        onclick={() => trackEvent("project_click", { title })}
      >{title}</ExternalLink>
    {:else}
      <span class="min-w-0 flex-1 leading-snug">{title}</span>
    {/if}
    {#if year != null}
      <span
        class="shrink-0 whitespace-nowrap text-sm font-normal leading-none tracking-wide text-zinc-400 dark:text-zinc-500"
      >
        {#if pinned}<IconPin
            class="mr-1 inline h-[0.82em] w-[0.82em] align-[-0.1em] opacity-60"
          />{/if}<span class="tabular-nums lining-nums">{year}</span>
      </span>
    {/if}
  </h3>

  <div class="mt-4 flex-1 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
    {@render children?.()}
  </div>

  {#if tags.length}
    <div class="mt-6 flex flex-wrap gap-2">
      {#each tags as tag (tag)}
        <span
          class="rounded-full border border-sky-500/15 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200"
        >
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</article>
