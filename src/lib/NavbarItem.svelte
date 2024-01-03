<script>
    import {NavLi} from "flowbite-svelte";
    import {router} from 'tinro';

    export let url;
</script>
<NavLi href={url}>
    <p class:text-primary-600={$router.path === url}>
        <slot/>
    </p>
</NavLi>
