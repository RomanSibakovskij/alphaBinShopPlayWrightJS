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
        this._tooShortPhone = "897865678"; //9 digits

        //invalid edited input data - too long singular input
        this._tooLongEditedFirstName = "Asdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //100 chars
        this._tooLongEditedLastName = "Jsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //100 chars
        this._tooLongPhone = "56645654321"; //11 digits

        //invalid edited input data - invalid singular input format
        this._invalidEditedFirstNameFormat = "@#!$@#%"; //special symbols only
        this._invalidEditedLastNameFormat = "!@$@#$%"; //special symbols only

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
    async inputTooShortPhoneIntoPhoneInputField(){
        const tooShortPhone = this._tooShortPhone;
        Logger.info("Too short user phone number: " + tooShortPhone);
        await this._personalInfoModalPhoneNumberInputField.fill(tooShortPhone);
    }

    //invalid edited data input methods - too long singular input
    async inputTooLongEditedFirstNameIntoFirstNameInputField(){
        const tooLongEditedFirstName = this._tooLongEditedFirstName;
        Logger.info("Too long edited user first name: " + tooLongEditedFirstName);
        await this._personalInfoModalFirstNameInputField.fill(tooLongEditedFirstName);
    }
    async inputTooLongEditedLastNameIntoLastNameInputField(){
        const tooLongEditedLastName = this._tooLongEditedLastName;
        Logger.info("Too short edited user last name: " + tooLongEditedLastName);
        await this._personalInfoModalLastNameInputField.fill(tooLongEditedLastName);
    }
    async inputTooLongPhoneIntoPhoneInputField(){
        const tooLongPhone = this._tooLongPhone;
        Logger.info("Too long user phone number: " + tooLongPhone);
        await this._personalInfoModalPhoneNumberInputField.fill(tooLongPhone);
    }

    //invalid edited data input methods - invalid singular input format
    async inputInvalidEditedFirstNameFormatIntoFirstNameInputField(){
        const invalidEditedFirstNameFormat = this._invalidEditedFirstNameFormat;
        Logger.info("Invalid edited user first name format: " + invalidEditedFirstNameFormat);
        await this._personalInfoModalFirstNameInputField.fill(invalidEditedFirstNameFormat);
    }
    async inputInvalidEditedLastNameFormatIntoLastNameInputField(){
        const invalidEditedLastNameFormat = this._invalidEditedLastNameFormat;
        Logger.info("Invalid edited user last name format: " + invalidEditedLastNameFormat);
        await this._personalInfoModalLastNameInputField.fill(invalidEditedLastNameFormat);
    }

}
export {PersonalInfoModalInvalidScenarios};