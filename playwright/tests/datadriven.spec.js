const {test, expect} = require("@playwright/test");

const Logindata = [
    {
    username : "",
    password : 'secret_sauce',
    error : 'Epic sadface: Username is required'
    },

    {
    username : "standard_user",
    password : "",
    error    : "Epic sadface: Password is required"
    },
    {
    username : "",
    password : "",
    error    : "Epic sadface: Username is required"    
    },
    {
    username : "wrong username",
    password : "wrong password",
    error    : "Epic sadface: Username and password do not match any user in this service"
    }
];

    test.describe('Login Tests', () => {

        test.beforeEach( async ({ page }) => {

            await page.goto('https://www.saucedemo.com/');

        });

        Logindata.forEach((data) => {
            
            test(`Login test: ${data.username || 'empty'} / ${data.password} || 'empty'}`, async ({ page }) => {

                if(data.username)
                    
                    await page.getByPlaceholder('Username').fill(data.username);

                if(data.password)
                    await page.getByPlaceholder('Password').fill(data.password);    
                
                await page.locator('#login-button').click();

                const errorMSG = page.locator('[data-test="error"]');
                await expect(errorMSG).toBeVisible();
                await expect(errorMSG).toContainText(data.error);
            });

        });


    });


//npx playwright test tests/datadriven.spec.js --headed --debug












//