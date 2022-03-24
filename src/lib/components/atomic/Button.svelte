<script>
	import Icon from '$lib/components/atomic/Icon.svelte';
	import { createEventDispatcher } from 'svelte';

	export let icon;
	export let disabled;

	const dispatch = createEventDispatcher();
</script>

<button
	class="button no-select"
	type="button"
	{disabled}
	on:click={() => dispatch('click', 'click')}
>
	{#if icon}
		<Icon {icon} style={''} />
	{/if}
	<slot />
</button>

<style scoped>
	.button {
		background-image: radial-gradient(circle at center, #00960c33, #00ff22d4);
		height: 5em;
		font-size: 1.1em;
		width: 100%;
	}

	.button {
		/* height: 3.5em; */
		/* padding: 0 var(--spacing); */
		border-radius: var(--border-radius);
		/* background: #ffffff06; */
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 calc(var(--spacing) / 2) 0 var(--glow-color);
		transition: 0.3s ease;
	}

	.button:hover {
		box-shadow: 0 0 var(--spacing) 0 var(--glow-color);
		filter: brightness(1.3);
	}

	.button:active {
		filter: brightness(0.7);
		box-shadow: 0 0 var(--spacing) 0 transparent;
		transition: 0s;
	}

	.button:disabled {
		filter: grayscale(0.5) brightness(0.5);
	}

	.icon {
		margin-inline-end: 0.5em;
	}
</style>
