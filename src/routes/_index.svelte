<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let interfaceStore, emitter, select;
	let Connect, Wallets, Connection;

	let mounted;
	let state;

	onMount(async () => {
		({ interfaceStore, emitter } = await import('$lib/store/InterfaceStore'));
		({ Connect, Wallets, Connection } = await import('@peerpiper/iframe-wallet-engine'));

		let connection = new Connection();
		let connector = await connection.init();

		console.log({ connector });
		connector.setIframeParentHeight(690);

		state = Connect.state;
		console.log({ state });
		await redirect();
		mounted = true;
	});

	const redirect = async () => {
		if (state.type === 'iframe') {
			$interfaceStore.set('toolbar.enabled', false);
			// location.assign('/connector');// doesnt work?
			await goto('/connector');
		}
		if (state.type === 'popup') {
			// location.assign('/connect');// doesnt work?
			await goto('/connect');
		}
		// return Wallets.value[0]
		// 	? { name: 'TxList', params: { walletId: Wallets.value[0].id } }
		// 	: { name: 'Welcome' };
	};

	$: state && location.hash && redirect();
</script>

{#if mounted}
	<h1>Welcome to iFrame-Wallet-Engine UI!</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{/if}
