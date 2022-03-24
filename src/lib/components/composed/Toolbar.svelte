<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	import AddressIcon from '$lib/components/atomic/AddressIcon.svelte';
	import DragOverlay from '$lib/components/atomic/DragOverlay.svelte';

	import IconConnection from '$lib/assets/icons/connection.svg';
	import IconAddBox from '$lib/assets/icons/add_box.svg';
	import IconSettings from '$lib/assets/icons/settings.svg';
	import logo from '$lib/assets/p.svg';

	import ArweaveStore from '$lib/store/ArweaveStore';

	import { onMount } from 'svelte';

	let Connect, Wallets;
	let verticalLayout, interfaceStore, emitter, select;

	let mounted;

	onMount(async () => {
		// ({ getWallet } = await import('@peerpiper/iframe-wallet-engine'));
		({ verticalLayout, interfaceStore, emitter } = await import('$lib/store/InterfaceStore'));

		select = (wallet, navigate) => {
			emitter.emit('selectWallet', wallet?.key);
			if (links) {
				return navigate();
			}
		};

		mounted = true;
	});

	let axis, links;

	const navTo = $page.url.pathname === 'wallet' ? 'wallet' : 'tx-list';

	$: selected = links ? $page.params.walletId : ArweaveStore.currentWallet?.id;

	$: if ($interfaceStore?.toolbar?.links) links = $interfaceStore.toolbar.links;
	$: axis = $verticalLayout ? 'x' : 'y';
</script>

<template>
	<nav class="toolbar box no-scrollbar" id="nav">
		<div class="icon controls">
			<a href="/">
				<img src={logo} class="shadow" alt="PeerPiper Home" />
			</a>
		</div>
		<div class="wallets">
			{#if Wallets?.length > 0}
				{#each Wallets as wallet, i}
					<a href="/{navTo}/{wallet.id}/{$page.url.search}">
						<button
							type="button"
							on:click={select(wallet)}
							class="icon wallet"
							class:verticalLayout={$verticalLayout}
							class:router-link-active={wallet.id == selected && links}
							class:accent={!links}
							class:active={wallet.id == selected && links}
							><div class="profile">
								<AddressIcon address={wallet.key} />
							</div>
						</button>
					</a>
				{/each}
			{/if}
		</div>
		{#if links}
			<div class="controls" transition:fade>
				{#if Connect?.connectors?.length}
					<div name="fade-fast" transition:fade>
						<a
							href="/connect"
							class:verticalLayout={$verticalLayout}
							class="icon control"
							aria-label="Add Wallet"
						>
							<img src={IconConnection} class="small" alt="Connections" />
						</a>
					</div>
				{/if}
				<a
					href="/add"
					class:verticalLayout={$verticalLayout}
					class="icon control"
					aria-label="Add Wallet"
				>
					<img src={IconAddBox} class="small" alt="Add Wallet" />
				</a>
				<a
					href="/settings"
					class:verticalLayout={$verticalLayout}
					class="icon control"
					aria-label="Settings"
				>
					<img src={IconSettings} class="small" alt="Settings" />
				</a>
			</div>
		{/if}
		<DragOverlay />
	</nav>
</template>

<style>
	#nav {
		padding: calc(var(--toolbar-spacing) / 2);
		user-select: none;
		justify-content: flex-start;
	}

	.wallets {
		display: flex;
		flex-direction: inherit;
	}

	.icon {
		position: relative;
		padding: calc(var(--toolbar-spacing) / 2);
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s ease;
	}

	.wallet {
		opacity: var(--element-disabled-opacity);
	}

	.controls {
		display: flex;
		flex-direction: inherit;
		margin: calc(var(--toolbar-spacing) / 2) 0;
		justify-content: flex-start;
	}

	.controls .verticalLayout {
		margin: 0 calc(var(--toolbar-spacing) / 2);
	}

	.control {
		border-radius: var(--border-radius);
		opacity: var(--element-secondary-opacity);
		width: unset;
		height: unset;
	}

	.profile {
		background: var(--background3);
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius3);
		position: relative;
		transition: 0.2s ease;
	}

	.small {
		width: 24px;
		height: 24px;
	}

	.icon:hover {
		opacity: 1;
	}

	.icon.active,
	.icon.accent,
	.icon.router-link-active {
		opacity: 1;
	}

	/*  .icon {
		opacity: 1;
	} */

	/*  .icon > * {
		transform: translateX(calc(100% + var(--toolbar-spacing) * 2));
		box-shadow: 0 0 12px 1px #00000044;
	} */

	/* [dir='rtl']  .icon > * {
		transform: translateX(calc(-100% - var(--toolbar-spacing) * 2));
	} */

	.icon.verticalLayout > * {
		/* transform: translateY(calc(100% + var(--toolbar-spacing) * 2)); */
	}

	.icon::before {
		--weight: 2px;
		--length: calc(100% - var(--toolbar-spacing));
		--offset: calc(var(--toolbar-spacing) / 2);
		--distance: -1px;
		content: '';
		background: var(--element-secondary);
		position: absolute;
		top: var(--offset);
		left: var(--distance);
		width: var(--weight);
		height: var(--length);
		opacity: 0;
		border-radius: 1px;
		transition: 0.2s ease;
	}

	.icon.active::before,
	.icon.router-link-active::before {
		opacity: 1;
	}

	.icon::before {
		--offset: 0;
		--distance: calc(var(--toolbar-spacing) / -2);
		--length: 100%;
	}

	.icon.verticalLayout::before {
		top: var(--distance);
		left: var(--offset);
		width: var(--length);
		height: var(--weight);
	}

	.icon::before {
		left: unset;
		right: var(--distance);
	}

	.icon.verticalLayout::before {
		left: unset;
		right: var(--offset);
	}

	.icon::before {
		left: unset;
		right: var(--distance);
	}

	.icon.verticalLayout::before {
		left: unset;
		right: var(--offset);
	}
	img {
		width: auto;
		height: 2.5em;
		display: block;
	}
</style>
