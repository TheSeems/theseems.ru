<script>
  import IconLink from "../icons/IconLink.svelte";

  /** `default`: body links (sky, underline). `card`: heading-style link (inherits text; icon stays sky). */
  let {
    href,
    variant = "default",
    icon: Icon = IconLink,
    class: className = "",
    children,
    ...rest
  } = $props();

  const isCard = $derived(variant === "card");

  const linkIconClass = $derived(
    [
      "ml-1.5 inline-block h-[0.82em] w-[0.82em] align-[-0.1em] opacity-70 transition-[opacity,color] group-hover:opacity-100",
      isCard
        ? "text-zinc-400 group-hover:text-sky-600 dark:text-zinc-500 dark:group-hover:text-sky-400"
        : "",
    ]
      .filter(Boolean)
      .join(" "),
  );
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer noopener"
  {...rest}
  class="group {isCard
    ? 'text-inherit no-underline decoration-transparent transition-colors hover:text-zinc-950 dark:hover:text-zinc-100'
    : 'font-medium text-sky-600 underline decoration-sky-600/30 decoration-1 underline-offset-[0.22em] transition-colors hover:text-sky-700 hover:decoration-sky-600/60 dark:text-sky-400 dark:decoration-sky-400/35 dark:hover:text-sky-300'} {className}"
>{@render children?.()}<Icon class={linkIconClass} aria-hidden="true" /></a>
