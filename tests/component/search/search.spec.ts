import SearchForm from '$lib/components/searchForm.svelte';
import { test, expect } from '@playwright/experimental-ct-svelte';

test.describe('Search should works', async () => {
	test.use({ viewport: { width: 500, height: 300 } });

	test('search', async ({ mount }) => {
		const component = await mount(SearchForm);

		const search = component.locator('#search');
		await search.focus();
		await search.fill('Alex');
		const matchCount = await component.locator('li').count();

		expect(matchCount).toBe(1);
		await expect(component.locator('ul')).toBeInViewport();
	});
});
