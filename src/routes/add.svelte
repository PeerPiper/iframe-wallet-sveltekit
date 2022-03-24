<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	// import InputData from '$lib/components/atomic/InputData.svelte';
	// import InputAddress from '$lib/components/atomic/InputAddress.svelte';
	import Button from '$lib/components/atomic/Button.svelte';
	import Icon from '$lib/components/atomic/Icon.svelte';
	// import { LedgerProviderData } from '$lib/providers/Ledger.ts'
	// import { arweave } from '$lib/store/ArweaveStore'
	// import { addProvider, LedgerProviderData } from '@peerpiper/iframe-wallet-engine';

	import LogoArweave from '$lib/assets/logos/arweave.svg';
	import IconAddBox from '$lib/assets/icons/add_box.svg';
	import InputData from '$lib/components/atomic/InputData.svelte';

	let Wallets;

	onMount(async () => {
		({ Wallets } = await import('@peerpiper/iframe-wallet-engine')); // browser must be loaded
		console.log({ Wallets });
	});

	const hardwareProviders = [LedgerProviderData];

	let isCreatingWallet, passphraseInput, createdWallet, isGeneratingWallet, isPassphrase;

	let popup = {};

	$: if (passphraseInput) isPassphrase = passphraseInput.trim().split(/\s+/g).length >= 12;

	const importProvider = async (provider) => {
		const id = await addProvider(provider);
		await goto(`/edit?wallet=${id}`);
	};

	async function goToCreatedWallet() {
		await goto(`/edit?wallet=${createdWallet}`);
	}

	const create = async () => {
		isCreatingWallet = true;
		passphraseInput = await Wallets.generateMnemonic();
		console.log({ passphraseInput });
		const seed = await Wallets.mnemonic_to_seed(passphraseInput); // TODO: persist
		const masterKey = Wallets.mnemonicToMaster(passphraseInput);
		createdWallet = masterKey;
	};

	const importPassphrase = async () => {
		isGeneratingWallet = true;
		const id = Wallets.addMnemonic(passphraseInput);
		popup.enabled = true;
		popup.icon = 'loader';
		popup.message = 'Importing';
		popup.actions = [];
		await id;
		goto(`/edit?wallet=${id}`);
	};

	const importFile = async (file) => {
		if (!file) {
			return;
		}
		const id = await Wallets.addWallet(JSON.parse(await file[0].text()));
		goto(`/edit?wallet=${id}`);
	};

	const confirmPassphrase = async () => {
		if (await Wallets.validateMnemonic(passphraseInput)) {
			return importPassphrase();
		}
		popup.enabled = true;
		popup.icon = '';
		popup.message = 'This passphrase is not valid, do you want to import it anyway?';
		popup.actions = [
			{ name: 'Back', action: () => (popup.enabled = false) },
			{ name: 'Import Passphrase', action: () => importPassphrase() }
		];
	};
</script>

<div class="add-wallet flex-column">
	<div class="card">
		<h2 style="display:flex; justify-content:space-between;">
			<span>Passphrase</span>
			<span>Key file</span>
		</h2>
		<div class="flex-column">
			<InputData
				{passphraseInput}
				on:files={importFile}
				disabled={isCreatingWallet}
				placeholder="Import passphrase or key file"
				id={''}
				focus={''}
			/>
			<div />
			{#if !isCreatingWallet && !passphraseInput?.length}
				<Button
					on:click={() => create()}
					disabled={passphraseInput?.length && !isPassphrase}
					icon={LogoArweave}>Create New Wallet</Button
				>
			{:else if isCreatingWallet}
				<Button
					disabled={createdWallet == null}
					on:click={goToCreatedWallet}
					icon={createdWallet == null ? 'loader' : ''}
					>{createdWallet == null
						? 'Generating, write down the passphrase'
						: 'Passphrase saved? Click here to proceed'}</Button
				>
			{:else}
				<Button
					icon={''}
					disabled={!isPassphrase || isGeneratingWallet}
					on:click={confirmPassphrase}>Import passphrase</Button
				>
			{/if}
		</div>
		{#if popup.enabled}
			<div transition:fade class="overlay flex-column">
				<div
					style="flex:1 1 auto; display:flex; flex-direction:column; align-items:center; justify-content:space-evenly; margin-bottom:var(--spacing);"
				>
					{#if popup.icon}
						<Icon icon={popup.icon} style={'font-size: 2em;'} />
					{/if}
					{popup.message}
				</div>
				<div class="actions-container flex-row">
					{#each popup.actions as action}
						<Button icon={''} disabled={false} on:click={action.action}>{action.name}</Button>
					{/each}
				</div>
			</div>
		{/if}
	</div>
	<div class="card">
		<h2>Hardware</h2>
		{#each hardwareProviders as provider}
			<Button
				disabled={!provider.isSupported}
				on:click={() => importProvider(provider)}
				icon={provider.icon}
			>
				{provider.name}
				{!provider.isSupported ? ' not supported for this browser' : ''}
			</Button>
		{/each}
	</div>
</div>

<style scoped>
	.add-wallet {
		width: 100%;
		min-height: var(--current-vh);
		padding: var(--spacing);
		align-items: center;
	}

	.card {
		width: 100%;
		max-width: var(--column-width);
		overflow: hidden;
	}

	.actions-container {
		width: 100%;
	}

	.overlay {
		background: inherit;
		border-radius: inherit;
		padding: inherit;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
