"use strict"

import {CheckoutPage} from "../../pages/checkout.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class CheckoutPageDataLoggers{

    //checkout page shipping address data logger method
    async logCheckoutShipAddressData(page){
        const checkoutPage = new CheckoutPage(page);
        console.log("Checkout page displayed shipping address data: " + "\n");

        Logger.info("Checkout page displayed shipping address: " + await checkoutPage.getCheckoutPageShipAddress());

    }

    //checkout page cash on delivery shipping address data logger method
    async logCheckoutCashOnDeliveryShipAddressData(page){
        const checkoutPage = new CheckoutPage(page);
        console.log("Checkout page displayed cash on delivery section shipping address data: " + "\n");

        Logger.info("Checkout page displayed cash on delivery shipping address: " + await checkoutPage.getCheckoutPageCashOnDeliveryShipAddress());

    }

    //checkout page product table data logger method
    async logCheckoutProductData(page){
        const checkoutPage = new CheckoutPage(page);
        console.log("Checkout page displayed order summary product data: " + "\n");

        Logger.info("Checkout page displayed product name(s): " + await checkoutPage.getCheckoutPageProductName());
        Logger.info("Checkout page displayed product quantity(ies): " + await checkoutPage.getCheckoutPageProductQty());
        Logger.info("Checkout page displayed product unit price(s): " + await checkoutPage.getCheckoutPageProductUnitPrice() + "\n");

        console.log("Checkout page displayed order summary data: " + "\n");

        Logger.info("Checkout page displayed order subtotal price: " + await checkoutPage.getCheckoutPageOrderSubtotalPrice());
        Logger.info("Checkout page displayed order shipping price: " + await checkoutPage.getCheckoutPageOrderShippingPrice());
        Logger.info("Checkout page displayed order total price: " + await checkoutPage.getCheckoutPageOrderTotalPrice() + "\n");

    }

}
export {CheckoutPageDataLoggers};