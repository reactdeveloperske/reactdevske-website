import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});


test.describe('Test if see more link is clickable', () => {
  test('should show react dev community page', async ({ page }) => {
    test.slow();
    const linkName = await page.locator('div.see-more-div')
    await linkName.click();    
    const title = await page.locator('div.name').nth(1)
    await expect(title).toBeTruthy();
  });
});


test.describe('Test if see more link exists', () => {
  test('should show See More', async ({ page }) => {
    await page.waitForNavigation();
    const linkName = page.locator('div.see-more-div');
    await expect(linkName).toBeTruthy();

  });
});

