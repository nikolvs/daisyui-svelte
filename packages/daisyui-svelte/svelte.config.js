import { vitePreprocess } from '@sveltejs/kit/vite';
import delegateEvents from "svelte-preprocess-delegate-events/preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), delegateEvents()],

	kit: {
		files: {
			lib: 'src'
		}
	}
};

export default config;
