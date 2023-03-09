import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Test if see more link is clickable', () => {
  test('should navigate to the correct URL when See More is clicked', async ({
    page,
    context,
    browserName,
  }) => {
    test.slow(browserName === 'webkit', 'This test times out on webkit');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.waitForLoadState(),
      page.getByRole('link', { name: 'See More' }).click(),
    ]);
    await expect(newPage).toHaveURL(
      'https://kommunity.com/reactjs-developer-community-kenya-reactdevske/events'
    );
  });
});
