"use strict"

import {OrderDetailsPage} from "../../pages/order.details.page.mjs";
import {expect} from "@playwright/test";

class OrderDetailsPageTextElementAssert{

    //order details page text element assert test method
    async isOrderDetailsPageTextElementAsExpected(page){
        const orderDetailsPage = new OrderDetailsPage(page);
        //await the order details page back to home button text is as expected
        const orderDetailsPageBackToHomeBtnText = await orderDetailsPage.getOrderDetailsPageBackToHomeBtnText();
        expect(orderDetailsPageBackToHomeBtnText).toBe("Back to home");
        //await the order details page title is as expected
        const orderDetailsPageTitle = await orderDetailsPage.getOrderDetailsPageTitle();
        expect(orderDetailsPageTitle).toBe("Order Details");
        //order confirm section
        //await the order details page order confirm section title is as expected
        const orderDetailsPageOrderConfirmTitle = await orderDetailsPage.getOrderDetailsPageOrderConfirmTitle();
        expect(orderDetailsPageOrderConfirmTitle).toBe("Thank You");
        //await the order details page order confirm message is as expected
        const orderDetailsPageOrderConfirmMessage = await orderDetailsPage.getOrderDetailsPageOrderConfirmMessage();
        expect(orderDetailsPageOrderConfirmMessage).toBe("Your order was placed successfully");
        //order information section
        //await the order details page order information section title is as expected
        const orderDetailsPageOrderInfoSectionTitle = await orderDetailsPage.getOrderDetailsPageOrderInfoSectionTitle();
        expect(orderDetailsPageOrderInfoSectionTitle).toBe("Order Information");
        //await the order details page order information section order confirmation title is as expected
        const orderDetailsPageOrderInfoConfirmTitle = await orderDetailsPage.getOrderDetailsPageOrderInfoOrderConfirmTitle();
        expect(orderDetailsPageOrderInfoConfirmTitle).toBe("Your order is confirmed");
        //await the order details page order information section order confirmation message is as expected
        const orderDetailsPageOrderInfoConfirmMsg = await orderDetailsPage.getOrderDetailsPageOrderInfoOrderConfirmMsg();
        expect(orderDetailsPageOrderInfoConfirmMsg).toBe("We are pleased to confirm that your order has been successfully processed and is now being prepared for shipment.");
        //shipping details section
        //await the order details page shipping address section title is as expected
        const orderDetailsPageShipDetailsSectionTitle = await orderDetailsPage.getOrderDetailsPageShippingDetailsSectionTitle();
        expect(orderDetailsPageShipDetailsSectionTitle).toBe("Shipping Details");
        //await the order details page shipping address section email subtext is as expected
        const orderDetailsPageShipDetailsSectionEmailSubtext = await orderDetailsPage.getOrderDetailsPageShippingDetailsEmailSubtext();
        expect(orderDetailsPageShipDetailsSectionEmailSubtext).toBe("Email");
        //await the order details page shipping address section payment method subtext is as expected
        const orderDetailsPageShipDetailsSectionPayMethodSubtext = await orderDetailsPage.getOrderDetailsPageShippingDetailsPayMethodSubtext();
        expect(orderDetailsPageShipDetailsSectionPayMethodSubtext).toBe("Payment Method");
        //await the order details page shipping address section delivery address subtext is as expected
        const orderDetailsPageShipDetailsSectionDeliveryAddressSubtext = await orderDetailsPage.getOrderDetailsPageShippingDetailsDeliveryAddressSubtext();
        expect(orderDetailsPageShipDetailsSectionDeliveryAddressSubtext).toBe("Delivery Address");
        //await the order details page continue shopping button text is as expected
        const orderDetailsPageContinueShopBtnText = await orderDetailsPage.getOrderDetailsPageContinueShoppingBtnText();
        expect(orderDetailsPageContinueShopBtnText).toBe("Continue Shopping");
        //order summary section
        //await the order details page order summary section title is as expected
        const orderDetailsPageOrderSummarySectionTitle = await orderDetailsPage.getOrderDetailsPageOrderSummarySectionTitle();
        expect(orderDetailsPageOrderSummarySectionTitle).toBe("Order Summary");
        //await the order details page order summary subtotal price subtext is as expected
        const orderDetailsPageOrderSummarySubtotalSubtext = await orderDetailsPage.getOrderDetailsPageOrderSummarySubtotalSubtext();
        expect(orderDetailsPageOrderSummarySubtotalSubtext).toBe("Subtotal");
        //await the order details page order summary shipping price subtext is as expected
        const orderDetailsPageOrderSummaryShippingSubtext = await orderDetailsPage.getOrderDetailsPageOrderSummaryShippingSubtext();
        expect(orderDetailsPageOrderSummaryShippingSubtext).toBe("Shipping");
        //await the order details page order summary total price subtext is as expected
        const orderDetailsPageOrderSummaryTotalSubtext = await orderDetailsPage.getOrderDetailsPageOrderSummaryTotalSubtext();
        expect(orderDetailsPageOrderSummaryTotalSubtext).toBe("Total");
    }

}
export {OrderDetailsPageTextElementAssert};