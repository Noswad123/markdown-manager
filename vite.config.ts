import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default defineConfig({
	plugins: [
        nodePolyfills({
      include: ['process', 'buffer'] // You can include other polyfills if needed
    }),
    sveltekit()],
  server: {
    fs: {
      strict: false
    }
  },
  resolve: {
    alias: {
      process: 'process/browser',
    }
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()]
    }
  }
});
