<script>
  import Section from "../lib/ui/Section.svelte";
  import Container from "../lib/ui/Container.svelte";
  import Project from "../lib/Project.svelte";
  import projects from "../data/projects.json";

  /** Year = GitHub repo creation of the linked project. */

  /** Bundled + hashed at build time; keys are file names as written in projects.json. */
  const iconUrls = import.meta.glob("../assets/projects/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  });

  /** @param {string | undefined} name */
  const iconUrl = (name) =>
    name ? (iconUrls[`../assets/projects/${name}`] ?? null) : null;

  /** Pinned: order as listed. Rest: newest year first, then title. */
  const sortedProjects = $derived.by(() => {
    const indexed = projects.map((p, i) => ({ p, i }));
    indexed.sort((a, b) => {
      const ap = a.p.pinned === true;
      const bp = b.p.pinned === true;
      if (ap !== bp) return ap ? -1 : 1;
      if (ap) return a.i - b.i;
      return b.p.year - a.p.year || a.p.title.localeCompare(b.p.title);
    });
    return indexed.map(({ p }) => p);
  });
</script>

<Section id="projects">
  <Container class="flex flex-col items-center">
    <div class="w-full max-w-3xl text-center">
      <h2
        class="mt-4 text-balance text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50"
      >
        Projects
      </h2>
      <p
        class="mt-5 text-pretty text-xl font-medium leading-relaxed text-zinc-600 sm:text-2xl dark:text-zinc-400"
      >
        Open-source work and side projects
      </p>
    </div>

    <div class="mt-12 w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each sortedProjects as p (p.title)}
        <Project
          url={p.url}
          title={p.title}
          tags={p.tags}
          year={p.year}
          pinned={p.pinned === true}
          icon={iconUrl(p.icon)}
          iconMono={p.iconMono === true}
        >
          {p.description}
        </Project>
      {/each}
    </div>
  </Container>
</Section>
