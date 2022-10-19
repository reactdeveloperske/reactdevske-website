import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Basic test', () => {
  test('should show the title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'React Developer Community Kenya' })
    ).toBeVisible();
  });
});
