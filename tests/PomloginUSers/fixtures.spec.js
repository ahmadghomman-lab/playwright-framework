import { beforeEach } from "node:test";
import { LoginPage } from "./login";
import { test, expect, errors } from "@playwright/test";

const UserData = [
    {
        username: 'standerd-user',
        password: 'secret_sauce',
        error : null
    },
    {
        username: '',
        password: 'secret_sauce',
        error : 'Epic sadface: Username is required'
    },
    {
        username: 'standerd-user',
        password: '',
        error : 'Epic sadface: Password is required'
    }

    
];
    test.describe('Login Test', () => {
    
        
        
        test.beforeEach( async ( {page}) => {
            const loginpage = new LoginPage(page);
            await loginpage.goto();
        });

        // date driven test
        UserData.forEach((user) => {

        test(`Loginusers : ${user.username || 'empty'} / ${user.password || 'empty'}`, async ({page}) => {
             const loginpage = new LoginPage(page);
            await loginpage.loginuser(user.username, user.password);

            if (user.error){cd $HOME\Desktop


            const errorMsg = await loginpage.loginerror();    
            
            expect(errorMsg).toBeVisible();
            expect(errorMsg).toContainText(user.error);
            }
        });


        });
    });


    // npx playwright test tests/PomloginUSers/fixtures.spec.js --headed --debug