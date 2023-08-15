import { test, expect } from '@playwright/test';

test('Toggle Visibility Test', async ({ page }) => {
  // Navigate to your React app
  await page.goto('http://localhost:3000/'); // Replace with your actual development server URL

  // Verify initial visibility
  const initialVisibilityText = await page.textContent('h1');
  expect(initialVisibilityText).toBe('Hello, World!');

  // Click the "Toggle Visibility" button
  await page.click('button');

  // Verify changed visibility
  const updatedVisibilityText = await page.textContent('h1');
  expect(updatedVisibilityText).toBe('');

  // Click the "Toggle Visibility" button again
  await page.click('button');

  // Verify visibility reset
  const resetVisibilityText = await page.textContent('h1');
  expect(resetVisibilityText).toBe('Hello, World!');
});
