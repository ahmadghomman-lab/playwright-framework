const { test, expect } = require('@playwright/test');

const testData = [
  { username: '', password: 'secret_sauce', error: 'Username is required' },
  { username: 'standard_user', password: '', error: 'Password is required' },
  { username: '', password: '', error: 'Username is required' },
  { username: 'wrong_user', password: 'wrong_pass', error: 'Username and password do not match' }
];

test.describe('Data Driven Invalid Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  testData.forEach((data) => {

    test(`Login test: ${data.username || 'empty'} / ${data.password || 'empty'}`, async ({ page }) => {

      if (data.username)
        await page.getByPlaceholder('Username').fill(data.username);

      if (data.password)
        await page.getByPlaceholder('Password').fill(data.password);

      await page.locator('#login-button').click();

      const errorMsg = page.locator('[data-test="error"]');

      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText(data.error);

    });

  });

});