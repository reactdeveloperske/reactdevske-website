import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  page.goto('http://localhost:3000/#footer');
});

test.describe('Test Footer Navigation Links', () => {
  test('About us link should navigate to about us section', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'About us' }).click();
    await expect(page).toHaveURL('/#about-us');
  });

  test('Events link should navigate to Events section', async ({ page }) => {
    await page.getByRole('link', { name: 'Events' }).click();
    await expect(page).toHaveURL('/#events');
  });

  test('Contact link should navigate to Contact Us section', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/#contact-us');
  });
});
