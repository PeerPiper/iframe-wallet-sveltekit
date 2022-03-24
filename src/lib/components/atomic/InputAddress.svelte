<script>
	import AddressIcon from '$lib/components/atomic/AddressIcon.svelte';
	import Input from '$lib/components/atomic/Input.svelte';

	import IconPerson from '$lib/assets/icons/person.svg';

	export let actions;
	export let disabled;
	export let id;
	export let value;

	const maskAddress = (address) => {
		return address.match(/^[a-z0-9_-]{0,43}$/i);
	};
</script>

<div class="row flex-row">
	<Input
		icon={IconPerson}
		placeholder="Address"
		mask={maskAddress}
		{actions}
		{disabled}
		{id}
		{value}
	/>
	<div class="address-icon" />
	<AddressIcon address="model" />
</div>

<style>
	.input {
		flex: 1 1 0;
	}

	.address-icon {
		flex: 0 0 auto;
		width: 3.5em;
		height: 3.5em;
		padding: 0;
		border-radius: var(--border-radius);
	}

	.row {
		min-height: 3em;
		align-items: center;
		justify-content: space-between;
	}
</style>
