import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  page.goto('http://localhost:3000');
});

test.describe('Test Hero Header Navigation Links', () => {
  test('About us link should navigate to about us page', async ({ page }) => {
    await page.getByRole('link', { name: 'About Us' }).click();
    await expect(page).toHaveURL('/about');
  });

  test('Events link should navigate to Events page', async ({ page }) => {
    await page.getByRole('link', { name: 'Workshops & Events' }).click();
    await expect(page).toHaveURL('/events');
  });

  test('Community link should navigate to Community page', async ({ page }) => {
    await page.getByRole('link', { name: 'Community', exact: true }).click();
    await expect(page).toHaveURL('/community');
  });

  test('Join Community link should open google form in new tab', async ({
    page,
    context,
  }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.waitForLoadState(),
      page.getByRole('link', { name: 'Join the Community' }).click(),
    ]);
    await newPage.waitForLoadState('load');
    // Accept bit.ly shortlink, docs.google.com, or forms.gle redirect destinations
    expect(newPage.url()).toMatch(
      /^(https:\/\/)?(bit\.ly|docs\.google\.com|forms\.gle)/
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
    await newPage.waitForLoadState('load');
    // Accept bit.ly shortlink, docs.google.com, or forms.gle redirect destinations
    expect(newPage.url()).toMatch(
      /^(https:\/\/)?(bit\.ly|docs\.google\.com|forms\.gle)/
    );
  });
});
