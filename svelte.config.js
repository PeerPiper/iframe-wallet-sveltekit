import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: {
			default: true // creates index.html on build folder
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/iframe-wallet-sveltekit' : ''
		},
		vite: {
			build: {
				rollupOptions: {
					// https://rollupjs.org/guide/en/#big-list-of-options
					output: {
						minifyInternalExports: false,
						compact: false
					},
					plugins: []
				},
				minify: false,
				sourcemap: true,
				optimization: {
					minimize: false
				}
			},
			define: {
				'process.env': process.env
			},
			optimization: {
				minimize: false
			},
			resolve: {
				alias: {}
			},
			commonjsOptions: {},
			server: {
				fs: {
					// Allow serving files from levels up to the project root
					allow: ['../', '../../', '../../../']
				}
			}
			// plugins: [] // vite plugins
		}
	}
};

export default config;
