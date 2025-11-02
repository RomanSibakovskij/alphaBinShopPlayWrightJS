"use strict"

import {CheckoutPage} from "../../pages/checkout.page.mjs";
import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";

class CheckoutPageTextElementAsserts{

    //checkout page text element assert test method
    async isCheckoutPageTextAsExpected(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page back to cart button text is as expected
        const checkoutPageBackToCartBtnText = await checkoutPage.getBackToCartBtnText();
        expect(checkoutPageBackToCartBtnText).toBe("Back to cart");
        //assert the checkout page title is as expected
        const checkoutPageTitle = await checkoutPage.getCheckoutPageTitle();
        expect(checkoutPageTitle).toBe("Checkout");
        //shipping address section
        //assert the checkout page shipping address section title is as expected
        const checkoutPageShipAddressSectionTitle = await checkoutPage.getCheckoutPageShipAddressSectionTitle();
        expect(checkoutPageShipAddressSectionTitle).toBe("Shipping Address");
        //assert the checkout page shipping address section change link text is as expected
        const checkoutPageShipAddressChangeLinkText = await checkoutPage.getCheckoutPageShipAddressChangeLinkText();
        expect(checkoutPageShipAddressChangeLinkText).toBe("Change");
        //payment method
        //assert the checkout page payment section title is as expected
        const checkoutPagePaymentSectionTitle = await checkoutPage.getCheckoutPagePayMethodTitle();
        expect(checkoutPagePaymentSectionTitle).toBe("Payment Method");
        //list elements
        //assert home page category explore more link texts are as expected (as a list)
        const checkoutPagePayMethodBtnTexts = await checkoutPage.getCheckoutPagePayMethodBtnText();
        const expectedCheckoutPagePayMethodBtnTexts  = ["Credit Card", "Debit Card", "Net Banking", "Cash on Delivery"];
        expect(checkoutPagePayMethodBtnTexts).toEqual(expectedCheckoutPagePayMethodBtnTexts);
        //order summary section
        //assert the checkout page order summary section title is as expected
        const checkoutPageOrderSummarySectionTitle = await checkoutPage.getCheckoutPageOrderSummarySectionTitle();
        expect(checkoutPageOrderSummarySectionTitle).toBe("Order Summary");
        //assert the checkout page order subtotal price subtext is as expected
        const checkoutPageOrderSubtotalSubtext = await checkoutPage.getCheckoutPageOrderSubtotalSubtext();
        expect(checkoutPageOrderSubtotalSubtext).toBe("Subtotal");
        //assert the checkout page order shipping price subtext is as expected
        const checkoutPageOrderShippingSubtext = await checkoutPage.getCheckoutPageOrderShippingSubtext();
        expect(checkoutPageOrderShippingSubtext).toBe("Shipping");
        //assert the checkout page order total price subtext is as expected
        const checkoutPageOrderTotalSubtext = await checkoutPage.getCheckoutPageOrderTotalSubtext();
        expect(checkoutPageOrderTotalSubtext).toBe("Total");
        //buttons
        //assert the checkout page place order buttons is as expected
        const checkoutPagePlaceOrderBtnText = await checkoutPage.getCheckoutPagePlaceOrderButtonText();
        expect(checkoutPagePlaceOrderBtnText).toBe("Place Order");
        //assert the checkout page continue shopping buttons is as expected
        const checkoutPageContinueShoppingBtnText = await checkoutPage.getCheckoutPageContinueShoppingButtonText();
        expect(checkoutPageContinueShoppingBtnText).toBe("Continue Shopping");
    }

    //checkout page (shipping address input form) text element assert test method
    async isCheckoutPageShipAddressInputFormTextAsExpected(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page shipping address full name subtext is as expected
        const checkoutPageShipAddressFullNameSubtext = await checkoutPage.getCheckoutPageShipAddressFullNameSubtext();
        //log the misspelling issue
        (checkoutPageShipAddressFullNameSubtext === "Full Name *") ? Logger.info("The full name subtext is spelled correctly.") : Logger.error(`The full name subtext isn't spelled correctly. Expected: 'Full Name *', actual: ${checkoutPageShipAddressFullNameSubtext}`);
        expect(checkoutPageShipAddressFullNameSubtext).toBe("First Name *");
        //assert the checkout page shipping address email subtext is as expected
        const checkoutPageShipAddressEmailSubtext = await checkoutPage.getCheckoutPageShipAddressEmailSubtext();
        expect(checkoutPageShipAddressEmailSubtext).toBe("Email *");
        //assert the checkout page shipping address city subtext is as expected
        const checkoutPageShipAddressCitySubtext = await checkoutPage.getCheckoutPageShipAddressCitySubtext();
        expect(checkoutPageShipAddressCitySubtext).toBe("City *");
        //assert the checkout page shipping address state subtext is as expected
        const checkoutPageShipAddressStateSubtext = await checkoutPage.getCheckoutPageShipAddressStateSubtext();
        expect(checkoutPageShipAddressStateSubtext).toBe("State *");
        //assert the checkout page shipping address subtext is as expected
        const checkoutPageShipAddressSubtext = await checkoutPage.getCheckoutPageShipAddressSubtext();
        expect(checkoutPageShipAddressSubtext).toBe("Street Address *");
        //assert the checkout page shipping address post code subtext is as expected
        const checkoutPageShipAddressPostCodeSubtext = await checkoutPage.getCheckoutPageShipAddressPostCodeSubtext();
        expect(checkoutPageShipAddressPostCodeSubtext).toBe("Zip Code *");
        //assert the checkout page shipping address country subtext is as expected
        const checkoutPageShipAddressCountrySubtext = await checkoutPage.getCheckoutPageShipAddressCountrySubtext();
        expect(checkoutPageShipAddressCountrySubtext).toBe("Country *");
        //buttons
        //assert the checkout page shipping address cancel button text is as expected
        const checkoutPageShipAddressCancelBtnText = await checkoutPage.getCheckoutPageShipAddressCancelBtnText();
        expect(checkoutPageShipAddressCancelBtnText).toBe("Cancel");
        //assert the checkout page shipping address save address button text is as expected
        const checkoutPageShipAddressSaveBtnText = await checkoutPage.getCheckoutPageShipAddressSaveAddressBtnText();
        expect(checkoutPageShipAddressSaveBtnText).toBe("Save Address");
    }

    //checkout page (credit/debit card section) text element assert test method
    async isCheckoutPageCreditTextAsExpected(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page payment method we accept subtext is as expected
        const checkoutPagePayMethodWeAcceptSubtext = await checkoutPage.getCheckoutPagePayMethodWeAcceptSubtext();
        expect(checkoutPagePayMethodWeAcceptSubtext).toBe("We Accept:");
        //assert the checkout page payment method credit card number subtext is as expected
        const checkoutPagePayMethodCredCardSubtext = await checkoutPage.getCheckoutPagePayMethodCardNumberSubtext();
        expect(checkoutPagePayMethodCredCardSubtext).toBe("Card Number *");
        //assert the checkout page payment method credit card holder number subtext is as expected
        const checkoutPagePayMethodCredCardHolderSubtext = await checkoutPage.getCheckoutPagePayMethodCardholderSubtext();
        expect(checkoutPagePayMethodCredCardHolderSubtext).toBe("Cardholder Name *");
        //assert the checkout page payment method credit card expiration date subtext is as expected
        const checkoutPagePayMethodCredCardExpDateSubtext = await checkoutPage.getCheckoutPagePayMethodExpDateSubtext();
        expect(checkoutPagePayMethodCredCardExpDateSubtext).toBe("Expiration Date *");
        //assert the checkout page payment method credit card CVV subtext is as expected
        const checkoutPagePayMethodCredCardCVVSubtext = await checkoutPage.getCheckoutPagePayMethodCVVSubtext();
        expect(checkoutPagePayMethodCredCardCVVSubtext).toBe("CVV *");
    }

    //checkout page (net banking section) text element assert test method
    async isCheckoutPageNetBankingTextAsExpected(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page net banking section select bank text is as expected
        const checkoutPageNetBankingSectionSelectBankText = await checkoutPage.getCheckoutPageNetBankingSectionSelectBankText();
        expect(checkoutPageNetBankingSectionSelectBankText).toBe("Select your bank from the options below");
        //assert the checkout page net banking section other banks dropdown button text is as expected
        const checkoutPageNetBankingOtherBanksDropdownBtnText = await checkoutPage.getCheckoutPageNetBankingOtherBanksDropdownBtnText();
        expect(checkoutPageNetBankingOtherBanksDropdownBtnText).toBe("Other Banks");
    }

    //checkout page (cash delivery section) text element assert test method
    async isCheckoutPageCashDeliveryTextAsExpected(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page cash delivery section title is as expected
        const checkoutPageCashDeliverySectionTitle = await checkoutPage.getCheckoutPageCashOnDeliveryTitle();
        await expect(checkoutPageCashDeliverySectionTitle).toBe("Cash on Delivery");
        //assert the checkout page cash delivery section description is as expected
        const checkoutPageCashDeliveryDesc = await checkoutPage.getCheckoutPageCashOnDeliveryDesc();
        await expect(checkoutPageCashDeliveryDesc).toBe("Pay when your order is delivered");
        //assert the checkout page cash delivery section shipping address change link text is as expected
        const checkoutPageCashOnDeliveryChangeShipAddressLinkText = await checkoutPage.getCheckoutPageCashOnDeliveryChangeShipAddressLink();
        await expect(checkoutPageCashOnDeliveryChangeShipAddressLinkText).toBe("Change");
    }

}
export {CheckoutPageTextElementAsserts};