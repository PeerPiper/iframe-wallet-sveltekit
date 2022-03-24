<script>
	import DefaultConfirmation from './DefaultConfirmation.svelte';

	export let props;
	export let handleConfirmed;
	export let handleDenied;

	const decoder = new TextDecoder();

	let defConf;
	console.log({ props });
</script>

<!-- on:confirmed on:denied -- they just forward the event notification up to <Confirmer /> -->
<!-- https://svelte.dev/tutorial/event-forwarding -->
<div class="attention">
	<!-- this is default content, override with slot -->
	<div>
		<!-- JSON.stringify(, null, 2)   decoder.decode()-->
		<!-- {props.params.toString()}  -->
		<!-- TODO: Data layouts for confirmer  -->
		⚠️ Sign this transaction?
	</div>
	<div class="submit">
		<button class="yellow" on:click|preventDefault={handleDenied}>No</button>
		<button class="green" on:click|preventDefault={handleConfirmed}>Yes</button>
	</div>
</div>

<style>
	div.attention {
		display: flex;
		flex-direction: column;
		background-color: #fff9c4;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
		width: 100%;
	}
	div {
		padding: 0.3em;
		margin: 0.3em;
	}
</style>
