<script>
  import ExternalLink from "./ui/ExternalLink.svelte";
  import IconPin from "./icons/IconPin.svelte";
  import IconGithub from "./icons/IconGithub.svelte";
  import { trackEvent } from "./metrics.js";

  let {
    title,
    url = null,
    year = null,
    pinned = false,
    tags = [],
    icon = null,
    iconMono = false,
    children,
  } = $props();
</script>

<article
  class="group/card relative isolate flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-zinc-200/80 bg-white/55 p-7 shadow-[var(--shadow-soft)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-zinc-800/80 dark:bg-zinc-900/35 dark:shadow-[var(--shadow-soft-dark)] dark:hover:border-zinc-700/90 sm:p-8"
>
  {#if icon}
    <img
      src={icon}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      class="pointer-events-none absolute -right-3 -top-3 -z-10 h-40 w-40 select-none object-contain transition-opacity duration-200 [-webkit-mask-image:radial-gradient(115%_115%_at_100%_0%,#000_38%,transparent_78%)] [mask-image:radial-gradient(115%_115%_at_100%_0%,#000_38%,transparent_78%)] {iconMono
        ? 'opacity-[0.13] group-hover/card:opacity-[0.20] dark:opacity-[0.12] dark:group-hover/card:opacity-[0.19] dark:invert'
        : 'opacity-[0.20] group-hover/card:opacity-[0.32] dark:opacity-[0.17] dark:group-hover/card:opacity-[0.28]'}"
    />
  {/if}
  <h3
    class="m-0 pr-16 text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
  >
    {#if url}
      <ExternalLink
        href={url}
        variant="card"
        icon={IconGithub}
        data-umami-event="project_click"
        onclick={() => trackEvent("project_click", { title })}
      >{title}</ExternalLink>
    {:else}
      {title}
    {/if}
  </h3>

  <div class="mt-3 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
    {@render children?.()}
  </div>

  <!-- Data rail: stack and year share the monospace voice; the mark owns the top-right. -->
  <div class="mt-6 flex items-end justify-between gap-x-3 gap-y-2">
    <div class="flex min-w-0 flex-wrap gap-x-2 gap-y-1.5">
      {#each tags as tag (tag)}
        <span
          class="rounded-md border border-zinc-200/90 bg-zinc-100/60 px-2 py-0.5 font-mono text-xs text-zinc-500 dark:border-zinc-700/70 dark:bg-zinc-800/40 dark:text-zinc-400"
        >
          {tag}
        </span>
      {/each}
    </div>
    {#if year != null}
      <span
        class="shrink-0 whitespace-nowrap font-mono text-xs leading-none tracking-wide text-zinc-400 dark:text-zinc-500"
      >
        {#if pinned}<IconPin
            class="mr-1 inline h-[1em] w-[1em] align-[-0.15em] opacity-60"
          />{/if}<span class="tabular-nums lining-nums">{year}</span>
      </span>
    {/if}
  </div>
</article>
