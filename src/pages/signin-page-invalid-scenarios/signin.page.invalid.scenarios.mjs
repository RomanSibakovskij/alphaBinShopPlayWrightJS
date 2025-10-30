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

    }

    //invalid user login data input methods - no singular input
    async inputNoLoginEmailIntoEmailInputField(){
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No user login email: " + noLoginEmail);
        await this._signInPageEmailInputField.fill(noLoginEmail);
    }

}
export {SignInPageInvalidScenarios};