<script>
	import { onMount } from 'svelte';
	import { CONSTANTS, internals } from '@peerpiper/iframe-wallet-engine';
	import { storedValue } from '$lib/stores';

	let keyDetails;
	let mounted;

	let syncKeys;
	let pending = true;

	onMount(() => {
		try {
			if (window.location.origin === window.opener?.origin) {
				sendOpenerMsg(CONSTANTS.OPENED_SIGNAL, (event) => {
					// called when the opener replies to our message above
					console.log('iframe confirmed loaded by opener');
					pending = false;
				});
			}
		} catch (error) {
			console.warn("Origins didn't match");
		}

		function sendOpenerMsg(msg, callback = (_) => {}) {
			const channel = new MessageChannel();
			channel.port1.onmessage = callback; // Listen for messages on port1
			try {
				if (window.opener?.origin === window.location.origin)
					window.opener.postMessage(msg, window.location.origin, [channel.port2]); // the opener will receive this message
			} catch (error) {
				console.log("Origins didn't match");
			}
		}

		// Called when user allows a copy of the keys to be imported to another browser window in same origin
		syncKeys = () => {
			sendOpenerMsg({ key: CONSTANTS.WINDOW_SYNC, storedValue: $storedValue }, (event) => {
				console.log('onComplete', event.data);
				pending = null;
				navigateBack();
			}); // uses same origin, keys are secure
		};

		window.addEventListener('beforeunload', () => {
			try {
				console.log(window.opener?.origin);
				console.log(window.location.origin);
				if (window.opener?.origin === window.location.origin)
					window.opener.postMessage(CONSTANTS.CLOSING);
				navigateBack();
			} catch (error) {
				console.log("Origins didn't match");
			}
		});

		mounted = true;
	});

	function navigateBack() {
		if (!window.opener) {
			return;
		}
		try {
			// window.opener.focus(); // fails
			window.history.back(); // works
			// window.close();
		} catch (e) {
			console.log(e);
		}
	}
</script>

{#if mounted && !pending}
	<slot {syncKeys} />
{/if}
