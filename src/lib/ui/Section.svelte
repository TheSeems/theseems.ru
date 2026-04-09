<script>
  let { class: className = "", id = undefined, children } = $props();
</script>

<section
  {id}
  class="scroll-mt-28 py-12 sm:scroll-mt-32 sm:py-16 lg:py-20 {className}"
>
  {@render children?.()}
</section>
