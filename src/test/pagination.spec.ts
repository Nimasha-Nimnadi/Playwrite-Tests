import { test, expect } from '@playwright/test';

test('Verify pagination functionality', async ({ page }) => {
  await page.goto('https://www.amazon.com/s?k=headphones');
  await page.click('.s-pagination-next');
  expect(await page.url()).toContain('page=2');
});
