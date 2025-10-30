"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
import {Logger} from "../../utilities/logger.mjs";

class PasswordModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._passwordModalNewPasswordInputField = page.locator("//input[@data-testid='my-profile-new-password-input']");
        this._passwordModalConfirmPasswordInputField = page.locator("//input[@data-testid='my-profile-confirm-password-input']");

        //invalid password input data - no singular input
        this._noConfirmPassword = "";

        //invalid password input data - too short singular input (matching inputs)
        this._tooShortNewPassword = "Fr34#f$"; //7 chars
        this._tooShortConfirmPassword = "Fr34#f$"; //7 chars

    }

    //invalid password input data methods - no singular input
    async inputNoConfirmPasswordIntoConfirmPasswordInputField(){
        const noConfirmPassword = this._noConfirmPassword;
        Logger.info("No user confirm password: " + noConfirmPassword);
        await this._passwordModalConfirmPasswordInputField.fill(noConfirmPassword);
    }

    //invalid password input data methods - too short singular input
    async inputTooShortNewPasswordIntoNewPasswordInputField(){
        const tooShortNewPassword = this._tooShortNewPassword;
        Logger.info("Too short new user password: " + tooShortNewPassword);
        await this._passwordModalNewPasswordInputField.fill(tooShortNewPassword);
    }
    async inputTooShortConfirmPasswordIntoConfirmPasswordInputField(){
        const tooShortConfirmPassword = this._tooShortConfirmPassword;
        Logger.info("Too short matching user confirm password: " + tooShortConfirmPassword);
        await this._passwordModalConfirmPasswordInputField.fill(tooShortConfirmPassword);
    }

}
export {PasswordModalInvalidScenarios};