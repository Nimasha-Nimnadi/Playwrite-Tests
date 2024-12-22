import { test, expect } from '@playwright/test';

test('Add a product to cart', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.fill('#twotabsearchtextbox', 'laptop');
  await page.click('#nav-search-submit-button');
  await page.waitForSelector('.s-main-slot .s-result-item:nth-of-type(1) a');
  await page.click('.s-main-slot .s-result-item:nth-of-type(1) a');
  await page.waitForSelector('#add-to-cart-button');
  await page.click('#add-to-cart-button');
  const cartCount = page.locator('#nav-cart-count');
  await expect(cartCount).toHaveText('1');
});
