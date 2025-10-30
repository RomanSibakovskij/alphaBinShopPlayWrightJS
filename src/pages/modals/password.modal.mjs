"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {TestDataGenerator} from "../utilities/test.data.generator.mjs";
import {Logger} from "../utilities/logger.mjs";

class PasswordModal extends BasePage{

    constructor(page) {
        super(page);

        //password modal web elements
        this._passwordModalIcon = page.locator("//h3[@data-testid='my-profile-security-title']/span[@class='anticon anticon-lock mr-2']");
        this._passwordModalTitle = page.locator("//h3[@data-testid='my-profile-security-title']");
        this._passwordModalDesc = page.locator("//p[@data-testid='my-profile-security-description']");
        //input form
        this._passwordModalNewPasswordSubtext = page.locator("//label[@data-testid='my-profile-new-password-label']");
        this._passwordModalNewPasswordInputField = page.locator("//input[@data-testid='my-profile-new-password-input']");
        this._passwordModalConfirmPasswordSubtext = page.locator("//label[@data-testid='my-profile-confirm-password-label']");
        this._passwordModalConfirmPasswordInputField = page.locator("//input[@data-testid='my-profile-confirm-password-input']");
        //list elements
        this._passwordModalRequiredTagElements = page.locator("//span[@class='text-red-500']");
        //password requirements section
        this._passwordModalPasswordRequirementsIcon = page.locator("//span[@class='anticon anticon-info-circle mr-1']");
        this._passwordModalPasswordRequirementsTitle = page.locator("//h4[@data-testid='my-profile-password-requirements-title']");
        //list elements
        this._passwordModalPasswordRequirementsBubbleElements = page.locator("//ul[@data-testid='my-profile-password-requirements-list']/li/span");
        this._passwordModalPasswordRequirementListElements = page.locator("//ul[@data-testid='my-profile-password-requirements-list']/li");
        //button
        this._passwordModalUpdatePasswordButton = page.locator("//button[@data-testid='my-profile-reset-password-button']");
        //invalid singular input error message
        this._passwordModalInvalidSingularInputError = page.locator("//p[@class='mt-1 text-sm text-red-500']");
        //invalid credentials error box
        this._passwordModalInvalidCredentialsErrorMsg = page.locator("//div[@id='_rht_toaster']");

        const testDataGenerator = new TestDataGenerator(page);

        //valid password input data
        this._newPassword = testDataGenerator.generateRandomPassword();

    }

    //valid password input data methods
    async inputNewPasswordIntoNewPasswordInputField(){
        const newPassword = this._newPassword;
        Logger.info("Valid new user password: " + newPassword);
        await this._passwordModalNewPasswordInputField.fill(newPassword);
    }
    async inputConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPassword = this._newPassword;
        Logger.info("Valid matching user confirm password: " + confirmPassword);
        await this._passwordModalConfirmPasswordInputField.fill(confirmPassword);
    }

    //click "Update password" button method
    async clickUpdatePasswordButton(){await this._passwordModalUpdatePasswordButton.click();}

    //password modal text element getters
    async getPasswordModalTitle(){return await this._passwordModalTitle.innerText();}
    async getPasswordModalDesc(){return await this._passwordModalDesc.innerText();}
    //input form
    async getPasswordModalNewPasswordSubtext(){return await this._passwordModalNewPasswordSubtext.innerText();}
    async getPasswordModalConfirmPasswordSubtext(){return await this._passwordModalConfirmPasswordSubtext.innerText();}
    //password requirements section
    async getPasswordModalPasswordRequirementsTitle(){return await this._passwordModalPasswordRequirementsTitle.innerText();}
    //list elements
    async getPasswordModalPasswordRequirement(){
        const elements = await this._passwordModalPasswordRequirementListElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //button
    async getPasswordModalUpdatePasswordBtnText(){return await this._passwordModalUpdatePasswordButton.innerText();}

    //invalid singular input error message getter
    async getPasswordModalInvalidSingularInputErrorMsg(){return await this._passwordModalInvalidSingularInputError.innerText();}
    //invalid credentials error message getter
    async getPasswordModalInvalidCredentialsInputErrorMsg(){return await this._passwordModalInvalidCredentialsErrorMsg.innerText();}

    //private data getter
    get validEditedPassword(){return this._newPassword;}

    //password modal web element getters
    get passwordModalIcon(){return this._passwordModalIcon;}
    get passwordModalTitle(){return this._passwordModalTitle;}
    get passwordModalDesc(){return this._passwordModalDesc;}
    //input form
    get passwordModalNewPasswordSubtext(){return this._passwordModalNewPasswordSubtext;}
    get passwordModalNewPasswordInputField(){return this._passwordModalNewPasswordInputField;}
    get passwordModalConfirmPasswordSubtext(){return this._passwordModalConfirmPasswordSubtext;}
    get passwordModalConfirmPasswordInputField(){return this._passwordModalConfirmPasswordInputField;}
    //list elements
    get passwordModalRequiredTagElement(){return this._passwordModalRequiredTagElements;}
    //password requirements section
    get passwordModalPasswordRequirementsIcon(){return this._passwordModalPasswordRequirementsIcon;}
    get passwordModalPasswordRequirementsTitle(){return this._passwordModalPasswordRequirementsTitle;}
    //list elements
    get passwordModalPasswordRequirementsBubbleElement(){return this._passwordModalPasswordRequirementsBubbleElements;}
    get passwordModalPasswordRequirementListElement(){return this._passwordModalPasswordRequirementListElements;}
    //button
    get passwordModalUpdatePasswordButton(){return this._passwordModalUpdatePasswordButton;}

}
export {PasswordModal};