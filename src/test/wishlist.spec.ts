import { test, expect } from '@playwright/test';

test('Add a product to wishlist', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.fill('#twotabsearchtextbox', 'headphones');
  await page.click('#nav-search-submit-button');
  await page.waitForSelector('.s-main-slot .s-result-item:nth-of-type(1) a');
  await page.click('.s-main-slot .s-result-item:nth-of-type(1) a');
  await page.waitForSelector('#add-to-wishlist-button-submit');
  await page.click('#add-to-wishlist-button-submit');
  await page.waitForSelector('#huc-v2-order-row-confirm-text');
  expect(await page.locator('#huc-v2-order-row-confirm-text')).toBeVisible();
});
