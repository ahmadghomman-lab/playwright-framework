// pom-login.spec.js
// Is file ko exactly is code se replace kar dein.

import { LoginPage } from './loginpage';
import { test, expect } from '@playwright/test';

test('Pom Login', async ({ page }) => {
  // Create object of LoginPage class
  const loginPage = new LoginPage(page);

  // Open SauceDemo
  await loginPage.goto();

  // Perform login
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);
});