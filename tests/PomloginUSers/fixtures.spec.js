import { test, expect } from '@playwright/test';
import { LoginPage } from './login';

const UserData = [
  {
    username: "standard_user",
    password: "secret_sauce",
    error: null,
  },
  {
    username: "",
    password: "secret_sauce",
    error: "Epic sadface: Username is required",
  },
  {
    username: "standard_user",
    password: "",
    error: "Epic sadface: Password is required",
  },
];

test.describe("Login Test", () => {
  
  test.beforeEach(async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
  });

  // Data Driven Test
  UserData.forEach((user) => {

    test(`Login users : ${user.username || "empty"} / ${user.password || "empty"}`, async ({ page }) => {

      const loginpage = new LoginPage(page);

      await loginpage.loginuser(user.username, user.password);

      // Negative cases
      if (user.error) {

        const errorMsg = loginpage.loginerror();

        await expect(errorMsg).toBeVisible();
        await expect(errorMsg).toContainText(user.error);

      } 
      
      // Positive case
      else {

        await expect(page).toHaveURL(/inventory/);

      }

    });

  });

});

    // npx playwright test tests/PomloginUSers/fixtures.spec.js --headed --debug