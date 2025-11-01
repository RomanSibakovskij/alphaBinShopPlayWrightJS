"use strict"

import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {expect} from "@playwright/test";

class ShoppingCartPageTextElementAsserts {

    //shopping cart page text element assert test method
    async isShoppingCartPageTextElementAsExpected(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartPageTitle();
        expect(shoppingCartPageTitle).toBe("Shopping Cart");
        //product cart table
        //assert shopping cart page product table product subtext is as expected
        const shoppingCartPageProductTableProductSubtext = await shoppingCartPage.getShoppingCartPageProductTableProductSubtext();
        expect(shoppingCartPageProductTableProductSubtext).toBe("Product");
        //assert shopping cart page product table quantity subtext is as expected
        const shoppingCartPageProductTableQtySubtext = await shoppingCartPage.getShoppingCartPageProductTableQuantitySubtext();
        expect(shoppingCartPageProductTableQtySubtext).toBe("Quantity");
        //assert shopping cart page product table subtotal subtext is as expected
        const shoppingCartPageProductTableSubtotalSubtext = await shoppingCartPage.getShoppingCartPageProductTableSubtotalSubtext();
        expect(shoppingCartPageProductTableSubtotalSubtext).toBe("Subtotal");
        //order summary table
        //assert shopping cart page order summary table product subtext is as expected
        const shoppingCartPageOrderSummaryTableTitle = await shoppingCartPage.getShoppingCartPageOrderSummaryTableTitle();
        expect(shoppingCartPageOrderSummaryTableTitle).toBe("Order Summary");
        //assert shopping cart page order summary table subtotal subtext is as expected
        const shoppingCartPageOrderSummaryTableSubtotalSubtext = await shoppingCartPage.getShoppingCartPageOrderSummaryTableSubtotalSubtext();
        expect(shoppingCartPageOrderSummaryTableSubtotalSubtext).toBe("Subtotal");
        //assert shopping cart page order summary table shipping subtext is as expected
        const shoppingCartPageOrderSummaryTableShippingSubtext = await shoppingCartPage.getShoppingCartPageOrderSummaryTableShippingSubtext();
        expect(shoppingCartPageOrderSummaryTableShippingSubtext).toBe("Shipping");
        //assert shopping cart page order summary table total subtext is as expected
        const shoppingCartPageOrderSummaryTableTotalSubtext = await shoppingCartPage.getShoppingCartPageOrderSummaryTableTotalSubtext();
        expect(shoppingCartPageOrderSummaryTableTotalSubtext).toBe("Total");
        //buttons
        //assert shopping cart page continue shopping button text is as expected
        const shoppingCartPageContinueShoppingBtnText = await shoppingCartPage.getShoppingCartPageContinueShoppingBtnText();
        expect(shoppingCartPageContinueShoppingBtnText).toBe("Continue Shopping");
        //assert shopping cart page checkout button text is as expected
        const shoppingCartPageCheckoutBtnText = await shoppingCartPage.getShoppingCartPageCheckoutBtnText();
        expect(shoppingCartPageCheckoutBtnText).toBe("Checkout");
    }

    //shopping cart page (empty cart) text element assert test method
    async isShoppingCartPageEmptyCartTextElementAsExpected(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert empty shopping cart page title is as expected
        const shoppingCartPageEmptyCartTitle = await shoppingCartPage.getShoppingCartPageEmptyCartTitle();
        expect(shoppingCartPageEmptyCartTitle).toBe("Your cart is empty");
        //assert empty shopping cart page description is as expected
        const shoppingCartPageEmptyCartDesc = await shoppingCartPage.getShoppingCartPageEmptyCartDesc();
        expect(shoppingCartPageEmptyCartDesc).toBe("Looks like you haven't added any products to your cart yet.");
        //assert empty shopping cart page continue shopping button text is as expected
        const shoppingCartPageEmptyCartContinueShoppingBtnText = await shoppingCartPage.getShoppingCartPageEmptyCartContinueShoppingBtnText();
        expect(shoppingCartPageEmptyCartContinueShoppingBtnText).toBe("Continue Shopping");
    }

}
export {ShoppingCartPageTextElementAsserts};