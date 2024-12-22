import { test, expect } from '@playwright/test';
require('dotenv').config();

const email = process.env.EMAIL!;
const password = process.env.PASSWORD!;

test('Login to Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.click('#nav-link-accountList');
  await page.fill('#ap_email', email);
  await page.click('#continue');
  await page.fill('#ap_password', password);
  await page.click('#signInSubmit');
  expect(await page.url()).toContain('your-account');
});
