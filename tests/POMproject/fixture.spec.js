import { test, expect } from "@playwright/test";
import { LoginPage } from "./login";
import { CartPage } from "./cart";



test('login check test', async ({page}) => {

    const loginPage = new LoginPage(page);

    // cart page object
    const cartPage = new CartPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
     
    // checking cart page

    await cartPage.addToCart();
});

    

// npx playwright test tests/POMproject/fixture.spec.js --headed --debug