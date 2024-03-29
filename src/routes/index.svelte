<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Connector from '$lib/Connector.svelte';
	import GetKeys from '$lib/GetKeys.svelte';
	import { storedValue } from '$lib/stores';
	import AutoSizer from '$lib/AutoSizer.svelte';
	import Opened from '$lib/Opened.svelte';
	import Confirmer from '$lib/Confirmer.svelte';

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
{#if ImmortalDB && window == window.top}
	<!-- NOT an iframe  -->
	<div class="m-2">
		{#if mounted && syncing}
			<!-- Opened handles on:loadedKeys by ALSO syncing them with the opener window -->
			<Opened let:syncKeys>
				{#if syncKeys}
					<GetKeys on:loadedKeys on:loadedKeys={syncKeys} />
				{/if}
			</Opened>
		{:else}
			<GetKeys on:loadedKeys />
		{/if}
	</div>
{:else if ImmortalDB}
	<!-- Auto-resize embedded iframe -->
	<AutoSizer let:walletReady let:show let:hide>
		<!-- walletReady gets passed from AutoSizer to GetKeys -->
		<Connector {mounted}>
			<Confirmer {show} {hide} />
			{#if walletReady}
				<GetKeys on:loadedKeys={walletReady} />
			{/if}
		</Connector>
	</AutoSizer>
{/if}
