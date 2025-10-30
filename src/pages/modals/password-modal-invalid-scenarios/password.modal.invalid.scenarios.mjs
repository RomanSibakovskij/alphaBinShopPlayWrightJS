"use strict"

import {BasePage} from "../../utilities/base.page.mjs";

class PasswordModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._passwordModalNewPasswordInputField = page.locator("//input[@data-testid='my-profile-new-password-input']");
        this._passwordModalConfirmPasswordInputField = page.locator("//input[@data-testid='my-profile-confirm-password-input']");

    }

}
export {PasswordModalInvalidScenarios};