"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class MyOrdersModal extends BasePage{

    constructor(page) {
        super(page);

        //my orders modal web elements
        this._myOrdersModalIcon = page.locator("//h2[@data-testid='my-orders-title']/span");
        this._myOrdersModalTitle = page.locator("//h2[@data-testid='my-orders-title']");
        this._myOrdersModalOrderCounter = page.locator("//span[@data-testid='my-orders-count']");
        //list elements
        this._myOrdersModalOrderImgElements = page.locator("//img[@data-testid='my-orders-product-image']");
        this._myOrdersModalOrderNameElements = page.locator("//h3[@data-testid='my-orders-product-name']");
        this._myOrdersModalOrderPriceQtyElements = page.locator("//div[@data-testid='my-orders-product-price']");
        this._myOrdersModalOrderIDElements = page.locator("//div[@class='text-sm text-gray-500']");
        this._myOrdersModalOrderDateElements = page.locator("//div[@data-testid='my-orders-order-date']");
        this._myOrdersModalOrderStatusElements = page.locator("//div[@data-testid='my-orders-status']");
        this._myOrdersModalOrderViewBtnElements = page.locator("//div[@class='hidden sm:flex flex-col gap-2 p-4 border-t sm:border-t-0 sm:border-l bg-gray-50 w-full sm:w-auto']/button[@data-testid='my-orders-view-button']");
        this._myOrdersModalOrderCancelBtnElements = page.locator("//div[@class='hidden sm:flex flex-col gap-2 p-4 border-t sm:border-t-0 sm:border-l bg-gray-50 w-full sm:w-auto']/button[@data-testid='my-orders-cancel-button']");
        //cancel order pop-up elements
        this._myOrdersModalPopUpTitle = page.locator("//h3[@data-testid='cancel-order-title']");
        this._myOrdersModalPopUpDesc = page.locator("//p[@data-testid='cancel-order-description']");
        this._myOrdersModalPopUpAbortBtn = page.locator("//button[@data-testid='cancel-order-cancel-button']");
        this._myOrdersModalPopUpCancelOrderBtn = page.locator("//button[@data-testid='cancel-order-delete-button']");
        //empty my orders modal elements
        this._myOrdersEmptyIcon = page.locator("//span[@class='anticon anticon-inbox']");
        this._myOrdersEmptyModalTitle = page.locator("//h3[@data-testid='no-orders-found-title']");
        this._myOrdersEmptyModalDesc = page.locator("//p[@data-testid='no-orders-found-description']");
        this._myOrdersEmptyModalStartShoppingButton = page.locator("//button[@data-testid='start-shopping-button']");

    }

    //click set order "Remove" button method
    async clickSetOrderCancelBtn(index){await this._myOrdersModalOrderCancelBtnElements.nth(index).click();}

    //click "Cancel" pop-up button method
    async clickCancelOrderPopUpBtn(){await this._myOrdersModalPopUpCancelOrderBtn.click();}

    //my orders modal order data getters
    async getMyOrderModalOrderCount(){return await this._myOrdersModalOrderCounter.innerText();}
    //list elements
    async getMyOrderModalOrderID(){
        const elements = await this._myOrdersModalOrderIDElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getMyOrderModalOrderDate(){
        const elements = await this._myOrdersModalOrderDateElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getMyOrderModalOrderStatus(){
        const elements = await this._myOrdersModalOrderPriceQtyElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getMyOrderModalOrderProductName(){
        const elements = await this._myOrdersModalOrderNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getMyOrderModalOrderProductPrice(){
        const elements = await this._myOrdersModalOrderPriceQtyElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = (await element.innerText()).trim();
                const [price] = text.split("×").map(t => t.trim());//split by "×" and take the first part as price
                return price;
            })
        );
    }
    async getMyOrderModalOrderProductQty(){
        const elements = await this._myOrdersModalOrderPriceQtyElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = (await element.innerText()).trim();
                const [, qty] = text.split("×").map(t => t.trim());//split by "×" and take the second part as quantity
                return qty;
            })
        );
    }

    //my orders modal text element getters
    async getMyOrderModalTitle(){return await this._myOrdersModalTitle.innerText();}
    //list elements
    async getMyOrderModalOrderProductViewBtnText(){
        const elements = await this._myOrdersModalOrderViewBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getMyOrderModalOrderProductCancelBtnText(){
        const elements = await this._myOrdersModalOrderCancelBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //cancel order pop-up text element getters
    async getMyOrderModalPopUpTitle(){return await this._myOrdersModalPopUpTitle.innerText();}
    async getMyOrderModalPopUpDesc(){return await this._myOrdersModalPopUpDesc.innerText();}
    async getMyOrderModalPopUpAbortBtnText(){return await this._myOrdersModalPopUpAbortBtn.innerText();}
    async getMyOrderModalPopUpCancelOrderBtnText(){return await this._myOrdersModalPopUpCancelOrderBtn.innerText();}
    //empty my orders modal text element getters
    async getMyOrderEmptyModalTitle(){return await this._myOrdersEmptyModalTitle.innerText();}
    async getMyOrderEmptyModalDesc(){return await this._myOrdersEmptyModalDesc.innerText();}
    async getMyOrderEmptyModalStartShoppingBtnText(){return await this._myOrdersEmptyModalStartShoppingButton.innerText();}

    //my order modal web element getters
    get myOrdersModalIcon(){return this._myOrdersModalIcon;}
    get myOrdersModalTitle(){return this._myOrdersModalTitle;}
    get myOrdersModalOrderCounter(){return this._myOrdersModalOrderCounter;}
    //list elements
    get myOrdersModalOrderImgElement(){return this._myOrdersModalOrderImgElements;}
    get myOrdersModalOrderNameElement(){return this._myOrdersModalOrderNameElements;}
    get myOrdersModalOrderPriceQtyElement(){return this._myOrdersModalOrderPriceQtyElements;}
    get myOrdersModalOrderIDElement(){return this._myOrdersModalOrderIDElements;}
    get myOrdersModalOrderDateElement(){return this._myOrdersModalOrderDateElements;}
    get myOrdersModalOrderStatusElement(){return this._myOrdersModalOrderStatusElements;}
    get myOrdersModalOrderViewBtnElement(){return this._myOrdersModalOrderViewBtnElements;}
    get myOrdersModalOrderCancelBtnElement(){return this._myOrdersModalOrderCancelBtnElements;}
    //cancel order po-up elements
    get myOrdersModalPopUpTitle(){return this._myOrdersModalPopUpTitle;}
    get myOrdersModalPopUpDesc(){return this._myOrdersModalPopUpDesc;}
    get myOrdersModalPopUpAbortBtn(){return this._myOrdersModalPopUpAbortBtn;}
    get myOrdersModalPopUpCancelOrderBtn(){return this._myOrdersModalPopUpCancelOrderBtn;}
    //empty my orders modal elements
    get myOrdersEmptyModalIcon(){return this._myOrdersEmptyIcon;}
    get myOrdersEmptyModalTitle(){return this._myOrdersEmptyModalTitle;}
    get myOrdersEmptyModalDesc(){return this._myOrdersEmptyModalDesc;}
    get myOrdersEmptyModalStartShoppingButton(){return this._myOrdersEmptyModalStartShoppingButton;}

}
export {MyOrdersModal};