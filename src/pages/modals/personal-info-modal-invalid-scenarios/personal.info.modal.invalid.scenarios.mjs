"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
import {Logger} from "../../utilities/logger.mjs";

class PersonalInfoModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._personalInfoModalFirstNameInputField = page.locator("//input[@data-testid='my-profile-firstname-input']");
        this._personalInfoModalLastNameInputField = page.locator("//input[@data-testid='my-profile-lastname-input']");
        this._personalInfoModalEmailInputField = page.locator("//input[@data-testid='my-profile-email-input']");
        this._personalInfoModalPhoneNumberInputField = page.locator("//input[@data-testid='my-profile-contact-input']");

        //invalid edited input data - no singular input
        this._noEditedFirstName = "";
        this._noEditedLastName = "";
        this._noPhone = "";

        //invalid edited input data - too short singular input
        this._tooShortEditedFirstName = "S"; //1 char
        this._tooShortEditedLastName = "D"; //1 char

    }

    //invalid edited data input methods - no singular input
    async inputNoEditedFirstNameIntoFirstNameInputField(){
        const noEditedFirstName = this._noEditedFirstName;
        Logger.info("No edited user first name: " + noEditedFirstName);
        await this._personalInfoModalFirstNameInputField.fill(noEditedFirstName);
    }
    async inputNoEditedLastNameIntoLastNameInputField(){
        const noEditedLastName = this._noEditedLastName;
        Logger.info("No edited user last name: " + noEditedLastName);
        await this._personalInfoModalLastNameInputField.fill(noEditedLastName);
    }
    async inputNoPhoneIntoPhoneInputField(){
        const noPhone = this._noPhone;
        Logger.info("No user phone number: " + noPhone);
        await this._personalInfoModalPhoneNumberInputField.fill(noPhone);
    }

    //invalid edited data input methods - too short singular input
    async inputTooShortEditedFirstNameIntoFirstNameInputField(){
        const tooShortEditedFirstName = this._tooShortEditedFirstName;
        Logger.info("Too short edited user first name: " + tooShortEditedFirstName);
        await this._personalInfoModalFirstNameInputField.fill(tooShortEditedFirstName);
    }
    async inputTooShortEditedLastNameIntoLastNameInputField(){
        const tooShortEditedLastName = this._tooShortEditedLastName;
        Logger.info("Too short edited user last name: " + tooShortEditedLastName);
        await this._personalInfoModalLastNameInputField.fill(tooShortEditedLastName);
    }

}
export {PersonalInfoModalInvalidScenarios};