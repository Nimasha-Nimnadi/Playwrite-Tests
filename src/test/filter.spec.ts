import { test, expect } from '@playwright/test';

test('Apply filters and verify results', async ({ page }) => {
  await page.goto('https://www.amazon.com/s?k=headphones');
  await page.waitForSelector('input[name="s-ref-checkbox-Sony"]');
  await page.click('input[name="s-ref-checkbox-Sony"]');
  const results = page.locator('.s-main-slot .s-result-item');
  await expect(await results.count()).toBeGreaterThan(0);
});
