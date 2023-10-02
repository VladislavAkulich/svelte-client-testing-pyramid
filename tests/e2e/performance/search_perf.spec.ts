import { test, type Page } from '@playwright/test';

test('Filter perf metrics measuarment', async ({ browser, page }) => {
	const searchUserName = 'Ervin Howell';
	await page.goto('/users');

	console.log('========== Start Tracing Perf ===========');
	await browser.startTracing(page, { path: './perfTraces.json', screenshots: true });
	await page.evaluate(() => window.performance.mark('Perf:Started'));
	await page.locator('#search').fill(searchUserName);
	await page.evaluate(() => window.performance.mark('Perf:Ended'));
	await page.evaluate(() => window.performance.measure('overall', 'Perf:Started', 'Perf:Ended'));

	await printPerfMetrics(page);
	console.log('======= Stop Tracing ============');
	await browser.stopTracing();
});

async function printPerfMetrics(page: Page) {
	const getAllMeasuresJson = await page.evaluate(() =>
		JSON.stringify(window.performance.getEntriesByType('mark'))
	);
	const getAllMeasures = await JSON.parse(getAllMeasuresJson);
	console.log('window.performance.getEntriesByType("measure")', getAllMeasures);
}
