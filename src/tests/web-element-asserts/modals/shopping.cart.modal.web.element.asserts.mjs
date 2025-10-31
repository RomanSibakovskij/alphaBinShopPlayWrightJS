//@ts-check
"use strict"

import {ShoppingCartModal} from "../../../pages/modals/shopping.cart.modal.mjs";
import {expect} from "@playwright/test";

class ShoppingCartModalWebElementAsserts {

    //shopping cart modal header web element assert test method
    async isShoppingCartModalHeaderWebElementVisible(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        //assert shopping cart modal icon is visible
        await expect(shoppingCartModal.shoppingCartModalIcon).toBeVisible();
        //assert shopping cart modal title is visible
        await expect(shoppingCartModal.shoppingCartModalTitle).toBeVisible();
        //assert shopping cart modal close modal button is visible
        await expect(shoppingCartModal.shoppingCartModalCloseModalButton).toBeVisible();
    }

    //shopping cart modal web element assert test method
    async isShoppingCartModalWebElementVisible(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        //header (only present when products are in the cart)
        //assert shopping cart modal product counter is visible
        await expect(shoppingCartModal.shoppingCartModalProductCounter).toBeVisible();
        //list elements
        //assert the shopping cart modal product images are visible (as a list)
        const shopCartModalProductImages = shoppingCartModal.shoppingCartModalProductImgElement;
        const shopCartModalProductImagesCount = await shopCartModalProductImages.count();
        for (let i = 0; i < shopCartModalProductImagesCount; i++) {
            await expect(shopCartModalProductImages.nth(i)).toBeVisible();
        }
        //assert the shopping cart modal product names are visible (as a list)
        const shopCartModalProductNames = shoppingCartModal.shoppingCartModalProductNameElement;
        const shopCartModalProductNamesCount = await shopCartModalProductNames.count();
        for (let i = 0; i < shopCartModalProductNamesCount; i++) {
            await expect(shopCartModalProductNames.nth(i)).toBeVisible();
        }
        //assert the shopping cart modal product quantity decrease buttons are visible (as a list)
        const shopCartModalProductQtyDecreaseButtons = shoppingCartModal.shoppingCartModalProductQtyDecreaseBtnElement;
        const shopCartModalProductQtyDecreaseButtonsCount = await shopCartModalProductQtyDecreaseButtons.count();
        for (let i = 0; i < shopCartModalProductQtyDecreaseButtonsCount; i++) {
            await expect(shopCartModalProductQtyDecreaseButtons.nth(i)).toBeVisible();
        }
        //assert the shopping cart modal product quantity input fields are visible (as a list)
        const shopCartModalProductQtyCounters = shoppingCartModal.shoppingCartModalProductQtyCounterElement;
        const shopCartModalProductQtyCounterCount = await shopCartModalProductQtyCounters.count();
        for (let i = 0; i < shopCartModalProductQtyCounterCount; i++) {
            await expect(shopCartModalProductQtyCounters.nth(i)).toBeVisible();
        }
        //assert the shopping cart modal product quantity increase buttons are visible (as a list)
        const shopCartModalProductQtyIncreaseButtons = shoppingCartModal.shoppingCartModalProductQtyIncreaseBtnElement;
        const shopCartModalProductQtyIncreaseButtonsCount = await shopCartModalProductQtyIncreaseButtons.count();
        for (let i = 0; i < shopCartModalProductQtyIncreaseButtonsCount; i++) {
            await expect(shopCartModalProductQtyIncreaseButtons.nth(i)).toBeVisible();
        }
        //assert the shopping cart modal product remove buttons are visible (as a list)
        const shopCartModalProductRemoveButtons = shoppingCartModal.shoppingCartModalProductRemoveBtnElement;
        const shopCartModalProductRemoveButtonsCount = await shopCartModalProductRemoveButtons.count();
        for (let i = 0; i < shopCartModalProductRemoveButtonsCount; i++) {
            await expect(shopCartModalProductRemoveButtons.nth(i)).toBeVisible();
        }
        //assert the shopping cart modal product unit prices are visible (as a list)
        const shopCartModalProductUnitPrices = shoppingCartModal.shoppingCartModalProductUnitPriceElement;
        const shopCartModalProductUnitPricesCount = await shopCartModalProductUnitPrices.count();
        for (let i = 0; i < shopCartModalProductUnitPricesCount; i++) {
            await expect(shopCartModalProductUnitPrices.nth(i)).toBeVisible();
        }
        //summary section
        //assert shopping cart modal summary subtotal price subtext is visible
        await expect(shoppingCartModal.shoppingCartModalSubtotalPriceSubtext).toBeVisible();
        //assert shopping cart modal summary subtotal price is visible
        await expect(shoppingCartModal.shoppingCartModalSubtotalPrice).toBeVisible();
        //assert shopping cart modal summary shipping price subtext is visible
        await expect(shoppingCartModal.shoppingCartModalShippingPriceSubtext).toBeVisible();
        //assert shopping cart modal summary shipping price is visible
        await expect(shoppingCartModal.shoppingCartModalShippingPrice).toBeVisible();
        //assert shopping cart modal summary total price subtext is visible
        await expect(shoppingCartModal.shoppingCartModalTotalPriceSubtext).toBeVisible();
        //assert shopping cart modal summary total price is visible
        await expect(shoppingCartModal.shoppingCartModalTotalPrice).toBeVisible();
        //buttons
        //assert shopping cart modal checkout button is visible
        await expect(shoppingCartModal.shoppingCartModalCheckoutButton).toBeVisible();
        //assert shopping cart modal view cart button is visible
        await expect(shoppingCartModal.shoppingCartModalViewCartButton).toBeVisible();
    }

    //empty shopping cart modal web element assert test method
    async isEmptyShoppingCartModalWebElementVisible(page){
        const shoppingCartModal = new ShoppingCartModal(page);
        //assert empty shopping cart modal icon is visible
        await expect(shoppingCartModal.shoppingCartModalEmptyCartIcon).toBeVisible();
        //assert empty shopping cart modal title is visible
        await expect(shoppingCartModal.shoppingCartModalEmptyCartTitle).toBeVisible();
        //assert empty shopping cart modal subtext is visible
        await expect(shoppingCartModal.shoppingCartModalEmptyCartSubtext).toBeVisible();
        //assert empty shopping cart modal shopping button is visible
        await expect(shoppingCartModal.shoppingCartModalEmptyCartButton).toBeVisible();
    }

}
export {ShoppingCartModalWebElementAsserts};