"use strict"

import {BasePage} from "./utilities/base.page.mjs";
import {TestDataGenerator} from "./utilities/test.data.generator.mjs";
import {Logger} from "./utilities/logger.mjs";

class CreateAccountPage extends BasePage{

    constructor(page) {
        super(page);

        //sign-up page web elements
        this._signUpPageIcon = page.locator("//span[@aria-label='user-add']");
        this._signUpPageTitle = page.locator("//h2[@data-testid='signup-title']");
        this._signUpPageSubtitle = page.locator("//p[@data-testid='signup-description']");
        //input form (sign-up)
        this._signUpPageFirstNameSubtext = page.locator("//label[@for='firstname']");
        this._signUpPageFirstNameInputField = page.locator("//input[@id='firstname']");
        this._signUpPageLastNameSubtext = page.locator("//label[@for='lastname']");
        this._signUpPageLastNameInputField = page.locator("//input[@id='lastname']");
        this._signUpPageEmailSubtext = page.locator("//label[@for='email']");
        this._signUpPageEmailInputField = page.locator("//input[@id='email']");
        this._signUpPagePasswordSubtext = page.locator("//label[@for='password']");
        this._signUpPagePasswordInputField = page.locator("//input[@id='password']");
        this._signUpPageViewPasswordButton = page.locator("//button[@data-testid='signup-password-toggle']");
        this._signUpPagePasswordHint= page.locator("//p[@class='text-gray-500 text-xs mt-1']");
        //list elements
        this._signUpPageRequiredTagElements = page.locator("//span[@class='text-red-500']");
        //button
        this._signUpPageSignUpButton = page.locator("//button[@data-testid='signup-submit-button']");
        //singular elements
        this._signUpPagePrivacyAndTermsAgreementSubtext = page.locator("//div[@data-testid='signup-terms-and-conditions']");
        this._signUpPagePrivacyLink = page.locator("//a[@data-testid='signup-privacy-policy-link']");
        this._signUpPageTermsLink = page.locator("//a[@data-testid='signup-terms-of-service-link']");
        this._signUpPageSignInText = page.locator("//p[@class='text-sm text-gray-600']");
        this._signUpPageSignInLink = page.locator("//span[@data-testid='signup-login-link']");
        //invalid singular input error message
        this._signUpPageInvalidSingularInputErrorMsg = page.locator("//div[@id='_rht_toaster']");

    }

    //sign-up text element getters
    async getSignUpPageTitle(){return await this._signUpPageTitle.innerText();}
    async getSignUpPageSubtitle(){return await this._signUpPageSubtitle.innerText();}
    //input form (sign-up)
    async getSignUpPageFirstNameSubtext(){return await this._signUpPageFirstNameSubtext.innerText();}
    async getSignUpPageLastNameSubtext(){return await this._signUpPageLastNameSubtext.innerText();}
    async getSignUpPageEmailSubtext(){return await this._signUpPageEmailSubtext.innerText();}
    async getSignUpPagePasswordSubtext(){return await this._signUpPagePasswordSubtext.innerText();}
    async getSignUpPagePasswordHint(){return await this._signUpPagePasswordHint.innerText();}
    //button
    async getSignUpPageSignUpBtnText(){return await this._signUpPageSignUpButton.innerText();}
    //singular elements
    async getSignUpPagePrivacyAndTermsAgreementSubtext(){return await this._signUpPagePrivacyAndTermsAgreementSubtext.innerText();}
    async getSignUpPageSignInSubtext(){return await this._signUpPageSignInText.innerText();}

    //invalid singular input error message getter
    async getSignUpInvalidSingularInputErrorMsg(){return await this._signUpPageInvalidSingularInputErrorMsg.innerText();}

    //create account page private data getters
    get validUserFullName(){return this._firstName + " " + this._lastName;}
    get validUserEmail(){return this._email;}
    get validUserPassword(){return this._password;}

    //sign-up page web element getters
    get signUpPageIcon(){return this._signUpPageIcon;}
    get signUpPageTitle(){return this._signUpPageTitle;}
    get signUpPageSubtitle(){return this._signUpPageSubtitle;}
    //input form (sign-up)
    get signUpPageFirstNameSubtext(){return this._signUpPageFirstNameSubtext;}
    get signUpPageFirstNameInputField(){return this._signUpPageFirstNameInputField;}
    get signUpPageLastNameSubtext(){return this._signUpPageLastNameSubtext;}
    get signUpPageLastNameInputField(){return this._signUpPageLastNameInputField;}
    get signUpPageEmailSubtext(){return this._signUpPageEmailSubtext;}
    get signUpPageEmailInputField(){return this._signUpPageEmailInputField;}
    get signUpPagePasswordSubtext(){return this._signUpPagePasswordSubtext;}
    get signUpPagePasswordInputField(){return this._signUpPagePasswordInputField;}
    get signUpPageViewPasswordButton(){return this._signUpPageViewPasswordButton;}
    get signUpPagePasswordHint(){return this._signUpPagePasswordHint;}
    //list elements
    get signUpPageRequiredTagElement(){return this._signUpPageRequiredTagElements;}
    //button
    get signUpPageSignUpButton(){return this._signUpPageSignUpButton;}
    //singular elements
    get signUpPagePrivacyAndTermsAgreementSubtext (){return this._signUpPagePrivacyAndTermsAgreementSubtext ;}
    get signUpPagePrivacyLink(){return this._signUpPagePrivacyLink;}
    get signUpPageTermsLink(){return this._signUpPageTermsLink;}
    get signUpPageSignInText(){return this._signUpPageSignInText;}
    get signUpPageSignInLink(){return this._signUpPageSignInLink;}

}
export {CreateAccountPage};