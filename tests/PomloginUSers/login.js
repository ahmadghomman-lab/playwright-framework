
export class LoginPage {

    constructor (page) {

        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginbutton = page.getByRole('button', {name: 'Login'});
        this.error = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async loginuser (username, password) {

        if(username){
        await this.username.fill(username);
        }

        if (password) {
        await this.password.fill(password);
        }

        await this.loginbutton.click();
    }

    async loginerror() {
         return this.error;
    }
    
    

} 