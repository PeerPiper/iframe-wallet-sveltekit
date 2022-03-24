<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let dragOverlay;
	let mounted;

	onMount(async () => {
		({ dragOverlay } = await import('$lib/store/InterfaceStore'));
		mounted = true;
	});
</script>

{#if mounted && $dragOverlay}
	<div transition:fade>
		<div class="dragOverlay" />
	</div>
{/if}

<style>
	.dragOverlay {
		pointer-events: none;
		position: absolute;
		background-image: radial-gradient(circle at center, #333, #222);
		background-position: center;
		background-repeat: no-repeat;
		background-origin: center;
		background-size: cover;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99999;
		border-radius: inherit;
		filter: opacity(0.6);
	}

	.dragOverlay::after {
		content: '';
		text-align: center;
		background-image: url('$lib/assets/icons/drop.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-origin: center;
		background-size: 48px 48px;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 99999;
	}
</style>
