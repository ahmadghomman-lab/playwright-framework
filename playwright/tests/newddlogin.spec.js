import { asyncWrapProviders } from 'node:async_hooks';
import {test, expect } from './newlogin';

const Users = [

    {
        username : 'standard_user',
        password : 'secret_sauce',
        url      : '/inventory/',
        error    : null
    },
    {
        username : 'locked_out_user',
        password : 'secret_sauce',
        url      :  null,
        error    : "Epic sadface: Sorry, this user has been locked out."
    },
    {
        username : 'standard_user',
        password : '',
        url      :  null,
        error    : "Epic sadface: Password is required"
    }

                ];

    Users.forEach(user => {

        test(`Login For Users: ${user.username || 'empty'} / ${user.password || 'empty'}`, 
            async({ NewLogin, page }) => {

                // from fixture login file
                await NewLogin(user.username, user.password);

                // verify url

                if(user.url) {
                     await expect (page).toHaveURL(/inventory/);
                }

                // verify error
                if(user.error) {
                    expect(page.locator('[data-test="error"]')).toBeVisible();
                    expect (page.locator('[data-test="error"]')).toHaveText(user.error);

                }
            }
        ) 
    });

    // npx playwright test tests/newddlogin.spec.js --headed --debug
