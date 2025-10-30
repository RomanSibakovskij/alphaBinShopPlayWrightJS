"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class SignInPageInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._signInPageEmailInputField = page.locator("//input[@id='email']");
        this._signInPagePasswordInputField = page.locator("//input[@id='password']");

    }

}
export {SignInPageInvalidScenarios};