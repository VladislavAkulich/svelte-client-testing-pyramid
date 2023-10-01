import Toggle from '$lib/components/toggle.svelte';
import { test, expect } from '@playwright/experimental-ct-svelte';

test.describe('toggle tests', async () => {
	test('switch to dark mode', async ({ page, mount }) => {
		const component = await mount(Toggle);

		await component.locator('input').click();
		await expect(component).toHaveScreenshot();
		expect(await page.locator('body').getAttribute('class')).toContain('dark-mode');
	});
});
