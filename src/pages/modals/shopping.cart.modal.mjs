"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class ShoppingCartModal extends BasePage{

    constructor(page) {
        super(page);

        //shopping cart modal web elements
        this._shoppingCartModalIcon = page.locator("//span[@class='anticon anticon-shopping-cart text-xl mr-2']");
        this._shoppingCartModalTitle = page.locator("//h2[@class='text-xl font-semibold']");
        this._shoppingCartModalProductCounter = page.locator("//span[@class='ml-2 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-sm']");
        this._shoppingCartModalCloseModalButton = page.locator("//button[@data-testid='close-cart']");
        //list elements
        this._shoppingCartModalProductImgElements = page.locator("//img[@data-testid='cart-item-image']");
        this._shoppingCartModalProductNameElements = page.locator("//h3[@data-testid='cart-item-header']");
        this._shoppingCartModalProductQtyDecreaseBtnElements = page.locator("//button[@data-testid='decrease-quantity']");
        this._shoppingCartModalProductQtyCounterElements = page.locator("//span[@data-testid='item-quantity']");
        this._shoppingCartModalProductQtyIncreaseBtnElements = page.locator("//button[@data-testid='increase-quantity']");
        this._shoppingCartModalProductRemoveBtnElements = page.locator("//button[@data-testid='remove-item']");
        this._shoppingCartModalProductUnitPriceElements = page.locator("//p[@data-testid='item-price']");
        //summary section
        this._shoppingCartModalSubtotalPriceSubtext = page.locator("//span[@data-testid='subtotal-label']");
        this._shoppingCartModalSubtotalPrice = page.locator("//span[@data-testid='subtotal-value']");
        this._shoppingCartModalShippingPriceSubtext = page.locator("//span[@data-testid='shipping-label']");
        this._shoppingCartModalShippingPrice = page.locator("//span[@data-testid='shipping-value']");
        this._shoppingCartModalTotalPriceSubtext = page.locator("//span[@data-testid='total-label']");
        this._shoppingCartModalTotalPrice = page.locator("//span[@data-testid='total-value']");
        //buttons
        this._shoppingCartModalCheckoutButton = page.locator("//button[@data-testid='checkout-button']");
        this._shoppingCartModalViewCartButton = page.locator("//button[@data-testid='view-cart-button']");
        //empty shopping cart modal elements
        this._shoppingCartModalEmptyCartIcon = page.locator("//span[@class='anticon anticon-shopping-cart']");
        this._shoppingCartModalEmptyCartTitle = page.locator("//h3[@class='text-xl font-semibold mb-2']");
        this._shoppingCartModalEmptyCartSubtext = page.locator("//p[@class='text-gray-500 mb-6']");
        this._shoppingCartModalEmptyCartButton = page.locator("//button[@data-testid='continue-shopping-btn']");

    }

    //click set product increase quantity button (to click a set button multiple times)
    async clickSetQtyIncreaseButton(index, count = 1) {
        const setQtyIncreaseBtn = this._shoppingCartModalProductQtyIncreaseBtnElements.nth(index);
        for (let i = 0; i < count; i++) {
            await setQtyIncreaseBtn.click();
        }
    }

    //click set product remove from cart button method
    async clickSetProductRemoveFromCartButton(index){await this._shoppingCartModalProductRemoveBtnElements.nth(index).click();}

    //click "View Cart" button method
    async clickViewCartButton(){await this._shoppingCartModalViewCartButton.click();}

    //shopping cart modal product data getters
    async getShoppingCartModalProductName(){
        const elements = await this._shoppingCartModalProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShoppingCartModalProductQty(){
        const elements = await this._shoppingCartModalProductQtyCounterElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShoppingCartModalProductUnitPrice(){
        const elements = await this._shoppingCartModalProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //summary section
    async getShoppingCartModalSubtotalPrice(){return await this._shoppingCartModalSubtotalPrice.innerText();}
    async getShoppingCartModalShippingPrice(){return await this._shoppingCartModalShippingPrice.innerText();}
    async getShoppingCartModalTotalPrice(){return await this._shoppingCartModalTotalPrice.innerText();}

    //shopping cart modal text element getters
    async getShoppingCartModalTitle(){return await this._shoppingCartModalTitle.innerText();}
    async getShoppingCartModalProductCount(){return await this._shoppingCartModalProductCounter.innerText();}
    //summary section
    async getShoppingCartModalSubtotalPriceSubtext(){return await this._shoppingCartModalSubtotalPriceSubtext.innerText();}
    async getShoppingCartModalShippingPriceSubtext(){return await this._shoppingCartModalShippingPriceSubtext.innerText();}
    async getShoppingCartModalTotalPriceSubtext(){return await this._shoppingCartModalTotalPriceSubtext.innerText();}
    //buttons
    async getShoppingCartModalCheckoutBtnText(){
        const text = await this._shoppingCartModalCheckoutButton.innerText();
        return text.trim();
    }
    async getShoppingCartModalViewCartBtnText(){return await this._shoppingCartModalViewCartButton.innerText();}
    //empty shopping cart elements
    async getShoppingCartModalEmptyCartTitle(){return await this._shoppingCartModalEmptyCartTitle.innerText();}
    async getShoppingCartModalEmptyCartSubtext(){return await this._shoppingCartModalEmptyCartSubtext.innerText();}
    async getShoppingCartModalEmptyCartButton(){return await this._shoppingCartModalEmptyCartButton.innerText();}

    //shopping cart modal web element getters
    get shoppingCartModalIcon(){return this._shoppingCartModalIcon;}
    get shoppingCartModalTitle(){return this._shoppingCartModalTitle;}
    get shoppingCartModalProductCounter(){return this._shoppingCartModalProductCounter;}
    get shoppingCartModalCloseModalButton(){return this._shoppingCartModalCloseModalButton;}
    //list elements
    get shoppingCartModalProductImgElement(){return this._shoppingCartModalProductImgElements;}
    get shoppingCartModalProductNameElement(){return this._shoppingCartModalProductNameElements;}
    get shoppingCartModalProductQtyDecreaseBtnElement(){return this._shoppingCartModalProductQtyDecreaseBtnElements;}
    get shoppingCartModalProductQtyCounterElement(){return this._shoppingCartModalProductQtyCounterElements;}
    get shoppingCartModalProductQtyIncreaseBtnElement(){return this._shoppingCartModalProductQtyIncreaseBtnElements;}
    get shoppingCartModalProductRemoveBtnElement(){return this._shoppingCartModalProductRemoveBtnElements;}
    get shoppingCartModalProductUnitPriceElement(){return this._shoppingCartModalProductUnitPriceElements;}
    //summary section
    get shoppingCartModalSubtotalPriceSubtext(){return this._shoppingCartModalSubtotalPriceSubtext;}
    get shoppingCartModalSubtotalPrice(){return this._shoppingCartModalSubtotalPrice;}
    get shoppingCartModalShippingPriceSubtext(){return this._shoppingCartModalShippingPriceSubtext;}
    get shoppingCartModalShippingPrice(){return this._shoppingCartModalShippingPrice;}
    get shoppingCartModalTotalPriceSubtext(){return this._shoppingCartModalTotalPriceSubtext;}
    get shoppingCartModalTotalPrice(){return this._shoppingCartModalTotalPrice;}
    //buttons
    get shoppingCartModalCheckoutButton(){return this._shoppingCartModalCheckoutButton;}
    get shoppingCartModalViewCartButton(){return this._shoppingCartModalViewCartButton;}
    //empty shopping cart elements
    get shoppingCartModalEmptyCartIcon(){return this._shoppingCartModalEmptyCartIcon;}
    get shoppingCartModalEmptyCartTitle(){return this._shoppingCartModalEmptyCartTitle;}
    get shoppingCartModalEmptyCartSubtext(){return this._shoppingCartModalEmptyCartSubtext;}
    get shoppingCartModalEmptyCartButton(){return this._shoppingCartModalEmptyCartButton;}

}
export {ShoppingCartModal};