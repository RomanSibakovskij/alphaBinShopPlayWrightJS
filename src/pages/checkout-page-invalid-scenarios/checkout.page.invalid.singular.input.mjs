"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {Logger} from "../utilities/logger.mjs";

class CheckoutPageInvalidSingularInput extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._checkoutPageShipAddressFullNameInputField = page.locator("//input[@data-testid='checkout-first-name-input']");
        this._checkoutPageShipAddressEmailInputField = page.locator("//input[@data-testid='checkout-email-input']");
        this._checkoutPageShipAddressCityInputField = page.locator("//input[@data-testid='checkout-city-input']");
        this._checkoutPageShipAddressStateInputField = page.locator("//input[@data-testid='checkout-state-input']");
        this._checkoutPageShipAddressInputField = page.locator("//input[@data-testid='checkout-street-input']");
        this._checkoutPageShipAddressPostCodeInputField = page.locator("//input[@data-testid='checkout-zip-code-input']");
        this._checkoutPageShipAddressCountryInputField = page.locator("//input[@data-testid='checkout-country-input']");

        this._checkoutPagePayMethodCardNumberInputField = page.locator("//input[@data-testid='checkout-card-number-input']");
        this._checkoutPagePayMethodCardholderInputField = page.locator("//input[@data-testid='checkout-cardholder-name-input']");
        this._checkoutPagePayMethodExpDateMonthInputField = page.locator("//input[@data-testid='checkout-expiration-date-month-input']");
        this._checkoutPagePayMethodExpDateYearInputField = page.locator("//input[@data-testid='checkout-expiration-date-year-input']");
        this._checkoutPagePayMethodCVVInputField = page.locator("//input[@data-testid='checkout-cvv-input']");

        //invalid checkout shipping address input data - invalid singular input format
        this._invalidCheckoutShipAddressFullNameFormat = "!@# @%"; // special symbols only

    }

    //invalid checkout page shipping address data input methods - invalid singular input
    async inputInvalidShipAddressFullNameFormatIntoShipAddressFullNameInputField(){
        const invalidShipAddressFullNameFormat = this._invalidCheckoutShipAddressFullNameFormat;
        Logger.info("Invalid user shipping address full name format: " + invalidShipAddressFullNameFormat);
        await this._checkoutPageShipAddressFullNameInputField.fill(invalidShipAddressFullNameFormat);
    }

}
export {CheckoutPageInvalidSingularInput};