"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class CreateAccountPageInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._signUpPageFirstNameInputField = page.locator("//input[@id='firstname']");
        this._signUpPageLastNameInputField = page.locator("//input[@id='lastname']");
        this._signUpPageEmailInputField = page.locator("//input[@id='email']");
        this._signUpPagePasswordInputField = page.locator("//input[@id='password']");

    }

}
export {CreateAccountPageInvalidScenarios};