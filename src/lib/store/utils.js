import { writable, derived, get } from 'svelte/store';

/**
Usage:

	const store = reactive({
		a: 1,
		b: 2,
		c: 3,
		d: {
            e: {
                f: 4
            } 
        }
	});

    $store.set('d.e.f', 4)}

 */
export function reactive(initial) {
	const store = writable(initial);
	const set = (key, value) => store.update((m) => Object.assign({}, m, { [key]: value }));

	const callback = (s) => {
		return {
			keys: Object.keys(s),
			values: Object.values(s),
			entries: Object.entries(s),
			set(k, v) {
				if (k.split('.').length > 1) {
					let spl = k.split('.');
					k = spl.shift();
					const reducer = (prev, curr) => ({ [curr]: prev });
					v = spl.reverse().reduce(reducer, v);
					v = { ...s[k], ...v };
				}
				store.update((s) => Object.assign({}, s, { [k]: v }));
			},
			...s,
			remove(k) {
				store.update((s) => {
					delete s[k];
					return s;
				});
			}
		};
	};

	const results = derived(store, callback);

	return {
		subscribe: results.subscribe,
		set: store.set
	};
}
