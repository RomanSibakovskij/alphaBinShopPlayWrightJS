"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {TestDataGenerator} from "../utilities/test.data.generator.mjs";
import {Logger} from "../utilities/logger.mjs";

class CreateAccountPageInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._signUpPageFirstNameInputField = page.locator("//input[@id='firstname']");
        this._signUpPageLastNameInputField = page.locator("//input[@id='lastname']");
        this._signUpPageEmailInputField = page.locator("//input[@id='email']");
        this._signUpPagePasswordInputField = page.locator("//input[@id='password']");

        const testDataGenerator = new TestDataGenerator(page);

        //invalid test data input - no singular input
        this._noFirstName = "";
        this._noLastName = "";
        this._noEmail = "";
        this._noPassword = "";

        //invalid test data input - too short singular input
        this._tooShortFirstName = "F"; //1 char

    }

    //invalid sign-up data input methods - no singular input
    async inputNoFirstNameIntoFirstNameInputField(){
        const noFirstName = this._noFirstName;
        Logger.info("No user first name: " + noFirstName);
        await this._signUpPageFirstNameInputField.fill(noFirstName);
    }
    async inputNoLastNameIntoLastNameInputField(){
        const noLastName = this._noLastName;
        Logger.info("No user last name: " + noLastName);
        await this._signUpPageLastNameInputField.fill(noLastName);
    }
    async inputNoEmailIntoEmailInputField(){
        const noEmail = this._noEmail;
        Logger.info("No user email: " + noEmail);
        await this._signUpPageEmailInputField.fill(noEmail);
    }
    async inputNoPasswordIntoPasswordInputField(){
        const noPassword = this._noPassword;
        Logger.info("No user password: " + noPassword);
        await this._signUpPagePasswordInputField.fill(noPassword);
    }

    //invalid sign-up data input methods - too short singular input
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const tooShortFirstName = this._tooShortFirstName;
        Logger.info("Too short user first name: " + tooShortFirstName);
        await this._signUpPageFirstNameInputField.fill(tooShortFirstName);
    }

}
export {CreateAccountPageInvalidScenarios};