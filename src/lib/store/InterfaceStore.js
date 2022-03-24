import { reactive } from './utils';
import { writable, derived, get } from 'svelte/store';

import mitt from 'mitt';

import logoArweaveBlack from '$lib/assets/logos/arweaveBlack.svg';
import logoArweave from '$lib/assets/logos/arweave.svg';
import peerpiper from '$lib/assets/logos/p.svg';

// can be used in App with:
// $get(interfaceStore).set('toolbar.enabled', false)
export const interfaceStore = reactive({
	windowWidth: window?.innerWidth,
	windowVisible: !document.hidden,
	toolbar: {
		enabled: true,
		links: true
	},
	breakpoints: {
		verticalLayout: window?.innerWidth < 600,
		verticalContent: window?.innerWidth < 1100
	},
	sticky: false,
	dragOverlay: false,
	wallet: {
		send: {
			target: '',
			quantity: '',
			data: '',
			tags: []
		}
	}
});

// derived store, update if original store (above) changes
export const verticalLayout = derived(
	interfaceStore,
	($interfaceStore) => $interfaceStore.breakpoints.verticalLayout
);

export const verticalContent = derived(
	interfaceStore,
	($interfaceStore) => $interfaceStore.breakpoints.verticalContent
);

export const dragOverlay = derived(
	interfaceStore,
	($interfaceStore) => $interfaceStore.dragOverlay
);

export const emitter = mitt();

emitter.once = (eventName, handler) => {
	return new Promise((resolve) => {
		const wrapper = (e) => {
			emitter.off(eventName, wrapper);
			resolve(e);
			if (handler) {
				handler(e);
			}
		};
		emitter.on(eventName, wrapper);
	});
};

function updateWindowSize() {
	get(interfaceStore).set('windowWidth', window?.innerWidth);
	get(interfaceStore).set('breakpoints.verticalLayout', window?.innerWidth < 600);
	get(interfaceStore).set('breakpoints.verticalContent', window?.innerWidth < 1100);
}
updateWindowSize();

window?.addEventListener('resize', updateWindowSize);

document.addEventListener('visibilitychange', () =>
	get(interfaceStore).set('windowVisible', !document.hidden)
);

let dragCount = 0;
document.addEventListener(
	'dragenter',
	(e) => {
		e.preventDefault();
		if (e.dataTransfer.types[0] == 'Files') {
			get(interfaceStore).set('dragOverlay', !!++dragCount);
		}
	},
	true
);
document.addEventListener(
	'dragleave',
	(e) => {
		e.preventDefault();
		if (e.dataTransfer.types[0] == 'Files') {
			get(interfaceStore).set('dragOverlay', !!--dragCount);
		}
	},
	true
);
document.addEventListener(
	'dragend',
	(e) => {
		e.preventDefault();
		dragCount = 0;
		get(interfaceStore).set('dragOverlay', false);
	},
	true
);
document.addEventListener(
	'dragover',
	(e) => {
		e.preventDefault();
	},
	true
);
document.addEventListener(
	'drop',
	(e) => {
		e.preventDefault();
		dragCount = 0;
		get(interfaceStore).set('dragOverlay', false);
	},
	true
);

if (navigator.appVersion.indexOf('Win') != -1) {
	document.documentElement.classList.add('styleScroll');
}

const faviconEl = document.createElement('link');
faviconEl.setAttribute('rel', 'favicon icon');

const setFavicon = (e) => {
	faviconEl.remove();
	if (e.matches) {
		faviconEl.setAttribute('href', peerpiper);
	} else {
		faviconEl.setAttribute('href', peerpiper);
	}
	document.head.appendChild(faviconEl);
};

if (window?.matchMedia) {
	const matchTheme = window?.matchMedia('(prefers-color-scheme: light)');
	matchTheme.addEventListener('change', setFavicon);
	setFavicon(matchTheme);
} else {
	setFavicon({ matches: false });
}
