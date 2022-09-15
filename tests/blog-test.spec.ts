import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to http://localhost:1668/articles
  await page.goto('http://localhost:1668/articles');

  // Click text=2022-09-14-postsblog description
  await page.locator('text=2022-09-14-postsblog description').click();
  await expect(page).toHaveURL('http://localhost:1668/posts/2022-09-14-posts');

  // Click text=Articles
  await page.locator('text=Articles').click();
  await expect(page).toHaveURL('http://localhost:1668/articles');

  // Click text=Angular and ScullyHow to build a blog with Angular and Scully
  await page
    .locator(
      'text=Angular and ScullyHow to build a blog with Angular and Scully'
    )
    .click();
  await expect(page).toHaveURL(
    'http://localhost:1668/posts/angular-and-scully'
  );

  // Click text=Contact
  await page.locator('text=Contact').click();
  await expect(page).toHaveURL('http://localhost:1668/contact');
});
