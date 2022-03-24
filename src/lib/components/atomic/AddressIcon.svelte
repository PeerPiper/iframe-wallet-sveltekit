<script lang="ts">
	import { fade } from 'svelte/transition';

	// import ArweaveStore from '$lib/store/ArweaveStore';
	import Identicon from '$lib/components/atomic/Identicon.svelte';
	// import ProfileStore, { getArweaveId } from '$lib/store/ProfileStore';

	import IconCloud from '$lib/assets/icons/cloud.svg';

	export let address: string;

	const isValid = (!!address && address?.match(/^[a-z0-9_-]{43}$/i)) || false;
	// const arweaveId = $ProfileStore.arweaveId[address];
	// let hasTransition = !arweaveId.value;
	let loaded = false;

	// $: if (arweaveId) {
	// 	hasTransition = false;
	// 	setTimeout(() => (hasTransition = true), 200);
	// }

	// return { ArweaveStore, isValid, arweaveId, hasTransition, loaded };

	// if (isValid && arweaveId?.Image) loaded = true;
</script>

<template>
	<div class="address-icon no-select">
		{#if isValid && address}
			<div name="fade-fast" class="identicon">
				<Identicon {address} alt="wallet logo" />
			</div>
		{:else}
			<img src={IconCloud} class="identicon cloud" alt="bookmark" />
		{/if}
		<!-- {#if isValid && arweaveId?.Image} -->
		<!-- <div transition:fade> -->
		<!-- <img class="image" src="{ArweaveStore.gatewayURL}{arweaveId?.Image}" alt="Wallet profile" /> -->
		<!-- </div> -->
		<!-- {/if} -->
	</div>
</template>

<style>
	.address-icon {
		padding: 12px;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.identicon {
		position: absolute;
		padding: inherit;
		width: 100%;
		height: 100%;
		max-width: 128px;
		max-height: 128px;
		object-fit: contain;
	}

	.image {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		object-fit: cover;
	}

	.cloud {
		/* opacity: 0.2; */
		filter: opacity(0.2);
	}
</style>
