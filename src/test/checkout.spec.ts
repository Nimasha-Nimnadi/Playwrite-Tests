import { test, expect } from '@playwright/test';

test('Verify checkout flow', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.fill('#twotabsearchtextbox', 'headphones');
  await page.click('#nav-search-submit-button');
  await page.waitForSelector('.s-main-slot .s-result-item:nth-of-type(1) a');
  await page.click('.s-main-slot .s-result-item:nth-of-type(1) a');
  await page.waitForSelector('#add-to-cart-button');
  await page.click('#add-to-cart-button');
  await page.waitForSelector('#nav-cart');
  await page.click('#nav-cart');
  await page.waitForSelector('input[name="proceedToRetailCheckout"]');
  await page.click('input[name="proceedToRetailCheckout"]');
  expect(await page.url()).toContain('signin');
});
