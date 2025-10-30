"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {Logger} from "../utilities/logger.mjs";

class SignInPageInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._signInPageEmailInputField = page.locator("//input[@id='email']");
        this._signInPagePasswordInputField = page.locator("//input[@id='password']");

        //invalid signin data - no singular input
        this._noLoginEmail = "";
        this._noLoginPassword = "";

        //invalid signin data - invalid singular input
        this._invalidLoginEmail = "dfgfdgd@fakemail.com";

    }

    //invalid user login data input methods - no singular input
    async inputNoLoginEmailIntoEmailInputField(){
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No user login email: " + noLoginEmail);
        await this._signInPageEmailInputField.fill(noLoginEmail);
    }
    async inputNoLoginPasswordIntoPasswordInputField(){
        const noLoginPassword = this._noLoginPassword;
        Logger.info("No user login password: " + noLoginPassword);
        await this._signInPagePasswordInputField.fill(noLoginPassword);
    }

    //invalid user login data input methods - invalid singular input
    async inputInvalidLoginEmailIntoEmailInputField(){
        const invalidLoginEmail = this._invalidLoginEmail;
        Logger.info("Invalid user login email: " + invalidLoginEmail);
        await this._signInPageEmailInputField.fill(invalidLoginEmail);
    }

}
export {SignInPageInvalidScenarios};