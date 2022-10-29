import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Home page tests', () => {
  test('should show the title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'React Developer Community Kenya' })
    ).toBeVisible();
  });

  test("should show 'Join Community' button", async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Join Community' })
    ).toBeVisible();
  });

  test('should show About Us section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
  });

  test('should show Mission Pillars section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Our Mission Pillars' })
    ).toBeVisible();
  });

  test('should show Events section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Events' })).toBeVisible();
  });

  test('should show Contact Us section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Contact Us' })
    ).toBeVisible();
  });
});
