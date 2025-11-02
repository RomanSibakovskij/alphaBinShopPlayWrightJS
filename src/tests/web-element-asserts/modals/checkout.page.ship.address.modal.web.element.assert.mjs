"use strict"

import {CheckoutPageShipAddressModal} from "../../../pages/modals/checkout.page.ship.address.modal.mjs";
import {expect} from "@playwright/test";

class CheckoutPageShipAddressModalWebElementAssert{

    //checkout page shipping address modal web element assert test method
    async isCheckoutPageShipAddressModalWebElementVisible(page){
        const checkoutPageShipAddressModal = new CheckoutPageShipAddressModal(page);
        //assert the checkout page shipping address modal title is visible
        await expect(checkoutPageShipAddressModal.checkoutPageShipAddressModalTitle).toBeVisible();
        //assert the checkout page shipping address modal add new address button is visible
        await expect(checkoutPageShipAddressModal.checkoutPageShipAddressModalAddNewAddressBtn).toBeVisible();
        //list elements
        const checkoutPageShipAddressModalBoxes = checkoutPageShipAddressModal.checkoutPageShipAddressModalBoxElement;
        const checkoutPageShipAddressModalBoxCount = await checkoutPageShipAddressModalBoxes.count();
        for (let i = 0; i < checkoutPageShipAddressModalBoxCount; i++) {
            await expect(checkoutPageShipAddressModalBoxes.nth(i)).toBeVisible();
        }
    }

}
export {CheckoutPageShipAddressModalWebElementAssert};