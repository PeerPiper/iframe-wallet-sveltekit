<script>
	export let value;
	export let placeholder;
	export let disabled;
	export let id;
	export let autocomplete;

	let hasAutofill;

	const handleAutofill = (e) => {
		if (e.animationName === 'onAutofill') {
			hasAutofill = true;
		}
		if (e.animationName === 'onAutofillCancel') {
			hasAutofill = false;
		}
	};
</script>

<input on:animationstart={handleAutofill} bind:value {placeholder} {disabled} {id} {autocomplete} />

<style>
	input {
		font-size: 1em;
		outline: none;
		border: none;
		background-color: transparent;
	}

	input:-webkit-autofill {
		animation: onAutofill 1s 2;
		transition: background-color 100000s, color 100000s;
	}

	input:not(:-webkit-autofill) {
		animation: onNotAutofill 1s 2;
	}

	@keyframes onAutofill {
		from {
			opacity: 1;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes onAutofillCancel {
		from {
			opacity: 1;
		}
		to {
			opacity: 1;
		}
	}
</style>
