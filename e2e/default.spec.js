// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

test.describe('Basic test', () => {
    test('should show the title', async ({ page }) => {
        const title = page.locator('title');
        await expect(title).toHaveText('Reactjs Developer Community in Kenya');
      });
});