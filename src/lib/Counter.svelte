<script>
    import {Button} from "flowbite-svelte";

    let count = 0
    const increment = () => {
        count += 1
    }
</script>

<Button color="light" on:click={increment}>Count is {count}</Button>
