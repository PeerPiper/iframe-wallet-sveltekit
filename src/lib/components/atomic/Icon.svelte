<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let icon;
	export let style;

	let mounted;
	onMount(() => {
		mounted = true;
	});
	const thickness = 5;
	const normalizedRadius = 50 - thickness / 2;
	const circumference = normalizedRadius * 2 * Math.PI;

	let progress;
	let loaded = false;
	let finishAnimation = false;

	$: iconData = icon ? icon : icon;
	$: component = typeof iconData === 'object' ? iconData : null;
	$: isSymbol = typeof iconData === 'string' && iconData.length <= 2;
	$: strokeDashoffset = circumference - ((progress ?? 25) / 100) * circumference; // ?? nullish coalescing operator; allows you provide a default value to use when a variable expression evaluates to null or undefined

	$: if (iconData) loaded = false;

	if (progress)
		(value, oldValue) => {
			if (value != null && oldValue == null) finishAnimation = true;
		};
</script>

<span class="icon" {style}>
	{#if mounted}
		<div transition:fade>
			{#if component}
				<svelte:component this={component} />
			{:else if iconData == 'loader'}
				<svg
					class="loader"
					height="100"
					width="100"
					viewBox="0 0 100 100"
					class:spin={progress == null}
				>
					<circle
						stroke="#ffffff22"
						stroke-width={thickness}
						fill="transparent"
						r={normalizedRadius}
						cx="50"
						cy="50"
					/>
					<circle
						stroke="currentColor"
						stroke-dasharray={circumference + ' ' + circumference}
						style="strokeDashoffset: {strokeDashoffset}"
						stroke-width={thickness}
						stroke-linecap="round"
						fill="transparent"
						r={normalizedRadius}
						cx="50"
						cy="50"
						on:animationiteration={() => (finishAnimation = false)}
						class:spin={progress == null || finishAnimation}
					/>
				</svg>
			{:else if isSymbol}
				<span class="symbol no-select">{iconData}</span>
			{:else if loaded}
				<img
					on:load={() => (loaded = true)}
					alt="loaded"
					class="img no-select"
					id="iconData"
					src={iconData}
				/>
			{/if}
		</div>
	{/if}
</span>

<style>
	.icon {
		flex: 0 0 auto;
		height: 1em;
		width: 1em;
		border-radius: inherit;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s ease;
	}

	.img {
		width: inherit;
		height: inherit;
		object-fit: contain;
	}

	.symbol {
		font-size: 1em;
	}

	.loader {
		transform: rotate(-45deg);
		transition: transform 0.5s ease;
	}

	.loader.spin {
		transform: rotate(-135deg);
	}

	circle.spin {
		animation: loader-animation 2s infinite linear;
		/* animation-timing-function: cubic-bezier(0.6, 0.4, 0.4, 0.6); */
	}

	@keyframes loader-animation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	svg {
		width: 100%;
		height: 100%;
	}

	circle {
		transition: stroke-dashoffset 0.5s ease;
		transform-origin: 50% 50%;
	}
</style>
