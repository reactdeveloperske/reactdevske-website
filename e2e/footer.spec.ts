import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  page.goto('http://localhost:3000');
});

test.describe('Test Footer Navigation Links', () => {
  test('About us link should navigate to About Us section', async ({
    page,
  }) => {
    const footerLocator = page.locator('footer');
    await footerLocator.getByRole('link', { name: 'About us' }).click();
    await expect(page).toHaveURL('/#about-us');
  });

  test('Events link should navigate to Events section', async ({ page }) => {
    const footerLocator = page.locator('footer');
    await footerLocator.getByRole('link', { name: 'Events' }).click();
    await expect(page).toHaveURL('/#events');
  });

  test('Contact link should navigate to Contact Us section', async ({
    page,
  }) => {
    const footerLocator = page.locator('footer');
    await footerLocator.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/#contact-us');
  });
});
