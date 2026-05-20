const { test, expect } = require ('@playwright/test');

test.describe('For login Group', () => {

    test.beforeEach( async ({page}) => {
        await page.goto('https://www.saucedemo.com/');

    });
    
    test('Empty UserName', async({page}) => {

        //await page.getByPlaceholder('Username').fill('');

        await page.getByPlaceholder('Password').fill('secret_sauce');

        await page.locator('#login-button').click();
        await expect (page.locator('.error-message-container')).toBeVisible();
        await expect (page.locator('.error-message-container')).toContainText('Epic sadface: Username is required');
        
     });

     test('Empty Password', async({page}) => {

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByText('Login').click();

        await expect(page.locator('.error-message-container')).toBeVisible();
        await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Password is required');

     })

    
});

//npx playwright test tests/neglogin.spec.js --headed --debug
