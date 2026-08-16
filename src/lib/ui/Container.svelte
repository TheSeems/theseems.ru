<script>
  /**
   * The page's single content width. Every section shares this edge; inner elements
   * cap their own measure (e.g. prose at max-w-xl) rather than changing the container.
   */
  let { class: className = "", children } = $props();
</script>

<div class="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 {className}">
  {@render children?.()}
</div>
