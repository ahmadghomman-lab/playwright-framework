const { test, expect } = require('@playwright/test');

test('login test', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.locator('textarea[name="q"]').fill('icc');

    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/search/);

});