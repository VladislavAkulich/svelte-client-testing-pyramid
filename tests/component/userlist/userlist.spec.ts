import List from '$lib/list.svelte';
import { test, expect } from '@playwright/experimental-ct-svelte';

test.describe('user list tests', async () => {
	test.use({ viewport: { width: 500, height: 500 } });

	test('Attach users list', async ({ mount }) => {
		const component = await mount(List);

		const names: Array<string> = (await component.locator('li').allTextContents()).map((name) =>
			name.trim()
		);
		const optionsCount: number = await component.locator('li').count();

		expect(optionsCount).toBe(3);
		expect(names).toStrictEqual(['Alex', 'Petr', 'Dima']);

		await expect(component).toHaveScreenshot();
	});
});
