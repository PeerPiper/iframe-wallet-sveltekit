<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let options: {
		position: ScrollLogicalPosition;
		overscroll: boolean;
		immediate?: boolean;
	};

	onMount(() => {});
</script>

<div class="carousel flex-row no-scrollbar">
	<div transition:fade class={options?.overscroll ? 'margin fade-list-item' : ''} />
	<slot />
	<div transition:fade class={options?.overscroll ? 'margin fade-list-item' : ''} />
</div>

<style>
	.carousel {
		--position: start;
		scroll-snap-type: x mandatory;
		overflow: auto;
		white-space: nowrap;
		display: block; /* for transitions */
		line-height: 0;
		overscroll-behavior-x: contain;
		position: relative;
	}

	.carousel > :deep(*) {
		line-height: var(--line-height);
	}

	.carousel > :deep(*:not(.margin)) {
		scroll-snap-align: var(--position);
	}

	.margin {
		width: calc(var(--current-vw) * 1);
		/* display: inline-block; */
		display: flex;
	}
</style>
