<script>
	import '../style.css';
	import { onMount } from 'svelte';

	import Toolbar from '$lib/components/composed/Toolbar.svelte';

	let mounted;
	let hasToolbar;

	let verticalLayout, verticalContent;

	onMount(async () => {
		({ verticalLayout, verticalContent } = await import('$lib/store/InterfaceStore'));
		mounted = true;
	});

	$: if (mounted) hasToolbar = window == window.top;
</script>

<svelte:head>
	<title>PeerPiper Web3 Wallet</title>
</svelte:head>
<div
	class="app"
	class:verticalLayout={$verticalLayout}
	class:verticalContent={$verticalContent}
	class:hasToolbar
>
	{#if hasToolbar}
		<Toolbar />
	{/if}
	{#if mounted}
		<!-- router class needed for toolbar adjustments -->
		<div class="router">
			<slot />
		</div>
	{:else}
		Loading...
	{/if}
</div>

<style>
	.app {
		height: auto;
	}
	.router {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
</style>
