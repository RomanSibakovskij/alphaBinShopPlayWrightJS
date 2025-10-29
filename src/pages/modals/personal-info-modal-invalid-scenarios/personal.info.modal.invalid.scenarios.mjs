"use strict"

import {BasePage} from "../../utilities/base.page.mjs";

class PersonalInfoModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._personalInfoModalFirstNameInputField = page.locator("//input[@data-testid='my-profile-firstname-input']");
        this._personalInfoModalLastNameInputField = page.locator("//input[@data-testid='my-profile-lastname-input']");
        this._personalInfoModalEmailInputField = page.locator("//input[@data-testid='my-profile-email-input']");

    }

}
export {PersonalInfoModalInvalidScenarios};