import { test as base, expect } from '@playwright/test';
//import { asyncWrapProviders } from 'node:async_hooks';
//import { use } from 'react';
 
export const test = base.extend( {

    NewLogin: async ({ page }, use ) => {

        await use (async(username, password) => {

            await page.goto('https://www.saucedemo.com/');
            await page.fill('#user-name', username);
            await page.fill('#password', password);

            await page.click('#login-button');

            //await use(page);
            return page;
             
        });
        
    }
});

export  {expect};