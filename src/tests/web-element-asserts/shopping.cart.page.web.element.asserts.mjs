"use strict"

import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {expect} from "@playwright/test";

class ShoppingCartPageWebElementAsserts {

    //shopping cart page web element assert test method
    async isShoppingCartPageWebElementVisible(page){
        const shoppingCartPage = new ShoppingCartPage(page);
        //assert the shopping cart page title is visible
        await expect(shoppingCartPage.shoppingCartPageTitle).toBeVisible();
        //product cart table
        //assert the shopping cart page product cart product subtext is visible
        await expect(shoppingCartPage.shoppingCartPageProductTableProductSubtext).toBeVisible();
        //assert the shopping cart page product cart price subtext is visible
        await expect(shoppingCartPage.shoppingCartPageProductTablePriceSubtext).toBeVisible();
        //assert the shopping cart page product cart quantity subtext is visible
        await expect(shoppingCartPage.shoppingCartPageProductTableQuantitySubtext).toBeVisible();
        //assert the shopping cart page product cart subtotal subtext is visible
        await expect(shoppingCartPage.shoppingCartPageProductTableSubtotalSubtext).toBeVisible();
        //list elements
        //assert the shopping cart page product images are visible (as a list)
        const shopCartPageProductImages = shoppingCartPage.shoppingCartPageProductImgElement;
        const shopCartPageProductImageCount = await shopCartPageProductImages.count();
        for (let i = 0; i < shopCartPageProductImageCount; i++) {
            await expect(shopCartPageProductImages.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product names are visible (as a list)
        const shopCartPageProductNames = shoppingCartPage.shoppingCartPageProductNameElement;
        const shopCartPageProductNameCount = await shopCartPageProductNames.count();
        for (let i = 0; i < shopCartPageProductNameCount; i++) {
            await expect(shopCartPageProductNames.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product prices are visible (as a list)
        const shopCartPageProductPrices = shoppingCartPage.shoppingCartPageProductPriceElement;
        const shopCartPageProductPriceCount = await shopCartPageProductPrices.count();
        for (let i = 0; i < shopCartPageProductPriceCount; i++) {
            await expect(shopCartPageProductPrices.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product quantity decrease buttons are visible (as a list)
        const shopCartPageProductQtyDecreaseButtons = shoppingCartPage.shoppingCartPageProductQtyDecreaseBtnElement;
        const shopCartPageProductQtyDecreaseButtonCount = await shopCartPageProductQtyDecreaseButtons.count();
        for (let i = 0; i < shopCartPageProductQtyDecreaseButtonCount; i++) {
            await expect(shopCartPageProductQtyDecreaseButtons.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product quantity counters are visible (as a list)
        const shopCartPageProductQtyCounts = shoppingCartPage.shoppingCartPageProductQtyCounterElement;
        const shopCartPageProductQtyCountsCount = await shopCartPageProductQtyCounts.count();
        for (let i = 0; i < shopCartPageProductQtyCountsCount; i++) {
            await expect(shopCartPageProductQtyCounts.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product quantity increase buttons are visible (as a list)
        const shopCartPageProductQtyIncreaseButtons = shoppingCartPage.shoppingCartPageProductQtyIncreaseBtnElement;
        const shopCartPageProductQtyIncreaseButtonCount = await shopCartPageProductQtyIncreaseButtons.count();
        for (let i = 0; i < shopCartPageProductQtyIncreaseButtonCount; i++) {
            await expect(shopCartPageProductQtyIncreaseButtons.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product subtotal prices are visible (as a list)
        const shopCartPageProductSubtotalPrices = shoppingCartPage.shoppingCartPageProductSubtotalPriceElement;
        const shopCartPageProductSubtotalPriceCount = await shopCartPageProductSubtotalPrices.count();
        for (let i = 0; i < shopCartPageProductSubtotalPriceCount; i++) {
            await expect(shopCartPageProductSubtotalPrices.nth(i)).toBeVisible();
        }
        //assert the shopping cart page product remove buttons are visible (as a list)
        const shopCartPageProductRemoveButtons = shoppingCartPage.shoppingCartPageProductRemoveBtnElement;
        const shopCartPageProductRemoveButtonCount = await shopCartPageProductRemoveButtons.count();
        for (let i = 0; i < shopCartPageProductRemoveButtonCount; i++) {
            await expect(shopCartPageProductRemoveButtons.nth(i)).toBeVisible();
        }
        //order summary section
        //assert the shopping cart page order summary table title is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableTitle).toBeVisible();
        //assert the shopping cart page order summary table subtotal subtext is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableSubtotalSubtext).toBeVisible();
        //assert the shopping cart page order summary table subtotal price is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableSubtotalPrice).toBeVisible();
        //assert the shopping cart page order summary table shipping subtext is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableShippingSubtext).toBeVisible();
        //assert the shopping cart page order summary table shipping price is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableShippingPrice).toBeVisible();
        //assert the shopping cart page order summary table total subtext is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableTotalSubtext).toBeVisible();
        //assert the shopping cart page order summary table total price is visible
        await expect(shoppingCartPage.shoppingCartPageOrderSummaryTableTotalPrice).toBeVisible();
        //buttons
        //assert the shopping cart page continue shopping button is visible
        await expect(shoppingCartPage.shoppingCartPageContinueShoppingButton).toBeVisible();
        //assert the shopping cart page checkout button is visible
        await expect(shoppingCartPage.shoppingCartPageCheckoutButton).toBeVisible();
    }

}
export {ShoppingCartPageWebElementAsserts};