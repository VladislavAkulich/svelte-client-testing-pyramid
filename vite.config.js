import { defineConfig } from "vite";
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
export default defineConfig ({
	plugins: [sveltekit()],
	test: {
		globals: true,
		include: ['./tests/unit/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		setupFiles: ['./tests/unit/setupTest.ts']
	}
});