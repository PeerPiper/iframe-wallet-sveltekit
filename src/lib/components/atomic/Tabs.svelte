<script>
	import { goto } from '$app/navigation';

	export let queryName = null;
	export let tabs;
	export let disabled;
	export let currentTab;

	const isActive = (tab) => {
		const currentQuery = new URL(window.location.href).searchParams[queryName];
		return currentQuery ? currentQuery === tab.name.toLowerCase() : tabs.indexOf(tab) === 0;
	};
</script>

{#if queryName}
	<div class="tabs">
		{#each tabs as tab, name}
			<a
				href="#{new URLSearchParams({
					...new URL(window.location.href).searchParams,
					[queryName]: tab.name.toLowerCase()
				})}"
			>
				<div class="tab" style="--color: {tab.color}" class:active={isActive(tab)}>
					{tab.name}
				</div>
			</a>
		{/each}
	</div>
{:else}
	<div class="tabs">
		{#each tabs as tab}
			<button
				type="button"
				class="tab"
				style="--color:{tab.color}"
				class:active={currentTab === tab.name}
				on:click={() => (currentTab = tab.name)}
				{disabled}>{tab.name}</button
			>
		{/each}
	</div>
{/if}

<style>
	.tabs {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.tab {
		padding: 0.2em 0;
		flex: 1 1 0;
		text-align: center;
		cursor: pointer;
		user-select: none;
		text-decoration: none;
		transition: color 0.2s ease, opacity 0.2s ease;
		opacity: var(--element-disabled-opacity);
		color: inherit;
		position: relative;
	}

	.tab:hover {
		opacity: 1;
	}

	.tab:disabled {
		opacity: var(--element-disabled-opacity);
		cursor: unset;
	}

	.tab.active {
		opacity: 1;
		color: var(--color);
	}

	.tab::before {
		content: '';
		background: var(--color);
		width: 12px;
		height: 2px;
		border-radius: 1px;
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.5;
		transition: width 0.2s ease;
	}

	.tab.active::before {
		width: 100%;
		height: 2px;
		background: var(--color);
	}
</style>
