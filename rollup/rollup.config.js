import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';

export default {
	input: 'index.js',
	output: {
		format: 'iife',
		name: 'app',
		file: 'build/bundle.js'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess()
		}),
		css({ output: 'bundle.css' }),
		resolve(),
	]
};
