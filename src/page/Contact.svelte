<script>
  import Section from "../lib/ui/Section.svelte";
  import Container from "../lib/ui/Container.svelte";
  import SocialLinks from "../lib/SocialLinks.svelte";
  import { trackEvent } from "../lib/analytics.js";

  const email = "me@theseems.ru";
  let copied = $state(false);
  let timeout;

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      trackEvent("email_copy", { placement: "contact" });
      copied = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => (copied = false), 2000);
    });
  }
</script>

<Section id="contact">
  <Container class="flex flex-col items-center">
    <div class="w-full max-w-3xl text-center">
      <h2
        class="mt-4 text-balance text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50"
      >
        Contact
      </h2>
      <p
        class="mt-5 text-pretty text-xl font-medium leading-relaxed text-zinc-600 sm:text-2xl dark:text-zinc-400"
      >
        Open to collaborations, open-source, and interesting backend or data-platform work.
      </p>

      <button
        type="button"
        onclick={copyEmail}
        class="group mx-auto mt-8 flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white/60 px-5 py-3 text-lg font-medium tracking-wide text-zinc-800 shadow-sm backdrop-blur transition hover:border-zinc-300 hover:shadow-md active:scale-[0.98] sm:text-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-zinc-700"
        aria-label="Copy email address"
      >
        <span class="font-mono">{email}</span>
        <span
          class="inline-flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
        >
          {#if copied}
            <svg class="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          {:else}
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
              <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
            </svg>
          {/if}
        </span>
      </button>
    </div>
    <SocialLinks class="mt-10" placement="contact" />
  </Container>
</Section>
