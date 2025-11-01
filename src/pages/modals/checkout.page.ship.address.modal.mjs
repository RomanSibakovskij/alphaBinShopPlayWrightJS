"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class CheckoutPageShipAddressModal extends BasePage{

    constructor(page) {
        super(page);

        //shipping address display (modal) section elements
        this._checkoutPageShipAddressModalTitle = page.locator("//div[@data-testid='address-model-title']");
        this._checkoutPageShipAddressModalAddNewAddressBtn = page.locator("//div[@data-testid='add-new-address-button']");
        //list elements
        this._checkoutPageShipAddressModalBoxElements = page.locator("//div[@data-testid='address-item']");

    }

    //click "Add new address" button
    async clickAddNewAddressBtn(){
        const checkoutShipAddressAddNewAddressBtn = await this._checkoutPageShipAddressModalAddNewAddressBtn;
        checkoutShipAddressAddNewAddressBtn.click();
    }

    //checkout page shipping address modal data getter
    async getCheckoutPageShipAddressModalBoxText() {
        const elements = await this._checkoutPageShipAddressModalBoxElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //checkout page shipping address modal text element getters
    async getCheckoutPageShipAddressModalTitle(){return await this._checkoutPageShipAddressModalTitle.innerText();}
    async getCheckoutPageShipAddressModalAddNewAddressBtnText(){return await this._checkoutPageShipAddressModalAddNewAddressBtn.innerText();}

    //checkout page shipping address modal web element getters
    get checkoutPageShipAddressModalTitle(){return this._checkoutPageShipAddressModalTitle;}
    get checkoutPageShipAddressModalAddNewAddressBtn(){return this._checkoutPageShipAddressModalAddNewAddressBtn;}
    //list elements
    get checkoutPageShipAddressModalBoxElement(){return this._checkoutPageShipAddressModalBoxElements;}

}
export {CheckoutPageShipAddressModal};