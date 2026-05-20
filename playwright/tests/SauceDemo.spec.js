const { test, expect } = require('@playwright/test');

test ('SauceDemo' , async ( {page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');

    await page.getByText('Login').click();
    await expect(page).toHaveURL(/inventory/);

    await page.locator('.inventory_item').first().locator('#add-to-cart-sauce-labs-backpack').click();

    
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/cart/);

    await page.getByText('Checkout').click();

    await expect(page).toHaveURL(/checkout-step-one/);
});
//npx playwright test tests/Saucedemo.spec.js --headed --debug