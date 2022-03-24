<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// import WalletSelector from '$lib/components/composed/WalletSelector.svelte';
	// import WalletTabs from '$lib/components/composed/WalletTabs.svelte';
	import Tabs from '$lib/components/atomic/Tabs.svelte';
	import IconBackground from '$lib/components/atomic/IconBackground.svelte';
	import Icon from '$lib/components/atomic/Icon.svelte';
	import Notification from '$lib/components/composed/Notification.svelte';
	// // import PermissionCard from '$lib/components/composed/PermissionCard.svelte';

	import IconConnection from '$lib/assets/icons/connection.svg';
	import IconY from '$lib/assets/icons/y.svg';
	import IconX from '$lib/assets/icons/x.svg';
	import IconLaunch from '$lib/assets/icons/launch.svg';

	import type { ConnectorTypes } from '@peerpiper/iframe-wallet-engine';

	type ConnectorState = ConnectorTypes.ConnectorState;

	export let state: ConnectorState;

	let Wallets, Connect, Channel;
	let mounted;

	onMount(async () => {
		({ Connect, Wallets, Channel } = await import('@peerpiper/iframe-wallet-engine'));
	});

	$: defaultId = Wallets ? Wallets[0]?.id : 0;

	$: isSelectingWallet = !state.walletId;
	$: currentId = state.walletId || defaultId;
	// $: defaultWallet = Wallets.getWalletById(defaultId);

	const tabs = [
		{ name: 'Requests', color: 'var(--orange)' }
		// { name: 'Permissions', color: 'var(--green)' }
	];

	$: currentTab = currentId ? tabs[0].name : null; // (currentId || '') + currentTab

	// if (state.walletId) {
	// 	isSelectingWallet = false;
	// 	currentId = state.walletId;
	// 	currentTab = tabs[0].name;
	// }

	// const disconnect = () => (state.walletId = false);

	const connect = () => {
		isSelectingWallet = false;
		state.walletId = currentId + '';
	};

	const goBack = () => {
		if (!state.walletId) {
			return;
		}
		isSelectingWallet = false;
		currentId = state.walletId;
	};

	const selectWallet = () => {
		if (!isSelectingWallet) {
			isSelectingWallet = true;
			return;
		}
		currentId = state.walletId || Wallets[0]?.id;
		isSelectingWallet = false;
	};

	$: connectData = connectD();

	const connectD = () => {
		const content = !state.walletId
			? `Connect to ${state.appInfo?.name || state.origin} from the account ${currentId}`
			: `Switch to ${currentId}`;
		return {
			title: state.walletId ? 'Switch' : 'Connect',
			timestamp: Date.now(), // todo
			actions: [
				{
					name: 'Connect',
					icon: IconY,
					run: connect
				},
				{
					name: !state.walletId ? 'Switch' : 'Cancel',
					icon: IconX,
					run: !state.walletId ? selectWallet : goBack
				}
			],
			expanded: true,
			content
		};
	};

	$: connectionFeed = getConnectionFeed();

	const getConnectionFeed = () =>
		currentId === state.walletId ? state.messageQueue?.filter((m) => !m.fulfilled) : [];

	// let transitionName = null as null | string;

	// const selectTransitionName = (val: number, oldVal: number) =>
	// 	val > oldVal ? (transitionName = 'slide-left') : (transitionName = 'slide-right');

	// if (selectTransitionName && tabs) tabs.findIndex((tab) => tab.name === currentTab);

	// if (selectTransitionName && Wallets) Wallets.findIndex((wallet) => wallet.id === currentId);
</script>

<div class="connection-card flex-column no-scrollbar">
	<div class="flex-column" style="flex: 1 1 0;">
		<Tabs {tabs} {currentTab} disabled={!currentId} />
		<div class="container">
			<div class="container-scroll">
				<div class="content">
					{#if currentTab === 'Requests'}
						<div transition:fade>
							{#if isSelectingWallet}
								<div transition:fade>
									<!-- <WalletTabs model={currentId} class="box fade-list-item" /> -->
									{#if connectionFeed?.length === 0 && state.walletId && state.walletId === currentId}
										<div class="box status fade-list-item">Connected</div>
									{/if}
									{#if currentId !== state.walletId}
										<div class="box fade-list-item">
											<Notification data={connectData}>
												{connectData.content}
											</Notification>
										</div>
									{/if}
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style scoped>
	.connection-card {
		overflow-y: auto;
	}

	.flex-row {
		align-items: center;
	}

	.info {
		flex: 1 1 0;
		min-width: 0;
		overflow: hidden;
	}

	.wallet-selector {
		flex: 0 0 auto;
		justify-content: flex-end;
	}

	.wallet-tabs {
		padding: var(--spacing) 0;
		justify-content: center;
		width: 100%;
	}

	.container {
		flex: 1 1 0;
		/* max-height: 60vh; */
		background: var(--background);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		align-items: center;
		justify-content: flex-start;
		overflow: hidden;
		position: relative;
		min-height: min(300px, calc(var(--current-vh) - calc(var(--spacing) + 5px)));
	}

	.container-scroll {
		overflow: hidden auto;
		height: 100%;
	}

	.content {
		width: 100%;
		height: 100%;
		position: relative;
		/* padding: var(--spacing);
	border-bottom: 0.5px solid #ffffff20; */
	}

	.status {
		height: 8em;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #444;
	}

	.content > * > * {
		background: var(--background);
		width: 100%;
	}

	.notification {
		width: 100%;
		padding: var(--spacing);
		border-bottom: 0.5px solid var(--border);
	}

	.icon-background {
		flex: 0 0 auto;
	}

	.icon {
		opacity: var(--element-secondary-opacity);
	}
</style>
