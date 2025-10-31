"use strict"

import {ShoppingCartModal} from "../../../pages/modals/shopping.cart.modal.mjs";
import {expect} from "@playwright/test";

class ShoppingCartModalTextElementAsserts{

    //shopping cart modal header text element test method
    async isShoppingCartModalHeaderTextElementAsExpected(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        //assert shopping cart modal header title is as expected
        const shopCartModalTitle = await shoppingCartModal.getShoppingCartModalTitle();
        expect(shopCartModalTitle).toBe("Your Cart");
    }

    //shopping cart modal text element test method
    async isShoppingCartModalTextElementAsExpected(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        //summary section
        //assert shopping cart modal summary subtotal price subtext is as expected
        const shopCartModalSubtotalPriceSubtext = await shoppingCartModal.getShoppingCartModalSubtotalPriceSubtext();
        expect(shopCartModalSubtotalPriceSubtext).toBe("Subtotal");
        //assert shopping cart modal summary shipping price subtext is as expected
        const shopCartModalShippingPriceSubtext = await shoppingCartModal.getShoppingCartModalShippingPriceSubtext();
        expect(shopCartModalShippingPriceSubtext).toBe("Shipping");
        //assert shopping cart modal summary total price subtext is as expected
        const shopCartModalTotalPriceSubtext = await shoppingCartModal.getShoppingCartModalTotalPriceSubtext();
        expect(shopCartModalTotalPriceSubtext).toBe("Total");
        //buttons
        //assert shopping cart modal checkout button text is as expected
        const shopCartModalCheckoutBtnText = await shoppingCartModal.getShoppingCartModalCheckoutBtnText();
        expect(shopCartModalCheckoutBtnText).toBe("Checkout");
        //assert shopping cart modal view cart button text is as expected
        const shopCartModalViewCartBtnText = await shoppingCartModal.getShoppingCartModalViewCartBtnText();
        expect(shopCartModalViewCartBtnText).toBe("View Cart");
    }

    //empty shopping cart modal text element test method
    async isEmptyShoppingCartModalTextElementAsExpected(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        //assert empty shopping cart modal title is as expected
        const emptyShopCartModalTitle = await shoppingCartModal.getShoppingCartModalEmptyCartTitle();
        expect(emptyShopCartModalTitle).toBe("Your cart is empty");
        //assert empty shopping cart modal subtext is as expected
        const emptyShopCartModalSubtext = await shoppingCartModal.getShoppingCartModalEmptyCartSubtext();
        expect(emptyShopCartModalSubtext).toBe("Looks like you haven't added any products to your cart yet.");
        //assert empty shopping cart modal shopping button text is as expected
        const emptyShopCartModalShopBtnText = await shoppingCartModal.getShoppingCartModalEmptyCartButton();
        expect(emptyShopCartModalShopBtnText).toBe("Start Shopping");
    }

}
export {ShoppingCartModalTextElementAsserts};