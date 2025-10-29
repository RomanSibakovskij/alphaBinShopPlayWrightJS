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

        //invalid edited input data - no singular input
        this._noEditedFirstName = "";
        this._noEditedLastName = "";

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

}
export {PersonalInfoModalInvalidScenarios};