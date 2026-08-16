<script>
  import PrivacyModal from "./PrivacyModal.svelte";

  const year = new Date().getFullYear();

  const sourceHref = "https://github.com/TheSeems/theseems.io";

  const linkClass =
    "text-zinc-500 underline decoration-zinc-400/50 underline-offset-2 transition hover:text-zinc-700 hover:decoration-zinc-600 dark:text-zinc-500 dark:decoration-zinc-600/50 dark:hover:text-zinc-300";
</script>

<footer class="px-4 py-6 mb-4 text-center text-xs text-zinc-500 sm:text-sm dark:text-zinc-500">
  <p class="inline-block">
    © {year} Alexey Akhundov
  </p>
  <p class="inline-block">
    <a href="#privacy" class="ml-1 {linkClass}">Privacy</a>
    <span class="mx-1.5 text-zinc-400 select-none dark:text-zinc-600" aria-hidden="true">·</span>
    <a
      href={sourceHref}
      target="_blank"
      rel="noreferrer noopener"
      class={linkClass}
    >
      Source
    </a>
  </p>
</footer>

<PrivacyModal />
