import { test, expect } from '@playwright/test';

test('Search item', async ({ page }) => {
	const searchUserName = 'Ervin Howell';
	await page.goto('/');
	await page.getByText('Users').click();

	await page.locator('#search').fill(searchUserName);
	const actualItem = page.locator('li');

	await expect(page).toHaveURL('http://localhost:5173/users');
	expect(await actualItem.count()).toBe(1);

	const textItem = await actualItem.textContent();
	expect(textItem?.trim()).toBe(searchUserName);
});
