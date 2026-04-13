<script>
  import Section from "../lib/ui/Section.svelte";
  import Container from "../lib/ui/Container.svelte";
  import ExternalLink from "../lib/ui/ExternalLink.svelte";
  import SocialLinks from "../lib/SocialLinks.svelte";
  import Button from "../lib/ui/Button.svelte";
  import IconCv from "../lib/icons/IconCv.svelte";
  import mePhoto from "../assets/me.png";
  import { trackEvent } from "../lib/analytics.js";
</script>

<Section id="home" class="!pt-1 sm:!pt-6 md:!pt-16">
  <Container>
    <div
      class="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-14"
    >
      <div class="w-full max-w-xs shrink-0 md:w-64 md:max-w-none lg:w-72">
        <img
          src={mePhoto}
          alt="Portrait of Alexey Akhundov"
          width="280"
          height="400"
          class="h-64 w-full rounded-2xl object-cover object-[center_10%] shadow-[var(--shadow-soft)] ring-1 ring-zinc-200/80 dark:shadow-[var(--shadow-soft-dark)] dark:ring-zinc-700/80 sm:h-72 md:h-full"
        />
      </div>

      <div class="min-w-0 flex-1 text-center md:text-left">
        <h1
          class="mt-0 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50"
        >
          Alexey Akhundov
        </h1>
        <p class="mt-2 text-xl font-medium text-zinc-400 sm:text-2xl dark:text-zinc-600">
          TheSeems
        </p>
        <p
          class="mt-4 text-pretty text-lg font-medium leading-relaxed text-zinc-600 sm:text-xl md:text-2xl dark:text-zinc-400"
        >
          Senior Software Engineer · Data Platform · Backend
        </p>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg md:mx-0 md:mt-6 md:max-w-none dark:text-zinc-300">
          I build data platform tooling at
          <ExternalLink href="https://yandex.com/company/about">Yandex</ExternalLink> and study
          Artificial Intelligence at
          <ExternalLink href="https://cs.hse.ru/en">HSE</ExternalLink>.
          Interested in distributed systems, developer tools, and shipping things that work reliably.
        </p>
        <p class="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg md:mx-0 md:mt-5 md:max-w-none dark:text-zinc-300">
          I contribute to open-source and tinker with homelabbing and smart home setups in my spare time.
          I like building useful things and figuring out how stuff works under the hood.
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start md:gap-4">
          <Button
            href="https://theseems.ru/cv"
            variant="nav"
            target="_blank"
            rel="noreferrer"
            class="h-12 px-6 text-base"
            onclick={() => trackEvent("cv_click", { placement: "hero" })}
          >
            View CV
            <IconCv class="h-4 w-4" aria-hidden="true" />
          </Button>
          <SocialLinks placement="hero" />
        </div>
      </div>
    </div>
  </Container>
</Section>
