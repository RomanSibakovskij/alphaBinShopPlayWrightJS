"use strict"

import {MyOrdersModal} from "../../../pages/modals/my.orders.modal.mjs";
import {expect} from "@playwright/test";

class MyOrdersModalWebElementAsserts {

    //my orders modal web element assert test method
    async isMyOrdersModalWebElementVisible(page){
        const myOrdersModal = new MyOrdersModal(page);
        //assert the my orders modal icon is visible
        await expect(myOrdersModal.myOrdersModalIcon).toBeVisible();
        //assert the my orders modal title is visible
        await expect(myOrdersModal.myOrdersModalTitle).toBeVisible();
        //assert the my orders modal order counter is visible
        await expect(myOrdersModal.myOrdersModalOrderCounter).toBeVisible();
        //list elements
        //assert the my orders modal order images are visible (as a list)
        const myOrdersModalOrderImages = myOrdersModal.myOrdersModalOrderImgElement;
        const myOrdersModalOrderImageCount = await myOrdersModalOrderImages.count();
        for (let i = 0; i < myOrdersModalOrderImageCount; i++) {
            await expect(myOrdersModalOrderImages.nth(i)).toBeVisible();
        }
        //assert the my orders modal order names are visible (as a list)
        const myOrdersModalOrderNames = myOrdersModal.myOrdersModalOrderNameElement;
        const myOrdersModalOrderNameCount = await myOrdersModalOrderNames.count();
        for (let i = 0; i < myOrdersModalOrderNameCount; i++) {
            await expect(myOrdersModalOrderNames.nth(i)).toBeVisible();
        }
        //assert the my orders modal order price-quantities are visible (as a list)
        const myOrdersModalOrderPriceQuantities = myOrdersModal.myOrdersModalOrderPriceQtyElement;
        const myOrdersModalOrderPriceQtyCount = await myOrdersModalOrderPriceQuantities.count();
        for (let i = 0; i < myOrdersModalOrderPriceQtyCount; i++) {
            await expect(myOrdersModalOrderPriceQuantities.nth(i)).toBeVisible();
        }
        //assert the my orders modal order IDs are visible (as a list)
        const myOrdersModalOrderIDs = myOrdersModal.myOrdersModalOrderIDElement;
        const myOrdersModalOrderIDCount = await myOrdersModalOrderIDs.count();
        for (let i = 0; i < myOrdersModalOrderIDCount; i++) {
            await expect(myOrdersModalOrderIDs.nth(i)).toBeVisible();
        }
        //assert the my orders modal order dates are visible (as a list)
        const myOrdersModalOrderDates = myOrdersModal.myOrdersModalOrderDateElement;
        const myOrdersModalOrderDateCount = await myOrdersModalOrderDates.count();
        for (let i = 0; i < myOrdersModalOrderDateCount; i++) {
            await expect(myOrdersModalOrderDates.nth(i)).toBeVisible();
        }
        //assert the my orders modal order statuses are visible (as a list)
        const myOrdersModalOrderStatuses = myOrdersModal.myOrdersModalOrderStatusElement;
        const myOrdersModalOrderStatusCount = await myOrdersModalOrderStatuses.count();
        for (let i = 0; i < myOrdersModalOrderStatusCount; i++) {
            await expect(myOrdersModalOrderStatuses.nth(i)).toBeVisible();
        }
        //assert the my orders modal order view buttons are visible (as a list)
        const myOrdersModalOrderViewButtons = myOrdersModal.myOrdersModalOrderViewBtnElement;
        const myOrdersModalOrderViewBtnCount = await myOrdersModalOrderViewButtons.count();
        for (let i = 0; i < myOrdersModalOrderViewBtnCount; i++) {
            await expect(myOrdersModalOrderViewButtons.nth(i)).toBeVisible();
        }
        //assert the my orders modal order cancel buttons are visible (as a list)
        const myOrdersModalOrderCancelButtons = myOrdersModal.myOrdersModalOrderCancelBtnElement;
        const myOrdersModalOrderCancelBtnCount = await myOrdersModalOrderCancelButtons.count();
        for (let i = 0; i < myOrdersModalOrderCancelBtnCount; i++) {
            await expect(myOrdersModalOrderCancelButtons.nth(i)).toBeVisible();
        }
    }

    //my orders modal (cancel pop-up) web element assert test method
    async isMyOrdersModalCancelPopUpWebElementVisible(page){
        const myOrdersModal = new MyOrdersModal(page);
        //assert the my orders modal cancel pop-up title is visible
        await expect(myOrdersModal.myOrdersModalPopUpTitle).toBeVisible();
        //assert the my orders modal cancel pop-up description is visible
        await expect(myOrdersModal.myOrdersModalPopUpDesc).toBeVisible();
        //assert the my orders modal cancel pop-up abort button is visible
        await expect(myOrdersModal.myOrdersModalPopUpAbortBtn).toBeVisible();
        //assert the my orders modal cancel pop-up cancel order button is visible
        await expect(myOrdersModal.myOrdersModalPopUpCancelOrderBtn).toBeVisible();
    }

    //my orders (empty) modal web element assert test method
    async isEmptyMyOrdersModalWebElementVisible(page){
        const myOrdersModal = new MyOrdersModal(page);
        //assert the my orders empty modal icon is visible
        await expect(myOrdersModal.myOrdersEmptyModalIcon).toBeVisible();
        //assert the my orders empty modal title is visible
        await expect(myOrdersModal.myOrdersEmptyModalTitle).toBeVisible();
        //assert the my orders empty modal description is visible
        await expect(myOrdersModal.myOrdersEmptyModalDesc).toBeVisible();
        //assert the my orders empty modal start shopping button is visible
        await expect(myOrdersModal.myOrdersEmptyModalStartShoppingButton).toBeVisible();
    }

}
export {MyOrdersModalWebElementAsserts};