"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class ShoppingCartPage extends BasePage{

    constructor(page) {
        super(page);

        //shopping cart page web elements
        this._shoppingCartPageTitle = page.locator("//h1[@data-testid='cart-title']");
        //product cart table
        this._shoppingCartPageProductTableProductSubtext = page.locator("//div[@data-testid='cart-product-header']");
        this._shoppingCartPageProductTablePriceSubtext = page.locator("//div[@data-testid='cart-price-header']");
        this._shoppingCartPageProductTableQuantitySubtext = page.locator("//div[@data-testid='cart-quantity-header']");
        this._shoppingCartPageProductTableSubtotalSubtext = page.locator("//div[@data-testid='cart-subtotal-header']");
        //list elements
        this._shoppingCartPageProductImgElements = page.locator("//img[@data-testid='cart-product-image']");
        this._shoppingCartPageProductNameElements = page.locator("//h3[@data-testid='cart-product-header']");
        this._shoppingCartPageProductPriceElements = page.locator("//div[@data-testid='cart-price']");
        this._shoppingCartPageProductQtyDecreaseBtnElements = page.locator("//button[@data-testid='cart-decrement-button']");
        this._shoppingCartPageProductQtyCounterElements = page.locator("//span[@data-testid='cart-quantity']");
        this._shoppingCartPageProductQtyIncreaseBtnElements = page.locator("//button[@data-testid='cart-increment-button']");
        this._shoppingCartPageProductSubtotalPriceElements = page.locator("//div[@data-testid='cart-subtotal']");
        this._shoppingCartPageProductRemoveBtnElements = page.locator("//button[@data-testid='cart-delete-button']");
        //order summary section
        this._shoppingCartPageOrderSummaryTableTitle = page.locator("//h3[@data-testid='cart-order-summary-title']");
        this._shoppingCartPageOrderSummaryTableSubtotalSubtext = page.locator("//span[@data-testid='cart-order-summary-subtotal-label']");
        this._shoppingCartPageOrderSummaryTableSubtotalPrice = page.locator("//span[@data-testid='cart-order-summary-subtotal-value']");
        this._shoppingCartPageOrderSummaryTableShippingSubtext = page.locator("//span[@data-testid='cart-order-summary-shipping-label']");
        this._shoppingCartPageOrderSummaryTableShippingPrice = page.locator("//span[@data-testid='cart-order-summary-shipping-value']");
        this._shoppingCartPageOrderSummaryTableTotalSubtext = page.locator("//span[@data-testid='cart-order-summary-total-label']");
        this._shoppingCartPageOrderSummaryTableTotalPrice = page.locator("//span[@data-testid='cart-order-summary-total-value']");
        //buttons
        this._shoppingCartPageContinueShoppingButton = page.locator("//button[@data-testid='cart-continue-shopping-button']");
        this._shoppingCartPageCheckoutButton = page.locator("//button[@data-testid='cart-checkout-button']");

    }

    //click "Checkout" button method
    async clickCheckoutButton(){await this._shoppingCartPageCheckoutButton.click();}

    //shopping cart page product data getters
    //product table
    async getShopCartPageProductName() {
        const elements = await this._shoppingCartPageProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShopCartPageProductPrice() {
        const elements = await this._shoppingCartPageProductPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShopCartPageProductQty() {
        const elements = await this._shoppingCartPageProductQtyCounterElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getShopCartPageProductSubtotalPrice() {
        const elements = await this._shoppingCartPageProductSubtotalPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //order summary section
    async getShoppingCartOrderSummaryTableSubtotalPrice(){return await this._shoppingCartPageOrderSummaryTableSubtotalPrice.innerText();}
    async getShoppingCartOrderSummaryTableShippingPrice(){return await this._shoppingCartPageOrderSummaryTableShippingPrice.innerText();}
    async getShoppingCartOrderSummaryTableTotalPrice(){return await this._shoppingCartPageOrderSummaryTableTotalPrice.innerText();}

    //shopping cart page text element getters
    async getShoppingCartPageTitle(){return await this._shoppingCartPageTitle.innerText();}
    //product cart table
    async getShoppingCartPageProductTableProductSubtext(){return await this._shoppingCartPageProductTableProductSubtext.innerText();}
    async getShoppingCartPageProductTableQuantitySubtext(){return await this._shoppingCartPageProductTableQuantitySubtext.innerText();}
    async getShoppingCartPageProductTableSubtotalSubtext(){return await this._shoppingCartPageProductTableSubtotalSubtext.innerText();}
    //order summary section
    async getShoppingCartPageOrderSummaryTableTitle(){return await this._shoppingCartPageOrderSummaryTableTitle.innerText();}
    async getShoppingCartPageOrderSummaryTableSubtotalSubtext(){return await this._shoppingCartPageOrderSummaryTableSubtotalSubtext.innerText();}
    async getShoppingCartPageOrderSummaryTableShippingSubtext(){return await this._shoppingCartPageOrderSummaryTableShippingSubtext.innerText();}
    async getShoppingCartPageOrderSummaryTableTotalSubtext(){return await this._shoppingCartPageOrderSummaryTableTotalSubtext.innerText();}
    //buttons
    async getShoppingCartPageContinueShoppingBtnText(){
        const text = await this._shoppingCartPageContinueShoppingButton.innerText();
        return text.replace(/\s+/g, ' ').trim();//trims out new spaces
    }
    async getShoppingCartPageCheckoutBtnText(){return await this._shoppingCartPageCheckoutButton.innerText();}

    //shopping cart page web element getters
    get shoppingCartPageTitle(){return this._shoppingCartPageTitle;}
    //product cart table
    get shoppingCartPageProductTableProductSubtext(){return this._shoppingCartPageProductTableProductSubtext;}
    get shoppingCartPageProductTablePriceSubtext(){return this._shoppingCartPageProductTablePriceSubtext;}
    get shoppingCartPageProductTableQuantitySubtext(){return this._shoppingCartPageProductTableQuantitySubtext;}
    get shoppingCartPageProductTableSubtotalSubtext(){return this._shoppingCartPageProductTableSubtotalSubtext;}
    //list elements
    get shoppingCartPageProductImgElement(){return this._shoppingCartPageProductImgElements;}
    get shoppingCartPageProductNameElement(){return this._shoppingCartPageProductNameElements;}
    get shoppingCartPageProductPriceElement(){return this._shoppingCartPageProductPriceElements;}
    get shoppingCartPageProductQtyDecreaseBtnElement(){return this._shoppingCartPageProductQtyDecreaseBtnElements;}
    get shoppingCartPageProductQtyCounterElement(){return this._shoppingCartPageProductQtyCounterElements;}
    get shoppingCartPageProductQtyIncreaseBtnElement(){return this._shoppingCartPageProductQtyIncreaseBtnElements;}
    get shoppingCartPageProductSubtotalPriceElement(){return this._shoppingCartPageProductSubtotalPriceElements;}
    get shoppingCartPageProductRemoveBtnElement(){return this._shoppingCartPageProductRemoveBtnElements;}
    //order summary section
    get shoppingCartPageOrderSummaryTableTitle(){return this._shoppingCartPageOrderSummaryTableTitle;}
    get shoppingCartPageOrderSummaryTableSubtotalSubtext(){return this._shoppingCartPageOrderSummaryTableSubtotalSubtext;}
    get shoppingCartPageOrderSummaryTableSubtotalPrice(){return this._shoppingCartPageOrderSummaryTableSubtotalPrice;}
    get shoppingCartPageOrderSummaryTableShippingSubtext(){return this._shoppingCartPageOrderSummaryTableShippingSubtext;}
    get shoppingCartPageOrderSummaryTableShippingPrice(){return this._shoppingCartPageOrderSummaryTableShippingPrice;}
    get shoppingCartPageOrderSummaryTableTotalSubtext(){return this._shoppingCartPageOrderSummaryTableTotalSubtext;}
    get shoppingCartPageOrderSummaryTableTotalPrice(){return this._shoppingCartPageOrderSummaryTableTotalPrice;}
    //buttons
    get shoppingCartPageContinueShoppingButton(){return this._shoppingCartPageContinueShoppingButton;}
    get shoppingCartPageCheckoutButton(){return this._shoppingCartPageCheckoutButton;}

}
export {ShoppingCartPage};