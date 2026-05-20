import {test as base, expect } from '@playwright/test';

export const test = base.extend( {

    TestLogin: async ({ page }, use ) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');

        await page.getByRole('button', {'name': 'Login'}).click();

        await use(page);
    }
        
    
    
});
export {expect};