<script>
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	import DragOverlay from '$lib/components/atomic/DragOverlay.svelte';

	import IconText from '$lib/assets/icons/text.svg';
	import IconDrop from '$lib/assets/icons/drop.svg';
	import IconCloud from '$lib/assets/icons/cloud.svg';
	import IconX from '$lib/assets/icons/x.svg';

	export let passphraseInput;
	export let disabled, id, placeholder, focus;
	let model, emit;
	let mounted;

	let dragOverlay;
	onMount(async () => {
		({ dragOverlay } = await import('$lib/store/InterfaceStore'));
		mounted = true;
	});

	const handleFiles = (e) => {
		if (disabled) {
			return;
		}
		if (e.dataTransfer?.files) {
			return emit('files', e.dataTransfer.files);
		}
		if (e.target?.files) {
			return emit('files', e.target.files);
		}
	};
	$: isFile = typeof model === 'object';
	const clearFiles = () => {
		emit('files', null);
	};
</script>

<div class="input-data input-box" class:focus on:drop={handleFiles}>
	{#if !isFile}
		<textarea
			on:focus={(_) => (focus = 1)}
			on:blur={(_) => (focus = 0)}
			{disabled}
			{id}
			{placeholder}
			bind:value={passphraseInput}
		/>
		{#if !passphraseInput && !$dragOverlay}
			<div class="overlay passthrough" transition:fade>
				<div class="big-icon-container">
					<img src={IconText} class="img" alt="icon" />
				</div>
				<div class="spacer" />
				<div class="big-icon-container not-passthrough">
					<label for="file-picker" class="file-picker-label">
						<img src={IconDrop} class="img" alt="drop file" />
					</label>
					<input
						type="file"
						id="file-picker"
						class="file-input"
						on:change={(_) => handleFiles}
						{disabled}
					/>
				</div>
			</div>
		{:else if isFile}
			<div class="overlay">
				<div class="big-icon-container focus">
					<img src={IconCloud} class="img" alt="icon cloud" />
				</div>
				<button class="clear" on:click={(_) => clearFiles} type="button">
					<div class="icon-container">
						<img src={IconX} class="icon no-select" alt="x" />
					</div>
				</button>
			</div>
		{/if}
		<DragOverlay />
	{/if}
</div>

<style scoped>
	.input-data {
		height: 12em;
		position: relative;
		overflow: hidden;
		display: flex;
	}

	textarea {
		font-family: inherit;
		resize: none;
		width: 100%;
		height: 100%;
		font-size: 1em;
		padding: var(--spacing);
		outline: none;
		border: none;
		background-color: transparent;
		color: var(--element-secondary);
		text-align: inherit;
	}

	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.spacer {
		width: 1px;
		height: 56px;
		margin: 0 var(--spacing);
		background: #ffffff18;
		transition: 0.3s ease;
	}

	.focus .spacer {
		background: #ffffff60;
	}

	.big-icon-container {
		width: 48px;
		height: 48px;
		position: relative;
		display: flex;
	}

	.file-picker-label {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		cursor: pointer;
	}

	.img {
		width: 100%;
		height: 100%;
		opacity: 0.2;
		transition: 0.3s ease;
	}

	.focus .img {
		opacity: 0.6;
	}

	.file-input {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius);
		display: none;
	}

	.clear {
		position: absolute;
		height: 100%;
		right: 0;
	}

	.passthrough {
		pointer-events: none;
	}

	.not-passthrough {
		pointer-events: auto;
	}

	/* extract */
	.icon-container {
		flex: 0 0 auto;
		height: 3em;
		width: 3em;
		border-radius: inherit;
		padding: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		height: 1.4em;
		width: 1.4em;
		object-fit: contain;
		opacity: var(--element-secondary-opacity);
		transition: 0.3s ease;
	}

	.focus .icon {
		opacity: 1;
	}
</style>
