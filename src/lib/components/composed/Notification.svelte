<script>
	// import IconBackground from '$lib/components/atomic/IconBackground.svelte';
	// import Date from '$lib/components/atomic/Date.svelte';
	// import Expand from '$lib/components/atomic/Expand.svelte';
	// import ActionsList from '$lib/components/composed/ActionsList.svelte';

	// import IconNotification from '$lib/assets/icons/notification.svg';

	export let data;
</script>

<!-- 
<div class="notification" class:expanded={data.expanded}>
	<div class="flex-row">
		<div class="flex-row" style="flex: 1 1 0;">
			<IconBackground icon={data.icon || IconNotification} img={data.img} />
			<div class="content">
				{#if data.expanded}
					<div class="secondary-text">
						<Date timestamp={data.timestamp} />
					</div>
				{/if}
				<div class="title">{data.title}</div>
				<div class="secondary-text">
					<slot />
				</div>
				{#if data.expanded}
					<ActionsList actions={data.actions} />
				{/if}
			</div>
		</div>
		<Expand expanded={data.expanded} />
	</div>
</div> -->
<style scoped>
	.notification {
		--spacing-notification: 8px;
		--spacing: var(--spacing-notification);
	}

	.icon-background {
		flex: 0 0 auto;
		width: 52px;
		height: 52px;
		align-self: flex-start;
	}

	.title {
		font-size: 1.1em;
	}

	.content {
		flex: 1 1 0;
		min-width: 0;
	}

	.notification:not(.expanded) .content > * {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.expand {
		flex: 0 0 auto;
	}

	.flex-row > * {
		min-width: 0;
	}
</style>
