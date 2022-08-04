<script>
	/**
	Keys can come from:
	- Loaded from storage (index.svelte, in which case this component is not needed)
	- Generated from scratch (here)
	- Load by user (here)

	keys get saved to $storedValue which trigger the ImmortalDB saved
	*/
	import { onMount, createEventDispatcher } from 'svelte';
	import { storedValue } from '$lib/stores';

	import { internals } from '@peerpiper/iframe-wallet-engine';
	import ListKeys from './ListKeys.svelte';

	const dispatch = createEventDispatcher();

	let handleGenerateKeypair;

	// state variables
	let creating = '';
	let keys;

	onMount(async () => {
		handleGenerateKeypair = async () => {
			creating = 'Creating keypairs...';

			const mnemonic = await internals.generateMnemonic();
			const rsajwk = await internals.generateRsaJwk();

			// save to storedValue.
			// TODO: offer password protection/encryption?
			$storedValue = { ...$storedValue, mnemonic, rsajwk };

			creating += '<br/>Created mnemonic.';
			creating += `<br/>${mnemonic}`;
			creating += '<br/>Creating master keypair (type ed25519)...';
		};
	});

	$: if ($storedValue && $storedValue.mnemonic) loadKeys(); // load keys once there is a storedValue

	async function loadKeys() {
		await internals.loadSecrets({ mnemonic: $storedValue.mnemonic, rsajwk: $storedValue.rsajwk });

		dispatch('loadedKeys', 'details'); // let parent component know
		keys = getLoadedKeys(); // get all proxcryptor public key info
	}

	function getLoadedKeys() {
		return internals.getLoadedKeys();
	}
</script>

{#if $storedValue !== undefined && $storedValue === null}
	<!-- Show "Create Keys" if no keys exist, no matter what page is showing -- toolbar? -->
	<div class="submit flex flex-col text-black bg-yellow-300 shadow p-8 m-4 rounded w-fit">
		No keypairs detected in this browser. Create or Import them:
		<button
			class="bg-green-500 rounded shadow-lg shadow-slate-600/50 p-4 w-fit m-4 text-white"
			on:click={handleGenerateKeypair}>Create New Keypairs</button
		>
		{@html creating}
	</div>
{:else}
	<!-- GetKeys: has storedValue, sending to Connector if in Opened window. Else, allowing user to manage keys.<br /> -->
	<ListKeys {keys} />
	<slot />
{/if}

<style>
	div {
		padding: 2em;
	}
</style>
