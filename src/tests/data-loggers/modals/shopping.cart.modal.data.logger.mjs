"use strict"

import {ShoppingCartModal} from "../../../pages/modals/shopping.cart.modal.mjs";
import {Logger} from "../../../pages/utilities/logger.mjs";

class ShoppingCartModalDataLogger{

    //shopping cart modal data logger method
    async logShoppingCartModalData(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        console.log("Shopping cart modal displayed data: " + "\n")

        Logger.info("Shopping cart modal product count: " + await shoppingCartModal.getShoppingCartModalProductCount());
        Logger.info("Shopping cart modal product name(s): " + await shoppingCartModal.getShoppingCartModalProductName());
        Logger.info("Shopping cart modal product quantity(ies): " + await shoppingCartModal.getShoppingCartModalProductQty());
        Logger.info("Shopping cart modal product unit price(s): " + await shoppingCartModal.getShoppingCartModalProductUnitPrice());
        Logger.info("Shopping cart modal summary subtotal price: " + await shoppingCartModal.getShoppingCartModalSubtotalPrice());
        Logger.info("Shopping cart modal summary shipping price: " + await shoppingCartModal.getShoppingCartModalShippingPrice());
        Logger.info("Shopping cart modal summary total price: " + await shoppingCartModal.getShoppingCartModalTotalPrice() + "\n");

    }

}
export {ShoppingCartModalDataLogger};