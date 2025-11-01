"use strict"

import {CheckoutPage} from "../../pages/checkout.page.mjs";
import {expect} from "@playwright/test";

class CheckoutPageWebElementAsserts{

    //checkout page web element assert test method
    async isCheckoutPageWebElementVisible(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page back to cart button is visible
        await expect(checkoutPage.checkoutPageBackToCartButton).toBeVisible();
        //assert the checkout page title is visible
        await expect(checkoutPage.checkoutPageTitle).toBeVisible();
        //shipping address section
        //assert the checkout page shipping address section title is visible
        await expect(checkoutPage.checkoutPageShipAddressSectionTitle).toBeVisible();
        //assert the checkout page shipping address data is visible
        await expect(checkoutPage.checkoutPageShipAddressData).toBeVisible();
        //assert the checkout page shipping address change link is visible
        await expect(checkoutPage.checkoutPageShipAddressChangeLink).toBeVisible();
        //payment method
        //assert the checkout page payment method section title is visible
        await expect(checkoutPage.checkoutPagePayMethodTitle).toBeVisible();
        //list elements
        //assert the checkout page payment method buttons are visible (as a list)
        const checkoutPagePayMethodButtons = checkoutPage.checkoutPagePayMethodButtonElement;
        const checkoutPagePayMethodButtonCount = await checkoutPagePayMethodButtons.count();
        for (let i = 0; i < checkoutPagePayMethodButtonCount; i++) {
            await expect(checkoutPagePayMethodButtons.nth(i)).toBeVisible();
        }
        //order summary section
        //assert the checkout page order summary section title is visible
        await expect(checkoutPage.checkoutPageOrderSummarySectionTitle).toBeVisible();
        //product table (list elements)
        //assert the checkout page product images are visible (as a list)
        const checkoutPageProductImages = checkoutPage.checkoutPageProductImgElement;
        const checkoutPageProductImagesCount = await checkoutPageProductImages.count();
        for (let i = 0; i < checkoutPageProductImagesCount; i++) {
            await expect(checkoutPageProductImages.nth(i)).toBeVisible();
        }
        //assert the checkout page product names are visible (as a list)
        const checkoutPageProductNames = checkoutPage.checkoutPageProductNameElement;
        const checkoutPageProductNamesCount = await checkoutPageProductNames.count();
        for (let i = 0; i < checkoutPageProductNamesCount; i++) {
            await expect(checkoutPageProductNames.nth(i)).toBeVisible();
        }
        //assert the checkout page product quantities are visible (as a list)
        const checkoutPageProductQuantities = checkoutPage.checkoutPageProductQtyElement;
        const checkoutPageProductQtyCount = await checkoutPageProductQuantities.count();
        for (let i = 0; i < checkoutPageProductQtyCount; i++) {
            await expect(checkoutPageProductQuantities.nth(i)).toBeVisible();
        }
        //assert the checkout page product unit prices are visible (as a list)
        const checkoutPageProductUnitPrices = checkoutPage.checkoutPageProductUnitPriceElement;
        const checkoutPageProductUnitPricesCount = await checkoutPageProductUnitPrices.count();
        for (let i = 0; i < checkoutPageProductUnitPricesCount; i++) {
            await expect(checkoutPageProductUnitPrices.nth(i)).toBeVisible();
        }
        //order summary
        //assert the checkout page order subtotal price subtext is visible
        await expect(checkoutPage.checkoutPageOrderSubtotalSubtext).toBeVisible();
        //assert the checkout page order subtotal price is visible
        await expect(checkoutPage.checkoutPageOrderSubtotalPrice).toBeVisible();
        //assert the checkout page order shipping price subtext is visible
        await expect(checkoutPage.checkoutPageOrderShippingSubtext).toBeVisible();
        //assert the checkout page order shipping price is visible
        await expect(checkoutPage.checkoutPageOrderShippingPrice).toBeVisible();
        //assert the checkout page order total price subtext is visible
        await expect(checkoutPage.checkoutPageOrderTotalSubtext).toBeVisible();
        //assert the checkout page order total price is visible
        await expect(checkoutPage.checkoutPageOrderTotalPrice).toBeVisible();
        //buttons
        //assert the checkout page place order button is visible
        await expect(checkoutPage.checkoutPagePlaceOrderButton).toBeVisible();
        //assert the checkout page continue shopping button is visible
        await expect(checkoutPage.checkoutPageContinueShoppingButton).toBeVisible();
    }

    //checkout page (shipping address input form) web element assert test method
    async isCheckoutPageShipAddressInputFormWebElementVisible(page){
        const checkoutPage = new CheckoutPage(page);
        //assert the checkout page shipping address full name subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressFullNameSubtext).toBeVisible();
        //assert the checkout page shipping address full name input field is visible
        await expect(checkoutPage.checkoutPageShipAddressFullNameInputField).toBeVisible();
        //assert the checkout page shipping address email subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressEmailSubtext).toBeVisible();
        //assert the checkout page shipping address email input field is visible
        await expect(checkoutPage.checkoutPageShipAddressEmailInputField).toBeVisible();
        //assert the checkout page shipping address city subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressCitySubtext).toBeVisible();
        //assert the checkout page shipping address city input field is visible
        await expect(checkoutPage.checkoutPageShipAddressCityInputField).toBeVisible();
        //assert the checkout page shipping address state subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressStateSubtext).toBeVisible();
        //assert the checkout page shipping address state input field is visible
        await expect(checkoutPage.checkoutPageShipAddressStateInputField).toBeVisible();
        //assert the checkout page shipping address subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressSubtext).toBeVisible();
        //assert the checkout page shipping address input field is visible
        await expect(checkoutPage.checkoutPageShipAddressInputField).toBeVisible();
        //assert the checkout page shipping address post code subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressPostCodeSubtext).toBeVisible();
        //assert the checkout page shipping address post code input field is visible
        await expect(checkoutPage.checkoutPageShipAddressPostCodeInputField).toBeVisible();
        //assert the checkout page shipping address country subtext is visible
        await expect(checkoutPage.checkoutPageShipAddressCountrySubtext).toBeVisible();
        //assert the checkout page shipping address country input field is visible
        await expect(checkoutPage.checkoutPageShipAddressCountryInputField).toBeVisible();
        //assert the checkout page shipping address cancel button is visible
        await expect(checkoutPage.checkoutPageShipAddressCancelBtn).toBeVisible();
        //assert the checkout page shipping address save address button is visible
        await expect(checkoutPage.checkoutPageShipAddressSaveAddressBtn).toBeVisible();
        //assert the checkout page shipping address input form section required tags are visible (as a list)
        const checkoutPageShipAddressRequiredTags = checkoutPage.checkoutPagePayMethodRequiredTagElement;
        const checkoutPageShipAddressRequiredTagCount = await checkoutPageShipAddressRequiredTags.count();
        for (let i = 0; i < checkoutPageShipAddressRequiredTagCount; i++) {
            await expect(checkoutPageShipAddressRequiredTags.nth(i)).toBeVisible();
        }
    }

    //checkout page (credit/debit section) web element assert test method
    async isCheckoutPageCreditSectionWebElementVisible(page){
        const checkoutPage = new CheckoutPage(page);
        //credit/debit card section
        //assert the checkout page payment method section we accept subtext is visible
        await expect(checkoutPage.checkoutPagePayMethodWeAcceptSubtext).toBeVisible();
        //list elements
        //assert the checkout page payment method section card icons are visible (as a list)
        const checkoutPagePayMethodCardIcons = checkoutPage.checkoutPagePayMethodCardIconElement;
        const checkoutPagePayMethodCardIconCount = await checkoutPagePayMethodCardIcons.count();
        for (let i = 0; i < checkoutPagePayMethodCardIconCount; i++) {
            await expect(checkoutPagePayMethodCardIcons.nth(i)).toBeVisible();
        }
        //assert the checkout page payment method section required tags are visible (as a list)
        const checkoutPagePayMethodRequiredTags = checkoutPage.checkoutPagePayMethodRequiredTagElement;
        const checkoutPagePayMethodRequiredTagCount = await checkoutPagePayMethodRequiredTags.count();
        for (let i = 0; i < checkoutPagePayMethodRequiredTagCount; i++) {
            await expect(checkoutPagePayMethodRequiredTags.nth(i)).toBeVisible();
        }
        //singular elements
        //assert the checkout page payment method section credit card number subtext is visible
        await expect(checkoutPage.checkoutPagePayMethodCardNumberSubtext).toBeVisible();
        //assert the checkout page payment method section credit card number hint is visible
        await expect(checkoutPage.checkoutPagePayMethodCardNumberHint).toBeVisible();
        //assert the checkout page payment method section credit card number input field is visible
        await expect(checkoutPage.checkoutPagePayMethodCardNumberInputField).toBeVisible();
        //assert the checkout page payment method section credit card holder subtext is visible
        await expect(checkoutPage.checkoutPagePayMethodCardholderSubtext).toBeVisible();
        //assert the checkout page payment method section credit card holder input field is visible
        await expect(checkoutPage.checkoutPagePayMethodCardholderInputField).toBeVisible();
        //assert the checkout page payment method section credit card expiration date subtext is visible
        await expect(checkoutPage.checkoutPagePayMethodExpDateSubtext).toBeVisible();
        //assert the checkout page payment method section credit card expiration date month input field is visible
        await expect(checkoutPage.checkoutPagePayMethodExpDateMonthInputField).toBeVisible();
        //assert the checkout page payment method section credit card expiration date year input field is visible
        await expect(checkoutPage.checkoutPagePayMethodExpDateYearInputField).toBeVisible();
        //assert the checkout page payment method section credit card CVV subtext is visible
        await expect(checkoutPage.checkoutPagePayMethodCVVSubtext).toBeVisible();
        //assert the checkout page payment method section credit card CVV input field is visible
        await expect(checkoutPage.checkoutPagePayMethodCVVInputField).toBeVisible();
    }

    //checkout page (net banking section) web element assert test method
    async isCheckoutPageNetBankingWebElementVisible(page){
        const checkoutPage = new CheckoutPage(page);
        //credit/debit card section
        //assert the checkout page net banking section select bank text is visible
        await expect(checkoutPage.checkoutPageNetBankingSectionSelectBankText).toBeVisible();
        //list elements
        //assert the checkout page net banking section bank buttons are visible (as a list)
        const checkoutPageNetBankingBankButtons = checkoutPage.checkoutPageNetBankingBankBtnElement;
        const checkoutPageNetBankingBankBtnCount = await checkoutPageNetBankingBankButtons.count();
        for (let i = 0; i < checkoutPageNetBankingBankBtnCount; i++) {
            await expect(checkoutPageNetBankingBankButtons.nth(i)).toBeVisible();
        }
        //singular elements
        //assert the checkout page net banking section other banks dropdown button is visible
        await expect(checkoutPage.checkoutPageNetBankingOtherBanksDropdownBtn).toBeVisible();
    }

    //checkout page (cash delivery section) web element assert test method
    async isCheckoutPageCashDeliveryWebElementVisible(page){
        const checkoutPage = new CheckoutPage(page);
        //credit/debit card section
        //assert the checkout page cash delivery section icon is visible
        await expect(checkoutPage.checkoutPageCashOnDeliveryIcon).toBeVisible();
        //assert the checkout page cash delivery section title is visible
        await expect(checkoutPage.checkoutPageCashOnDeliveryTitle).toBeVisible();
        //assert the checkout page cash delivery section description is visible
        await expect(checkoutPage.checkoutPageCashOnDeliveryDesc).toBeVisible();
        //assert the checkout page cash delivery section shipping address icon is visible
        await expect(checkoutPage.checkoutPageCashOnDeliveryDeliveryShipAddressIcon).toBeVisible();
        //assert the checkout page cash delivery section shipping address data is visible
        await expect(checkoutPage.checkoutPageCashOnDeliveryDeliveryShipAddressData).toBeVisible();
        //assert the checkout page cash delivery section shipping address link is visible
        await expect(checkoutPage.checkoutPageCashOnDeliveryDeliveryChangeShipAddressLink).toBeVisible();
    }

}
export {CheckoutPageWebElementAsserts};