"use strict"

import {CheckoutPageShipAddressModal} from "../../../pages/modals/checkout.page.ship.address.modal.mjs";
import {expect} from "@playwright/test";

class CheckoutPageShipAddressModalTextElementAssert{

    //checkout page shipping address modal text element assert test method
    async isCheckoutPageShipAddressModalTextElementAsExpected(page){
        const checkoutPageShipAddressModal = new CheckoutPageShipAddressModal(page);
        //assert the checkout page shipping address modal title is as expected
        const checkoutPageShipAddressModalTitle = await checkoutPageShipAddressModal.getCheckoutPageShipAddressModalTitle();
        expect(checkoutPageShipAddressModalTitle).toBe("Address");
        //assert the checkout page shipping address modal title is as expected
        const checkoutPageShipAddressModalAddNewAddressBtnText = await checkoutPageShipAddressModal.getCheckoutPageShipAddressModalAddNewAddressBtnText();
        expect(checkoutPageShipAddressModalAddNewAddressBtnText).toBe("Add new address");
    }

}
export {CheckoutPageShipAddressModalTextElementAssert};