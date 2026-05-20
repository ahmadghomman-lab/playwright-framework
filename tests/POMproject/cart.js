import { expect } from "@playwright/test";

export class CartPage {

    constructor (page){
        this.page = page;
        this.addtoCart =  page.getByRole('button', {name: 'Add to cart'});
        this.shopingCart =  page.locator('.shopping_cart_link');
            
    }

        async addToCart() {

           await this.addtoCart.first().click();
            await this.shopingCart.click();
            await expect(this.page).toHaveURL(/cart/);

        }

    }
