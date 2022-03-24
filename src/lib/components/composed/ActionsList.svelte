<script>
	import Icon from '$lib/components/atomic/Icon.svelte';

	export let actions;
</script>

<div class="actions-list flex-row">
	{#each actions as action}
		<button on:click={action.run} type="button" class="action flex-row">
			<Icon icon={action.icon} style="" />
			<div>{action.name}</div>
		</button>
	{/each}
</div>

<style scoped>
	.actions-list {
		--spacing-notification: 8px;
		--spacing: var(--spacing-notification);
		padding-top: 0.5em;
		font-size: 0.9em;
	}

	.action {
		--spacing: var(--spacing-default);
		align-items: center;
	}

	.action > * {
		--spacing: var(--spacing-notification);
	}

	.flex-row > * {
		min-width: 0;
	}
</style>
