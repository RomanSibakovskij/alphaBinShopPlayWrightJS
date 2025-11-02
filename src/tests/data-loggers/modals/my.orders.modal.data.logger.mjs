"use strict"

import {MyOrdersModal} from "../../../pages/modals/my.orders.modal.mjs";
import {Logger} from "../../../pages/utilities/logger.mjs";

class MyOrdersModalDataLogger{

    //my orders modal order data logger method
    async logMyOrdersModalOrderData(page){
        const myOrdersModal = new MyOrdersModal(page);
        console.log("My orders modal displayed order data: " + "\n");

        Logger.info("My orders modal displayed order count: " + await myOrdersModal.getMyOrderModalOrderCount());
        Logger.info("My orders modal displayed order ID(s): " + await myOrdersModal.getMyOrderModalOrderID());
        Logger.info("My orders modal displayed order date(s): " + await myOrdersModal.getMyOrderModalOrderDate());
        Logger.info("My orders modal displayed order status(es): " + await myOrdersModal.getMyOrderModalOrderStatus() + "\n");

        console.log("My orders displayed ordered product data: " + "\n");

        Logger.info("My orders modal displayed ordered product name(s): " + await myOrdersModal.getMyOrderModalOrderProductName());
        Logger.info("My orders modal displayed ordered product price(s): " + await myOrdersModal.getMyOrderModalOrderProductPrice());
        Logger.info("My orders modal displayed ordered product quantity(ies): " + await myOrdersModal.getMyOrderModalOrderProductQty() + "\n");

    }

}
export {MyOrdersModalDataLogger};