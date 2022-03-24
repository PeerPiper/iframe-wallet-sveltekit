<script>
	import { onMount, setContext } from 'svelte';
	import Connector from '$lib/Connector.svelte';
	import GetKeys from '$lib/GetKeys.svelte';
	import { storedValue } from '$lib/stores';
	import AutoSizer from '$lib/AutoSizer.svelte';
	import Opened from '$lib/Opened.svelte';
	import Confirmer from '$lib/Confirmer.svelte';

	import Manager from '$lib/Manager.svelte';

	const STORED_VALUE = 'STORED_VALUE';
	const def = null;

	// browser functions (set in onMount to ensure browser loaded)
	let ImmortalDB, save, mounted;

	let syncing;

	onMount(async () => {
		({ ImmortalDB } = await import('immortal-db'));
		const storedString = await ImmortalDB.get(STORED_VALUE, def);
		$storedValue = JSON.parse(storedString);

		save = () => {
			ImmortalDB.set(STORED_VALUE, JSON.stringify($storedValue)); // auto save when $storedValue changes
		};

		try {
			syncing = window.opener && window.opener?.origin === window.location.origin;
		} catch (error) {
			// not syncing by same origin, that's ok it was probably a regular link from somewhere
		}
		mounted = true;
	});

	$: if (ImmortalDB && $storedValue && save) save();

	function loadedKeys() {
		save();
	}
</script>

<!-- Based on whether this is the Window.Top (not an iframe) or a Child (iframe) depends on which to show: -->
{#if window == window.top}
	<!-- NOT an iframe  -->
	<div class="top-wrapper">
		{#if mounted && syncing}
			<!-- Opened handles on:loadedKeys by ALSO syncing them with the opener window -->
			<Opened let:syncKeys>
				<Manager>
					{#if syncKeys}
						<GetKeys on:loadedKeys on:loadedKeys={syncKeys} />
					{/if}
				</Manager>
			</Opened>
		{:else}
			<!-- Manager handles on:loadedKeys ONLY by saving them to storage -->
			<Manager>
				<GetKeys on:loadedKeys />
			</Manager>
		{/if}
	</div>
{:else}
	<!-- Auto-resize embedded iframe -->
	<AutoSizer let:walletReady let:show let:hide>
		<!-- walletReady gets passed from AutoSizer to GetKeys -->
		<Connector {mounted}>
			<Confirmer {show} {hide} />
			<Manager>
				{#if walletReady}
					<GetKeys on:loadedKeys={walletReady} />
				{/if}
			</Manager>
		</Connector>
	</AutoSizer>
{/if}

<!-- Note: Don't style outside of the AutoSizer, or else the sizes in the ifram will be all messed up -->
<style>
	.top-wrapper {
		margin: 1.618em;
		padding: 1.618em;
	}
</style>
