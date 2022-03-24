<script>
	import { onMount } from 'svelte';
	import { CONSTANTS } from '@peerpiper/iframe-wallet-engine';
	import { storedValue } from '$lib/stores';

	export let mounted;

	// function names assigned only after component loads in DOM
	let openTwinWindow;
	let handleMessage;

	// state variables
	let connecting;
	let openedWindow;

	let topUrl;

	onMount(async () => {
		topUrl = self === top ? document.URL : document.referrer;

		// If 1) is NOT top AND 2) No keys are stored a new twin window must be opened so that the user can generate keys, in the top window
		openTwinWindow = () => {
			connecting = true;
			openedWindow = window.open(window.location.href, '_blank'); // open the same domain to provide maximum security.
		};

		handleMessage = async (event) => {
			if (event.data == CONSTANTS.OPENED_SIGNAL) {
				event.ports[0].postMessage(topUrl);
				return;
			}

			if (event.data.key == CONSTANTS.WINDOW_SYNC) {
				console.log('Sync received ');
				$storedValue = event.data.storedValue;

				// save mnemonic to localstorage
				// run: mnemonic to proxcryptor
				// send confirmation back to opened window (so it can close)

				// await importKeys(JSON.parse(event.data.data)); // import the keys here in this browser context
				event.ports[0].postMessage('Imported'); // send ack back to Opened window so it can remove "pending" label for this window
				connecting = false;
				openedWindow.close();
				window.focus(); // fails tho
			}

			// Main page closed, state is no longer trying to connect
			if (event.data == CONSTANTS.CLOSING) {
				connecting = false;
			}
		};
	});
</script>

<svelte:window on:message={handleMessage} />

<div class="connector">
	{#if mounted}
		{#if $storedValue}
			<slot />
		{:else}
			<div>
				<button
					disabled={connecting}
					class={connecting ? 'yellow' : 'ready'}
					on:click|preventDefault={openTwinWindow}
					>{connecting ? 'Authorize from Main Wallet Window' : 'Connect'}</button
				>
			</div>
		{/if}
	{/if}
</div>

<style>
	.connector {
		display: flex;
		min-height: 100%;
		/* margin: 1em; */
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-wrap: nowrap;
	}
</style>
