<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    const remove = () => {
		dispatch('remove', { id });
	}
	const toggleStatus = () => {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    
    export let id;
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
    li {
        display: flex;
        font-size: 1.2em;
        font-weight: bold;
    }
    span {
        margin-right: auto;
    }
</style>


<li in:fly="{{ x: 900, duration: 500 }}" out:fade>

{#if complete}
    <span class="is-complete">
        { text }
    </span>
	<button class="is-button" on:click={toggleStatus}>
		✔️
	</button>
{:else}
    <span>
        { text }
    </span>
	<button class="is-button" on:click={toggleStatus}>
		❌
	</button>
{/if}

<button class="is-button" on:click={remove}>
    🗑️
</button>

</li>