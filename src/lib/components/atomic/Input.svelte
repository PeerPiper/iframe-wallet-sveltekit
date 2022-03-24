<script setup>
	import Icon from '$lib/components/atomic/Icon.svelte';
	import RawInput from '$lib/components/atomic/RawInput.svelte';

	export let value;
	export let actions;
	export let mask;
	export let icon;
	export let placeholder;

	let autocomplete, disabled, id;
	let focus;

	let oldVal = '';

	$: if (value) check(check, oldVal);

	const check = (newVal, oldVal) => {
		if (!mask) {
			return;
		}
		if (!mask(newVal)) {
			value = oldVal;
			return;
		}
		oldVal = value; // it's good, make oldVal this value
	};
</script>

<template>
	<div class="input input-box" class:focus>
		{#if icon}
			<Icon {icon} style={''} />
		{/if}
		<div class="text">
			<RawInput
				{placeholder}
				{disabled}
				{id}
				{autocomplete}
				bind:value
				on:focus={() => (focus = true)}
				on:blur={() => (focus = false)}
			/>
		</div>
		{#each actions as action}
			<button class="action" on:click={() => action.run}>
				<Icon icon={action.icon} style={''} />
			</button>
		{/each}
	</div>
</template>

<style>
	.input {
		height: 3.5em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		font-size: 1.4em;
		width: 2em;
		opacity: var(--element-secondary-opacity);
	}

	.focus .icon {
		opacity: 1;
	}

	.text {
		height: inherit;
		font-size: 1em;
		padding: 0 var(--spacing);
		outline: none;
		border: none;
		flex: 1 1 auto;
		background-color: transparent;
		color: var(--element-secondary);
		width: 100%;
	}

	.action {
		height: 100%;
		display: flex;
		align-items: center;
	}
</style>
