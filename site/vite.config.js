import { sveltekit } from '@sveltejs/kit/vite';
import inspect from 'vite-plugin-inspect';

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		process: {}
	},
	optimizeDeps: {
		include: ['tail-material-design']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.json']
	},
	css: {
		preprocessorMaxWorkers: true
	},
	plugins: [sveltekit(), inspect()],
	server: {
		warmup: {
			clientFiles: ['./src/app.css'],
			ssrFiles: ['./src/lib/index.ts', './src/routes/+layout.svelte']
		},
		fs: {
			allow: ['..']
		}
	}
};

export default config;
