"use strict"

import {OrderDetailsPage} from "../../pages/order.details.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class OrderDetailsPageDataLogger{

    //order details page data logger method
    async logOrderDetailsPageData(page){
        const orderDetailsPage = new OrderDetailsPage(page);
        console.log("Order details page displayed data: " + "\n");

        Logger.info("Order details page displayed order ID number: " + await orderDetailsPage.getOrderDetailsPageOrderIDNumber());
        Logger.info("Order details page displayed order submission date: " + await orderDetailsPage.getOrderDetailsPageOrderDate() + "\n");

        console.log("Order details page shipping details section displayed data: " + "\n")

        Logger.info("Order details page displayed order shipping email: " + await orderDetailsPage.getOrderDetailsPageOrderInfoShipDetailsEmail());
        Logger.info("Order details page displayed order shipping payment method: " + await orderDetailsPage.getOrderDetailsPageOrderInfoShipDetailsPayMethod());
        Logger.info("Order details page displayed order shipping delivery address: " + await orderDetailsPage.getOrderDetailsPageOrderInfoShipDetailsDeliveryAddress() + "\n");

        console.log("Order details page order summary section displayed data: " + "\n")

        Logger.info("Order details page displayed product name(s): " + await orderDetailsPage.getOrderDetailsPageProductName());
        Logger.info("Order details page displayed product quantity(ies): " + await orderDetailsPage.getOrderDetailsPageProductQty());
        Logger.info("Order details page displayed product price(s): " + await orderDetailsPage.getOrderDetailsPageProductPrice());
        Logger.info("Order details page displayed order subtotal price: " + await orderDetailsPage.getOrderDetailsPageOrderSummarySubtotalPrice());
        Logger.info("Order details page displayed order shipping price: " + await orderDetailsPage.getOrderDetailsPageOrderSummaryShippingPrice());
        Logger.info("Order details page displayed order total price: " + await orderDetailsPage.getOrderDetailsPageOrderSummaryTotalPrice());

    }

}
export {OrderDetailsPageDataLogger};