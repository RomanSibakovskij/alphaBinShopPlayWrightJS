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
        this._invalidCheckoutShipAddressEmail = "safdfsdfakemail.com"; // missing '@'
        this._invalidCheckoutShipAddressCityFormat = "#@@%$#^"; // special symbols only
        this._invalidCheckoutShipAddressStateFormat = "!@#$%#$^"; // special symbols only
        this._invalidCheckoutShipAddressFormat = "(&*^*&^"; // special symbols only
        this._invalidCheckoutShipAddressPostCodeFormat = "&^*^%"; // special symbols only
        this._invalidCheckoutShipAddressCountryFormat = "@#$%"; // special symbols only

        //invalid checkout credit card input data - invalid singular input format
        this._invalidCheckoutCreditCardNumberFormat = "%^$%^&*^%$#$%^&*"; // special symbols only
        this._invalidCheckoutCreditCardNameFormat = "&%^ &^*&"; // special symbols only
        this._invalidCheckoutCreditCardExpMonthFormat = "^&"; // special symbols only
        this._invalidCheckoutCreditCardExpYearFormat = "&*%$"; // special symbols only

    }

    //invalid checkout page shipping address data input methods - invalid singular input
    async inputInvalidShipAddressFullNameFormatIntoShipAddressFullNameInputField(){
        const invalidShipAddressFullNameFormat = this._invalidCheckoutShipAddressFullNameFormat;
        Logger.info("Invalid user shipping address full name format: " + invalidShipAddressFullNameFormat);
        await this._checkoutPageShipAddressFullNameInputField.fill(invalidShipAddressFullNameFormat);
    }
    async inputInvalidShipAddressEmailFormatIntoShipAddressEmailInputField(){
        const invalidShipAddressEmailFormat = this._invalidCheckoutShipAddressEmail;
        Logger.info("Invalid user shipping address email format: " + invalidShipAddressEmailFormat);
        await this._checkoutPageShipAddressEmailInputField.fill(invalidShipAddressEmailFormat);
    }
    async inputInvalidShipAddressCityFormatIntoShipAddressCityInputField(){
        const invalidShipAddressCityFormat = this._invalidCheckoutShipAddressCityFormat;
        Logger.info("Invalid user shipping address city format: " + invalidShipAddressCityFormat);
        await this._checkoutPageShipAddressCityInputField.fill(invalidShipAddressCityFormat);
    }
    async inputInvalidShipAddressStateFormatIntoShipAddressStateInputField(){
        const invalidShipAddressStateFormat = this._invalidCheckoutShipAddressStateFormat;
        Logger.info("Invalid user shipping address state format: " + invalidShipAddressStateFormat);
        await this._checkoutPageShipAddressStateInputField.fill(invalidShipAddressStateFormat);
    }
    async inputInvalidShipAddressFormatIntoShipAddressInputField(){
        const invalidShipAddressFormat = this._invalidCheckoutShipAddressFormat;
        Logger.info("Invalid user shipping address format: " + invalidShipAddressFormat);
        await this._checkoutPageShipAddressInputField.fill(invalidShipAddressFormat);
    }
    async inputInvalidShipAddressPostCodeFormatIntoShipAddressPostCodeInputField(){
        const invalidShipAddressPostCodeFormat = this._invalidCheckoutShipAddressPostCodeFormat;
        Logger.info("Invalid user shipping address post code format: " + invalidShipAddressPostCodeFormat);
        await this._checkoutPageShipAddressPostCodeInputField.fill(invalidShipAddressPostCodeFormat);
    }
    async inputInvalidShipAddressCountryFormatIntoShipAddressCountryInputField(){
        const invalidShipAddressCountryFormat = this._invalidCheckoutShipAddressCountryFormat;
        Logger.info("Invalid user shipping address country format: " + invalidShipAddressCountryFormat);
        await this._checkoutPageShipAddressCountryInputField.fill(invalidShipAddressCountryFormat);
    }

    //invalid checkout credit card input data methods - invalid singular input
    async inputInvalidCreditCardNumberFormatIntoCreditCardNumberInputField(){
        const invalidCreditCardNumberFormat = this._invalidCheckoutCreditCardNumberFormat;
        Logger.info("Invalid user credit card number format: " + invalidCreditCardNumberFormat);
        await this._checkoutPagePayMethodCardNumberInputField.fill(String(invalidCreditCardNumberFormat));
    }
    async inputInvalidCreditCardNameFormatIntoCreditCardNameInputField(){
        const invalidCreditCardNameFormat = this._invalidCheckoutCreditCardNameFormat;
        Logger.info("Invalid user credit card name format: " + invalidCreditCardNameFormat);
        await this._checkoutPagePayMethodCardholderInputField.fill(invalidCreditCardNameFormat);
    }
    async inputInvalidCreditCardExpMonthFormatIntoCreditCardExpMonthInputField(){
        const invalidCreditCardExpMonthFormat = this._invalidCheckoutCreditCardExpMonthFormat;
        Logger.info("Invalid user credit card expiration month format: " + invalidCreditCardExpMonthFormat);
        await this._checkoutPagePayMethodExpDateMonthInputField.fill(invalidCreditCardExpMonthFormat);
    }
    async inputInvalidCreditCardExpYearFormatIntoCreditCardExpYearInputField(){
        const invalidCreditCardExpYearFormat = this._invalidCheckoutCreditCardExpYearFormat;
        Logger.info("Invalid user credit card expiration year format: " + invalidCreditCardExpYearFormat);
        await this._checkoutPagePayMethodExpDateMonthInputField.fill(invalidCreditCardExpYearFormat);
    }

}
export {CheckoutPageInvalidSingularInput};