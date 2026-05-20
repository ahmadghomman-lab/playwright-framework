// loginpage.js
// Is file ko exactly is code se replace kar dein.

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Open website
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Login method
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}