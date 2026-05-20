const { test, expect } = require('@playwright/test');

test ('Playwright test', async({ page }) => {

    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);

}); //npx playwright test tests/google.spec.js --headed