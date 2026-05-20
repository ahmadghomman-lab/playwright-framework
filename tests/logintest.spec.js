import { test, expect } from './tesetlogin';

test ('The login Test', async( {TestLogin}) => {

    expect(TestLogin).toHaveURL(/inventory/);
    await TestLogin.getByRole('button', {name: 'Add to cart'}).first().click();
    await TestLogin.click('.shopping_cart_link');

    expect(TestLogin).toHaveURL(/cart/);
});

// npx playwright test tests/logintest.spec.js --headed --debug