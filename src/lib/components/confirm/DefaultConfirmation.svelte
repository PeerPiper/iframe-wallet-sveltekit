<script>
	// @ts-nocheck
	export let props;
	export let handleConfirmed;
	export let handleDenied;
</script>

<slot>
	<div>
		<div class="attention">
			<div>
				⚠️ Authorize {props.method} from your wallet?
			</div>
			<div class="submit">
				<Button type={'Yes'} clickHandler={handleConfirmed}>Yes</Button>
				<Button type={'No'} clickHandler={handleDenied}>No</Button>
			</div>
		</div>
	</div>
</slot>

<style>
	div.attention {
		display: flex;
		flex-direction: column;
		background-color: #fff9c4;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
	}
	div {
		padding: 0.5em;
		margin: 0.5em;
		width: fit-content;
	}

	.submit > button:not(:disabled) {
		background-color: #4caf50; /* Green */
	}

	.submit > button:disabled {
		background-color: rgb(126, 126, 126) !important; /* Grey */
	}

	.submit > button {
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin-left: auto;
		border-radius: 2px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
	}

	button {
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		width: fit-content;
		margin-left: auto;
		margin-top: 0.5em;
		margin-bottom: 1em;
		border-radius: 2px;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
	}

	button.yellow {
		background-color: rgba(230, 226, 10, 0.82) !important;
	}

	button.green {
		background-color: #4caf50;
	}
</style>
