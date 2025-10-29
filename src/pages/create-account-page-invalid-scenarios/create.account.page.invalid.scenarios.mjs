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
        this._tooShortLastName = "D"; //1 char
        this._tooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name, domain
        this._tooShortPassword = "2$#WA"; //5 chars

        //invalid test data input - too long singular input
        this._tooLongFirstName = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //100 chars
        this._tooLongLastName = "Asdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //100 chars
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //100 chars -> name, domain
        this._tooLongPassword = "DDFD@#$cffds^%&dgerder$#565432Wefrt"; // 35 chars

        //invalid test data input - invalid singular input
        this._invalidFirstNameFormat = "@#$%$%^"; //special symbols only
        this._invalidLastNameFormat = "@#$%$#%^"; //special symbols only

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
    async inputTooShortLastNameIntoLastNameInputField(){
        const tooShortLastName = this._tooShortLastName;
        Logger.info("Too short user last name: " + tooShortLastName);
        await this._signUpPageLastNameInputField.fill(tooShortLastName);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const tooShortEmail = this._tooShortEmail;
        Logger.info("Too short user email: " + tooShortEmail);
        await this._signUpPageEmailInputField.fill(tooShortEmail);
    }
    async inputTooShortPasswordIntoPasswordInputField(){
        const tooShortPassword = this._tooShortPassword;
        Logger.info("Too short user password: " + tooShortPassword);
        await this._signUpPagePasswordInputField.fill(tooShortPassword);
    }

    //invalid sign-up data input methods - too long singular input
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const tooLongFirstName = this._tooLongFirstName;
        Logger.info("Too long user first name: " + tooLongFirstName);
        await this._signUpPageFirstNameInputField.fill(tooLongFirstName);
    }
    async inputTooLongLastNameIntoLastNameInputField(){
        const tooLongLastName = this._tooLongLastName;
        Logger.info("Too long user last name: " + tooLongLastName);
        await this._signUpPageLastNameInputField.fill(tooLongLastName);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const tooLongEmail = this._tooLongEmail;
        Logger.info("Too long user email: " + tooLongEmail);
        await this._signUpPageEmailInputField.fill(tooLongEmail);
    }
    async inputTooLongPasswordIntoPasswordInputField(){
        const tooLongPassword = this._tooLongPassword;
        Logger.info("Too long user password: " + tooLongPassword);
        await this._signUpPagePasswordInputField.fill(tooLongPassword);
    }

    //invalid sign-up data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoFirstNameInputField(){
        const invalidFirstNameFormat = this._invalidFirstNameFormat;
        Logger.info("Invalid user first name format: " + invalidFirstNameFormat);
        await this._signUpPageFirstNameInputField.fill(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoLastNameInputField(){
        const invalidLastNameFormat = this._invalidLastNameFormat;
        Logger.info("Invalid user last name format: " + invalidLastNameFormat);
        await this._signUpPageLastNameInputField.fill(invalidLastNameFormat);
    }

}
export {CreateAccountPageInvalidScenarios};