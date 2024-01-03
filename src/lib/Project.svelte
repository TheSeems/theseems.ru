<script lang="ts">
    import {A} from "flowbite-svelte";
    import LinkIcon from "../assets/icons/link.svg";

    export let title: string;
    export let url: string | null;
    export let tags: string[];
</script>

<div class="card">
    <h5 class="text-2xl font-bold tracking-tight text-black dark:text-white">
        {#if url != null}
            <A href={url} aClass="inline-flex items-center font-medium">
                {title}
                <LinkIcon class="p-0.5 m-0.5 h-5 w-5"/>
            </A>
        {:else }
            {title}
        {/if}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        <slot/>
    </p>
    <div class="mt-3 flex space-x-3">
        {#each tags as tag}
            <div class="dark:text-primary-300 border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-xs bg-primary-100 text-primary-800 dark:bg-primary-900 rounded">
                {tag}
            </div>
        {/each}
    </div>
</div>
