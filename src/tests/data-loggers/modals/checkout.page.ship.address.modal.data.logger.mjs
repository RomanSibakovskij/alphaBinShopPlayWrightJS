"use strict"

import {CheckoutPageShipAddressModal} from "../../../pages/modals/checkout.page.ship.address.modal.mjs";
import {Logger} from "../../../pages/utilities/logger.mjs";

class CheckoutPageShipAddressModalDataLogger{

    //checkout page shipping address modal data logger method
    async logCheckoutPageShipAddressModalData(page){
        const checkoutPageShipAddressModal = new CheckoutPageShipAddressModal(page);
        console.log("Checkout page shipping address modal displayed data: " + "\n")

        Logger.info("Checkout page shipping address modal displayed shipping address: " + await checkoutPageShipAddressModal.getCheckoutPageShipAddressModalBoxText() + "\n");

    }

}
export {CheckoutPageShipAddressModalDataLogger};