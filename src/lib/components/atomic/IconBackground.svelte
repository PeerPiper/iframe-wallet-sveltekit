<script>
	import Icon from '$lib/components/atomic/Icon.svelte';

	export let icon = null;
	export let img;
</script>

<div class="icon-background">
	{#if img}
		<div class="page-logo">
			<Icon icon={img} style="" />
		</div>
	{:else}
		<div class="page-logo placeholder">
			<Icon {icon} style="" />
		</div>
	{/if}
</div>

<style>
	.icon-background {
		/* background: var(--background); */
		/* border-radius: var(--border-radius); */
		overflow: hidden;
		width: 64px;
		height: 64px;
	}

	.page-logo {
		width: 100%;
		height: 100%;
	}

	.page-logo.placeholder {
		padding: 10%;
		opacity: 0.75;
	}
</style>
