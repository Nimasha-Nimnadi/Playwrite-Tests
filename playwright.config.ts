import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Path to test files
  testDir: './src/test',

  // Global timeout for each test in milliseconds
  timeout: 60000,

  // Retry failed tests
  retries: 1,

  // Reporter to use (e.g., 'list', 'html', 'json')
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],

  // Configure projects to run tests in multiple browsers
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],

  // Shared settings for all the projects
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    baseURL: 'https://www.amazon.com',
    trace: 'on-first-retry',
  },
});
