"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
import {TestDataGenerator} from "../../utilities/test.data.generator.mjs";
import {Logger} from "../../utilities/logger.mjs";

class AddNewAddressModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._addNewAddressModalFullNameInputField = page.locator("//input[@data-testid='first-name-input']");
        this._addNewAddressModalEmailInputField = page.locator("//input[@data-testid='email-input']");
        this._addNewAddressModalStreetInputField = page.locator("//input[@data-testid='street-address-input']");
        this._addNewAddressModalCityInputField = page.locator("//input[@data-testid='city-input']");
        this._addNewAddressModalStateInputField = page.locator("//input[@data-testid='state-input']");
        this._addNewAddressModalCountryInputField = page.locator("//input[@data-testid='country-input']");
        this._addNewAddressModalPostCodeInputField = page.locator("//input[@data-testid='zip-code-input']");

        const testDataGenerator = new TestDataGenerator(page);

        //invalid user address input data - no singular input
        this._noAddressFullName = "";
        this._noAddressEmail = "";
        this._noAddressStreet = "";
        this._noAddressCity = "";
        this._noAddressState = "";
        this._noAddressCountry = "";
        this._noAddressPostCode = "";

        //invalid user address input data - too short singular input
        this._tooShortAddressFullName = "R S"; //3 chars
        this._tooShortAddressEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); // 1 char -> name, domain
        this._tooShortAddressStreet = "4 F"; //3 chars
        this._tooShortAddressCity = "X"; // 1 char
        this._tooShortAddressState = "W"; // 1 char
        this._tooShortAddressCountry = "C"; // 1 char
        this._tooShortAddressPostCode = 4536; // 4 digits

    }

    //invalid new address data input methods - no singular input
    async inputNoNewAddressFullNameIntoFullNameInputField(){
        const noNewAddressFullName = this._noAddressFullName;
        Logger.info("No new user address full name: " + noNewAddressFullName);
        await this._addNewAddressModalFullNameInputField.fill(noNewAddressFullName);
    }
    async inputNoNewAddressEmailIntoEmailInputField(){
        const noNewAddressEmail = this._noAddressEmail;
        Logger.info("No new user address email: " + noNewAddressEmail);
        await this._addNewAddressModalEmailInputField.fill(noNewAddressEmail);
    }
    async inputNoNewAddressStreetIntoStreetInputField(){
        const noNewAddressStreet = this._noAddressStreet;
        Logger.info("No new user address street: " + noNewAddressStreet);
        await this._addNewAddressModalStreetInputField.fill(noNewAddressStreet);
    }
    async inputNoNewAddressCityIntoCityInputField(){
        const noNewAddressCity = this._noAddressCity;
        Logger.info("No new user address city: " + noNewAddressCity);
        await this._addNewAddressModalCityInputField.fill(noNewAddressCity);
    }
    async inputNoNewAddressStateIntoStateInputField(){
        const noNewAddressState = this._noAddressState;
        Logger.info("No new user address state: " + noNewAddressState);
        await this._addNewAddressModalStateInputField.fill(noNewAddressState);
    }
    async inputNoNewAddressCountryIntoCountryInputField(){
        const noNewAddressCountry = this._noAddressCountry;
        Logger.info("No new user address country: " + noNewAddressCountry);
        await this._addNewAddressModalCountryInputField.fill(noNewAddressCountry);
    }
    async inputNoNewAddressPostCodeIntoPostCodeInputField(){
        const noNewAddressPostCode = this._noAddressPostCode;
        Logger.info("No new user address post code: " + noNewAddressPostCode);
        await this._addNewAddressModalPostCodeInputField.fill(noNewAddressPostCode);
    }

    //invalid new address data input methods - too short singular input
    async inputTooShortNewAddressFullNameIntoFullNameInputField(){
        const tooShortNewAddressFullName = this._tooShortAddressFullName;
        Logger.info("Too short new user address full name: " + tooShortNewAddressFullName);
        await this._addNewAddressModalFullNameInputField.fill(tooShortNewAddressFullName);
    }
    async inputTooShortNewAddressEmailIntoEmailInputField(){
        const tooShortNewAddressEmail = this._tooShortAddressEmail;
        Logger.info("Too short new user address email: " + tooShortNewAddressEmail);
        await this._addNewAddressModalEmailInputField.fill(tooShortNewAddressEmail);
    }
    async inputTooShortNewAddressStreetIntoStreetInputField(){
        const tooShortNewAddressStreet = this._tooShortAddressStreet;
        Logger.info("Too short new user address street: " + tooShortNewAddressStreet);
        await this._addNewAddressModalStreetInputField.fill(tooShortNewAddressStreet);
    }
    async inputTooShortNewAddressCityIntoCityInputField(){
        const tooShortNewAddressCity = this._tooShortAddressCity;
        Logger.info("Too short new user address city: " + tooShortNewAddressCity);
        await this._addNewAddressModalCityInputField.fill(tooShortNewAddressCity);
    }
    async inputTooShortNewAddressStateIntoStateInputField(){
        const tooShortNewAddressState = this._tooShortAddressState;
        Logger.info("Too short new user address state: " + tooShortNewAddressState);
        await this._addNewAddressModalStateInputField.fill(tooShortNewAddressState);
    }
    async inputTooShortNewAddressCountryIntoCountryInputField(){
        const tooShortNewAddressCountry = this._tooShortAddressCountry;
        Logger.info("Too short new user address country: " + tooShortNewAddressCountry);
        await this._addNewAddressModalCountryInputField.fill(tooShortNewAddressCountry);
    }
    async inputTooShortNewAddressPostCodeIntoPostCodeInputField(){
        const tooShortNewAddressPostCode = this._tooShortAddressPostCode;
        Logger.info("Too short new user address post code: " + tooShortNewAddressPostCode);
        await this._addNewAddressModalPostCodeInputField.fill(String(tooShortNewAddressPostCode));
    }

}
export {AddNewAddressModalInvalidScenarios};