<script>
  let { class: className = "", children } = $props();
</script>

<div class="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8 {className}">
  {@render children?.()}
</div>
