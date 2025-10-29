"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class PersonalInfoModal extends BasePage{

    constructor(page) {
        super(page);

        //personal info modal web elements
        this._personalInfoModalMyAccountIcon = page.locator("//span[@class='anticon anticon-user mr-2']");
        this._personalInfoModalTitle = page.locator("//h2[@data-testid='my-profile-title']");
        this._personalInfoModalPersonalDetailsButton = page.locator("//button[@data-testid='my-profile-details-tab']");
        this._personalInfoModalSecurityButton = page.locator("//button[@data-testid='my-profile-security-tab']");
        //personal information section
        this._personalInfoModalPersonalInfoSectionIcon = page.locator("//span[@class='anticon anticon-edit mr-2']");
        this._personalInfoModalPersonalInfoSectionTitle = page.locator("//h3[@data-testid='my-profile-details-title']");
        this._personalInfoModalPersonalInfoSectionDesc = page.locator("//p[@data-testid='my-profile-details-description']");
        //input form
        this._personalInfoModalFirstNameSubtext = page.locator("//label[@data-testid='my-profile-firstname-label']");
        this._personalInfoModalFirstNameInputField = page.locator("//input[@data-testid='my-profile-firstname-input']");
        this._personalInfoModalLastNameSubtext = page.locator("//label[@data-testid='my-profile-lastname-label']");
        this._personalInfoModalLastNameInputField = page.locator("//input[@data-testid='my-profile-lastname-input']");
        this._personalInfoModalEmailSubtext = page.locator("//label[@data-testid='my-profile-email-label']");
        this._personalInfoModalEmailInputField = page.locator("//input[@data-testid='my-profile-email-input']");
        this._personalInfoModalEmailHint = page.locator("//div[@class='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8']/div[1]/p[@class='mt-1 text-xs text-gray-500']");
        this._personalInfoModalPhoneNumberSubtext = page.locator("//label[@data-testid='my-profile-contact-label']");
        this._personalInfoModalPhoneNumberInputField = page.locator("//input[@data-testid='my-profile-contact-input']");
        this._personalInfoModalPhoneLengthHint = page.locator("//div[@class='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8']/div[2]/p[@class='mt-1 text-xs text-gray-500']");
        //list elements
        this._personalInfoModalRequiredTagElements = page.locator("//span[@class='text-red-500']");
        //button
        this._personalInfoModalSaveChangesButton = page.locator("//button[@data-testid='my-profile-update-button']");
        //message box element
        this._personalInfoModalMsgBox = page.locator("//div[@id='_rht_toaster']");
        //invalid singular input error message
        this._personalInfoModalInvalidSingularInputErrorMsg = page.locator("//p[@class='mt-1 text-sm text-red-500']");

    }

    //personal info modal text element getters
    async getPersonalInfoModalTitle(){return await this._personalInfoModalTitle.innerText();}
    async getPersonalInfoModalPersonalDetailsBtnText(){return await this._personalInfoModalPersonalDetailsButton.innerText();}
    async getPersonalInfoModalSecurityBtnText(){return await this._personalInfoModalSecurityButton.innerText();}
    //personal information section
    async getPersonalInfoModalPersonalinfoSectionTitle(){return await this._personalInfoModalPersonalInfoSectionTitle.innerText();}
    async getPersonalInfoModalPersonalinfoSectionDesc(){return await this._personalInfoModalPersonalInfoSectionDesc.innerText();}
    //input form
    async getPersonalInfoModalFirstNameSubtext(){return await this._personalInfoModalFirstNameSubtext.innerText();}
    async getPersonalInfoModalLastNameSubtext(){return await this._personalInfoModalLastNameSubtext.innerText();}
    async getPersonalInfoModalEmailSubtext(){return await this._personalInfoModalEmailSubtext.innerText();}
    async getPersonalInfoModalEmailHint(){return await this._personalInfoModalEmailHint.innerText();}
    async getPersonalInfoModalPhoneSubtext(){return await this._personalInfoModalPhoneNumberSubtext.innerText();}
    async getPersonalInfoModalPhoneLengthHint(){return await this._personalInfoModalPhoneLengthHint.innerText();}
    //button
    async getPersonalInfoModalSaveChangesBtnText(){return await this._personalInfoModalSaveChangesButton.innerText();}

    //message box text getter
    async getPersonalInfoModalMsgBoxText(){return await this._personalInfoModalMsgBox.innerText();}

    //invalid singular input error message getter
    async getPersonalInfoModalInvalidSingularInputError(){return await this._personalInfoModalInvalidSingularInputErrorMsg.innerText();}

    //personal info modal web element getters
    get personalInfoModalMyAccountIcon(){return this._personalInfoModalMyAccountIcon;}
    get personalInfoModalTitle(){return this._personalInfoModalTitle;}
    get personalInfoModalPersonalDetailsButton(){return this._personalInfoModalPersonalDetailsButton;}
    get personalInfoModalSecurityButton(){return this._personalInfoModalSecurityButton;}
    //personal information section
    get personalInfoModalPersonalInfoSectionIcon(){return this._personalInfoModalPersonalInfoSectionIcon;}
    get personalInfoModalPersonalInfoSectionTitle(){return this._personalInfoModalPersonalInfoSectionTitle;}
    get personalInfoModalPersonalInfoSectionDesc(){return this._personalInfoModalPersonalInfoSectionDesc;}
    //input form
    get personalInfoModalFirstNameSubtext(){return this._personalInfoModalFirstNameSubtext;}
    get personalInfoModalFirstNameInputField(){return this._personalInfoModalFirstNameInputField;}
    get personalInfoModalLastNameSubtext(){return this._personalInfoModalLastNameSubtext;}
    get personalInfoModalLastNameInputField(){return this._personalInfoModalLastNameInputField;}
    get personalInfoModalEmailSubtext(){return this._personalInfoModalEmailSubtext;}
    get personalInfoModalEmailInputField(){return this._personalInfoModalEmailInputField;}
    get personalInfoModalEmailHint(){return this._personalInfoModalEmailHint;}
    get personalInfoModalPhoneSubtext(){return this._personalInfoModalPhoneNumberSubtext;}
    get personalInfoModalPhoneInputField(){return this._personalInfoModalPhoneNumberInputField;}
    get personalInfoModalPhoneLengthHint(){return this._personalInfoModalPhoneLengthHint;}
    //list elements
    get personalInfoModalRequiredTagElement(){return this._personalInfoModalRequiredTagElements;}
    //button
    get personalInfoSaveChangesButton(){return this._personalInfoModalSaveChangesButton;}

}
export {PersonalInfoModal};