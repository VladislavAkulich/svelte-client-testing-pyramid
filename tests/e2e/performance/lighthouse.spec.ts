import { test } from '@playwright/test'
import { playAudit, type playwrightLighthouseConfig } from 'playwright-lighthouse'
import * as playwright from 'playwright'

const auditConfig: playwrightLighthouseConfig = {
    port: 9222,
    thresholds: {
        performance: 90,
        accessibility: 90,
        'best-practices': 90,
    },
    reports: {
        formats: {
            html: true,
        }
    }
} 


test('Use Lighthouse', async ( {} ) => {
    const searchUserName = 'Ervin Howell';

    const browser = await playwright['chromium'].launch({
        args: ['--remote-debugging-port=9222'],
      });
      const page = await browser.newPage();

    await page.goto('/users')
    await page.fill('#search', searchUserName)

    auditConfig.page = page
    await playAudit(auditConfig);
})