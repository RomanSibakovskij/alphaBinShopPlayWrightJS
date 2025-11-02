"use strict"

import {OrderDetailsPage} from "../../pages/order.details.page.mjs";
import {expect} from "@playwright/test";

class OrderDetailsPageWebElementAssert{

    //order details page web element assert test method
    async isOrderDetailsPageWebElementVisible(page){
        const orderDetailsPage = new OrderDetailsPage(page);
        //assert the order details page back to home button is visible
        await expect(orderDetailsPage.orderDetailsPageBackToHomeBtn).toBeVisible();
        //assert the order details page title is visible
        await expect(orderDetailsPage.orderDetailsPageTitle).toBeVisible();
        //assert the order details page order ID number is visible
        await expect(orderDetailsPage.orderDetailsOrderIDNumber).toBeVisible();
        //order confirm section
        //assert the order details page order confirm tick icon is visible
        await expect(orderDetailsPage.orderDetailsPageOrderConfirmTickIcon).toBeVisible();
        //assert the order details page order confirm title is visible
        await expect(orderDetailsPage.orderDetailsPageOrderConfirmTitle).toBeVisible();
        //assert the order details page order confirm message is visible
        await expect(orderDetailsPage.orderDetailsPageOrderConfirmMessage).toBeVisible();
        //assert the order details page order date icon is visible
        await expect(orderDetailsPage.orderDetailsPageOrderDateIcon).toBeVisible();
        //assert the order details page order date is visible
        await expect(orderDetailsPage.orderDetailsPageOrderDate).toBeVisible();
        //order information section
        //assert the order details page order information section title is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoSectionTitle).toBeVisible();
        //assert the order details page order confirm message title is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoOrderConfirmMsgTitle).toBeVisible();
        //assert the order details page order confirm message is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoOrderConfirmMsg).toBeVisible();
        //shipping details section
        //assert the order details page order information shipping details section title is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsSectionTitle).toBeVisible();
        //assert the order details page order information shipping details email icon is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsEmailIcon).toBeVisible();
        //assert the order details page order information shipping details email subtext is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsEmailSubtext).toBeVisible();
        //assert the order details page order information shipping details email is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsEmail).toBeVisible();
        //assert the order details page order information shipping details payment method icon is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsPayMethodIcon).toBeVisible();
        //assert the order details page order information shipping details payment method subtext is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsPayMethodSubtext).toBeVisible();
        //assert the order details page order information shipping details payment method is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsPayMethod).toBeVisible();
        //assert the order details page order information shipping details delivery address icon is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsDeliveryAddressIcon).toBeVisible();
        //assert the order details page order information shipping details delivery address subtext is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsDeliveryAddressSubtext).toBeVisible();
        //assert the order details page order information shipping details delivery address is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoShipDetailsDeliveryAddress).toBeVisible();
        //assert the order details page order information is visible continue shopping button is visible
        await expect(orderDetailsPage.orderDetailsPageOrderInfoContinueShoppingBtn).toBeVisible();
        //order summary section
        //assert the order details page order summary section title is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummaryTitle).toBeVisible();
        //product table (list elements)
        //assert the order details page product images are visible (as a list)
        const orderDetailsPageProductImages = orderDetailsPage.orderDetailsPageOrderProductImgElement;
        const orderDetailsPageProductImageCount = await orderDetailsPageProductImages.count();
        for (let i = 0; i < orderDetailsPageProductImageCount; i++) {
            await expect(orderDetailsPageProductImages.nth(i)).toBeVisible();
        }
        //assert the order details page product names are visible (as a list)
        const orderDetailsPageProductNames = orderDetailsPage.orderDetailsPageOrderProductNameElement;
        const orderDetailsPageProductNameCount = await orderDetailsPageProductNames.count();
        for (let i = 0; i < orderDetailsPageProductNameCount; i++) {
            await expect(orderDetailsPageProductNames.nth(i)).toBeVisible();
        }
        //assert the order details page product quantities are visible (as a list)
        const orderDetailsPageProductQuantities = orderDetailsPage.orderDetailsPageOrderProductQtyElement;
        const orderDetailsPageProductQtyCount = await orderDetailsPageProductQuantities.count();
        for (let i = 0; i < orderDetailsPageProductQtyCount; i++) {
            await expect(orderDetailsPageProductQuantities.nth(i)).toBeVisible();
        }
        //assert the order details page product prices are visible (as a list)
        const orderDetailsPageProductPrices = orderDetailsPage.orderDetailsPageOrderProductPriceElement;
        const orderDetailsPageProductPriceCount = await orderDetailsPageProductPrices.count();
        for (let i = 0; i < orderDetailsPageProductPriceCount; i++) {
            await expect(orderDetailsPageProductPrices.nth(i)).toBeVisible();
        }
        //summary
        //assert the order details page order summary subtotal price subtext is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummarySubtotalSubtext).toBeVisible();
        //assert the order details page order summary subtotal price is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummarySubtotalPrice).toBeVisible();
        //assert the order details page order summary shipping price subtext is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummaryShippingSubtext).toBeVisible();
        //assert the order details page order summary shipping price is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummaryShippingPrice).toBeVisible();
        //assert the order details page order summary total price subtext is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummaryTotalSubtext).toBeVisible();
        //assert the order details page order summary total price is visible
        await expect(orderDetailsPage.orderDetailsPageOrderSummaryTotalPrice).toBeVisible();
    }

}
export {OrderDetailsPageWebElementAssert};