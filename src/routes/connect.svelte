<script>
	import { onMount } from 'svelte';

	import Carousel from '$lib/components/layout/Carousel.svelte';
	import ConnectionCard from '$lib/components/composed/ConnectionCard.svelte';

	let interfaceStore, emitter, select;
	let Connect, Wallets, Channel;

	let mounted;
	let state;
	let connectors;

	onMount(async () => {
		({ interfaceStore, emitter } = await import('$lib/store/InterfaceStore'));
		({ Connect, Wallets, Channel } = await import('@peerpiper/iframe-wallet-engine'));

		console.log({ Channel, Connect });

		state = Connect.state;

		connectors = Connect.connectors();
		console.log({ connectors });
	});

	$: currentConnectorIndex = connectors?.findIndex(
		(value) => value.origin === state.origin && value.session === state.session
	);
</script>

CONNECT

<div class="connect flex-column">
	<div class="connectors">
		{#if connectors?.length}
			<!-- <Carousel options={{ position: 'start', overscroll: true }}> -->
			{#each connectors as connector, session}
				<div class="connection-card-container fade-list-item">
					<div class="box">
						<ConnectionCard state={connector} />
					</div>
				</div>
			{/each}
			<!-- </Carousel> -->
		{/if}
	</div>
	{#if Channel?.states?.length}
		<div class="bottom-info secondary-text" style="opacity: 0.0; pointer-events: none;">
			<div>All Channels {Object.keys(Channel.states).length}</div>
			{#each Channel?.states as extState, name}
				<div>{{ extState }}</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.connect {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.connectors {
		width: 100%;
		min-height: var(--current-vh);
	}

	.connection-card-container {
		height: var(--current-vh);
		width: var(--current-vw);
		max-width: var(--column-width-small);
		padding: 0;
		display: inline-block;
	}

	.connection-card {
		padding: var(--spacing);
		padding-bottom: 0;
		height: 100%;
	}

	.wallet {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.address-icon {
		width: 128px;
		height: 128px;
		border-radius: var(--border-radius);
	}

	.bottom-info {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.fade-list-leave-active {
		position: absolute !important;
		/* scroll-snap-align: none; */
	}

	.fade-list-enter-active {
		/* scroll-snap-align: none; */
	}

	.fade-list-move {
		/* scroll-snap-align: none; */
	}
</style>
