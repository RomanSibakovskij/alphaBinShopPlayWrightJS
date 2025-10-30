"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
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

}
export {AddNewAddressModalInvalidScenarios};