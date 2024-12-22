import { test, expect } from '@playwright/test';

test('Search for a product and verify results', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.fill('#twotabsearchtextbox', 'laptop');
  await page.click('#nav-search-submit-button');
  await page.waitForSelector('.s-main-slot .s-result-item');
  const results = page.locator('.s-main-slot .s-result-item');
  await expect(await results.count()).toBeGreaterThan(0);
});
