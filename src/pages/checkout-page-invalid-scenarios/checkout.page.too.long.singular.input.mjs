"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {TestDataGenerator} from "../utilities/test.data.generator.mjs";
import {Logger} from "../utilities/logger.mjs";

class CheckoutPageTooLongSingularInput extends BasePage{

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

        const testDataGenerator = new TestDataGenerator(page);

        //invalid checkout shipping address input data - too long singular input
        this._tooLongCheckoutShipAddressFullName = "Dsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg Csdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 201 chars
        this._tooLongCheckoutShipAddressEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); // 100 chars -> name, domain
        this._tooLongCheckoutShipAddressCity = "4Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfh"; // 100 chars
        this._tooLongCheckoutShipAddressState = "Dsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars

    }

    //invalid checkout page shipping address data input methods - too long singular input
    async inputTooLongShipAddressFullNameIntoShipAddressFullNameInputField(){
        const tooLongShipAddressFullName = this._tooLongCheckoutShipAddressFullName;
        Logger.info("Too long user shipping address full name: " + tooLongShipAddressFullName);
        await this._checkoutPageShipAddressFullNameInputField.fill(tooLongShipAddressFullName);
    }
    async inputTooLongShipAddressEmailIntoShipAddressEmailInputField(){
        const tooLongShipAddressEmail = this._tooLongCheckoutShipAddressEmail;
        Logger.info("Too long user shipping address email: " + tooLongShipAddressEmail);
        await this._checkoutPageShipAddressEmailInputField.fill(tooLongShipAddressEmail);
    }
    async inputTooLongShipAddressCityIntoShipAddressCityInputField(){
        const tooLongShipAddressCity = this._tooLongCheckoutShipAddressCity;
        Logger.info("Too long user shipping address city: " + tooLongShipAddressCity);
        await this._checkoutPageShipAddressCityInputField.fill(tooLongShipAddressCity);
    }
    async inputTooLongShipAddressStateIntoShipAddressStateInputField(){
        const tooLongShipAddressState = this._tooLongCheckoutShipAddressState;
        Logger.info("Too long user shipping address state: " + tooLongShipAddressState);
        await this._checkoutPageShipAddressStateInputField.fill(tooLongShipAddressState);
    }

}
export {CheckoutPageTooLongSingularInput};