"use strict"

import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class ShoppingCartPageDataLogger{

    //shopping cart page product data logger method
    async logShoppingCartPageProductData(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        console.log("Shopping cart page displayed product table data: " + "\n");

        Logger.info("Shopping cart page displayed product name(s): " + await shoppingCartPage.getShopCartPageProductName());
        Logger.info("Shopping cart page displayed product unit price(s): " + await shoppingCartPage.getShopCartPageProductPrice());
        Logger.info("Shopping cart page displayed product quantity(ies): " + await shoppingCartPage.getShopCartPageProductQty());
        Logger.info("Shopping cart page displayed product subtotal price(s): " + await shoppingCartPage.getShopCartPageProductSubtotalPrice() + "\n");

        console.log("Shopping cart page displayed order summary table data: " + "\n");

        Logger.info("Shopping cart page displayed order summary subtotal price: " + await shoppingCartPage.getShoppingCartOrderSummaryTableSubtotalPrice());
        Logger.info("Shopping cart page displayed order summary shipping price: " + await shoppingCartPage.getShoppingCartOrderSummaryTableShippingPrice());
        Logger.info("Shopping cart page displayed order summary total price: " + await shoppingCartPage.getShoppingCartOrderSummaryTableTotalPrice());

    }

}
export {ShoppingCartPageDataLogger};