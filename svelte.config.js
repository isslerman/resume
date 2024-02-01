// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// kit: {
	// 	adapter: adapter()
	// },

	kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
		paths: {
      base: dev ? '' : '/marcosissler',
    }
  },
	
	vitePlugin: {
		inspector: true
	}
};

export default config;
