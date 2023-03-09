import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  page.goto('http://localhost:3000');
});

test.describe('Test Hero Header Navigation Links', () => {
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

  test('Join Community link should open google form in new tab', async ({
    page,
    context,
  }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.waitForLoadState(),
      page.getByRole('link', { name: 'Join Community' }).click(),
    ]);
    await expect(newPage).toHaveURL(
      new RegExp(
        '^https://docs.google.com/forms/d/e/1FAIpQLSc_k5sffFTeL9oDug41nXU4Spw5cV84ExaL3jNFu_I1FTZO1w/viewform'
      )
    );
  });

  test('Join ReactDevsKe link should open google form in new tab', async ({
    page,
    context,
  }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.waitForLoadState(),
      page.getByRole('link', { name: 'Join ReactDevsKe' }).click(),
    ]);
    await expect(newPage).toHaveURL(
      new RegExp(
        '^https://docs.google.com/forms/d/e/1FAIpQLSc_k5sffFTeL9oDug41nXU4Spw5cV84ExaL3jNFu_I1FTZO1w/viewform'
      )
    );
  });
});
