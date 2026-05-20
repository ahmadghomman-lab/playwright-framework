import { test, expect } from "./loginfix";

test ('Cart with Login', async ({loginpage}) => {

    await expect(loginpage).toHaveURL(/inventory/);
    
    await loginpage.getByRole('button', {name: "Add to cart"}).first().click();

    await loginpage.locator('.shopping_cart_link').click();

    await expect(loginpage).toHaveURL(/cart/);

});

// npx playwright test tests/fixlogin.spec.js --headed --debug