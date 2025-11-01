"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {Logger} from "../utilities/logger.mjs";

class CheckoutPageNoSingularInput extends BasePage{

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

        //invalid checkout shipping address input data - no singular input
        this._noCheckoutShipAddressFullName = "";
        this._noCheckoutShipAddressEmail = "";
        this._noCheckoutShipAddressCity = "";
        this._noCheckoutShipAddressState = "";
        this._noCheckoutShipAddress = "";
        this._noCheckoutShipAddressPostCode = "";
        this._noCheckoutShipAddressCountry = "";

        //invalid checkout credit card input data - no singular input
        this._noCheckoutCreditCardNumber = "";
        this._noCheckoutCreditCardName = "";
        this._noCheckoutCreditCardExpMonth = "";
        this._noCheckoutCreditCardExpYear = "";
        this._noCheckoutCreditCardCVV = "";

    }

    //invalid checkout page shipping address data input methods - no singular input
    async inputNoShipAddressFullNameIntoShipAddressFullNameInputField(){
        const noShipAddressFullName = this._noCheckoutShipAddressFullName;
        Logger.info("No user shipping address full name: " + noShipAddressFullName);
        await this._checkoutPageShipAddressFullNameInputField.fill(noShipAddressFullName);
    }
    async inputNoShipAddressEmailIntoShipAddressEmailInputField(){
        const noShipAddressEmail = this._noCheckoutShipAddressEmail;
        Logger.info("No user shipping address email: " + noShipAddressEmail);
        await this._checkoutPageShipAddressEmailInputField.fill(noShipAddressEmail);
    }
    async inputNoShipAddressCityIntoShipAddressCityInputField(){
        const noShipAddressCity = this._noCheckoutShipAddressCity;
        Logger.info("No user shipping address city: " + noShipAddressCity);
        await this._checkoutPageShipAddressCityInputField.fill(noShipAddressCity);
    }
    async inputNoShipAddressStateIntoShipAddressStateInputField(){
        const noShipAddressState = this._noCheckoutShipAddressState;
        Logger.info("No user shipping address state: " + noShipAddressState);
        await this._checkoutPageShipAddressStateInputField.fill(noShipAddressState);
    }
    async inputNoShipAddressIntoShipAddressInputField(){
        const noShipAddress = this._noCheckoutShipAddress;
        Logger.info("No user shipping address: " + noShipAddress);
        await this._checkoutPageShipAddressInputField.fill(noShipAddress);
    }
    async inputNoShipAddressPostCodeIntoShipAddressPostCodeInputField(){
        const noShipAddressPostCode = this._noCheckoutShipAddressPostCode;
        Logger.info("No user shipping address post code: " + noShipAddressPostCode);
        await this._checkoutPageShipAddressPostCodeInputField.fill(noShipAddressPostCode);
    }
    async inputNoShipAddressCountryIntoShipAddressCountryInputField(){
        const noShipAddressCountry = this._noCheckoutShipAddressCountry;
        Logger.info("No user shipping address country: " + noShipAddressCountry);
        await this._checkoutPageShipAddressCountryInputField.fill(noShipAddressCountry);
    }

    //invalid checkout credit card input data methods - no singular input
    async inputNoCreditCardNumberIntoCreditCardNumberInputField(){
        const noCreditCardNumber = this._noCheckoutCreditCardNumber;
        Logger.info("No user credit card number: " + noCreditCardNumber);
        await this._checkoutPagePayMethodCardNumberInputField.fill(noCreditCardNumber);
    }
    async inputNoCreditCardNameIntoCreditCardNameInputField(){
        const noCreditCardName = this._noCheckoutCreditCardName;
        Logger.info("No user credit card name: " + noCreditCardName);
        await this._checkoutPagePayMethodCardholderInputField.fill(noCreditCardName);
    }
    async inputNoCreditCardExpMonthIntoCreditCardExpMonthInputField(){
        const noCreditCardExpMonth = this._noCheckoutCreditCardExpMonth;
        Logger.info("No user credit card expiration month: " + noCreditCardExpMonth);
        await this._checkoutPagePayMethodExpDateMonthInputField.fill(noCreditCardExpMonth);
    }
    async inputNoCreditCardExpYearIntoCreditCardExpYearInputField(){
        const noCreditCardExpYear = this._noCheckoutCreditCardExpYear;
        Logger.info("No user credit card expiration year: " + noCreditCardExpYear);
        await this._checkoutPagePayMethodExpDateYearInputField.fill(noCreditCardExpYear);
    }
    async inputNoCreditCardCVVIntoCreditCardCVVInputField(){
        const noCreditCardCVV = this._noCheckoutCreditCardCVV;
        Logger.info("No user credit card CVV number: " + noCreditCardCVV);
        await this._checkoutPagePayMethodExpDateMonthInputField.fill(noCreditCardCVV);
    }

}
export {CheckoutPageNoSingularInput};