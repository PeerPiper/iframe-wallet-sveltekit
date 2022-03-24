<script>
	// Component made from https://github.com/stewartlord/identicon.js/
	// from a SHA-256 hash of the arweave address

	import { onMount } from 'svelte';

	let Utils;

	onMount(async () => {
		({ Utils } = await import('@peerpiper/iframe-wallet-engine'));
	});

	export let address;
	export let alt = 'Wallet Icon';

	let size, stroke, rects, style;

	async function setup(address) {
		const size = 5;
		const cell = size / 5;
		const stroke = size * 0.04;
		const addressHash = await Utils.addressToHash(address);

		const style = `color: rgb(${Utils.addressHashToColor(addressHash).join(',')})`;
		const rects = () => {
			const result = [];
			if (!addressHash) {
				return result;
			}
			for (let i = 0; i < 15; i++) {
				if (parseInt(addressHash.charAt(i), 16) % 2) {
					continue;
				}
				if (i < 5) {
					result.push({ x: 2 * cell + stroke, y: i * cell + stroke, w: cell, h: cell });
				} else if (i < 10) {
					result.push({ x: 1 * cell + stroke, y: (i - 5) * cell + stroke, w: cell, h: cell });
					result.push({ x: 3 * cell + stroke, y: (i - 5) * cell + stroke, w: cell, h: cell });
				} else if (i < 15) {
					result.push({ x: 0 * cell + stroke, y: (i - 10) * cell + stroke, w: cell, h: cell });
					result.push({ x: 4 * cell + stroke, y: (i - 10) * cell + stroke, w: cell, h: cell });
				}
			}
			return result;
		};
		return { size, stroke, rects, style };
	}

	(async () => {
		const promise = await setup(address)(({ size, stroke, rects, style } = promise));
	})();
</script>

<div>
	{#if size && stroke && style && rects}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${size + stroke * 2} ${size + stroke * 2}`}
			{style}
			><title>{alt}</title>
			<g
				style="fill:currentColor; stroke:currentColor; strokeWidth: {stroke}"
				stroke-linejoin="round"
			>
				{#each rects as rect}
					<rect x={rect.x} y={rect.y} width={rect.w} height={rect.h} />
				{/each}
			</g>
		</svg>
	{/if}
</div>
