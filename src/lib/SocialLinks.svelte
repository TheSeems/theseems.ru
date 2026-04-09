<script>
  import IconGithub from "./icons/IconGithub.svelte";
  import IconLinkedin from "./icons/IconLinkedin.svelte";
  import IconTelegram from "./icons/IconTelegram.svelte";
  import IconMail from "./icons/IconMail.svelte";

  let { class: className = "" } = $props();
</script>

<nav class="{className} flex items-center justify-center gap-4" aria-label="Social links">
  <a
    class="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm backdrop-blur transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
    href="https://github.com/theseems"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="GitHub"
  >
    <IconGithub class="h-6 w-6" aria-hidden="true" />
  </a>
  <a
    class="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm backdrop-blur transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
    href="https://www.linkedin.com/in/theseems"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="LinkedIn"
  >
    <IconLinkedin class="h-6 w-6" aria-hidden="true" />
  </a>
  <a
    class="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm backdrop-blur transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
    href="https://t.me/theseems"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Telegram"
  >
    <IconTelegram class="h-6 w-6" aria-hidden="true" />
  </a>
  <a
    class="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 text-zinc-700 shadow-sm backdrop-blur transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
    href="mailto:me@theseems.ru"
    aria-label="Email"
  >
    <IconMail class="h-6 w-6" aria-hidden="true" />
  </a>
</nav>
