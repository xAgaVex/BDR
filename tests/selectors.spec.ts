import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');
  await page.getByRole('link', { name: 'Shop men' }).click();
  await expect(page.getByRole('main')).toContainText('Nike air zoom pegasus 35');
});