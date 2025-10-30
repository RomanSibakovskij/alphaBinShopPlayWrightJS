"use strict"

import {BasePage} from "./utilities/base.page.mjs";
import {CreateAccountPage} from "./create.account.page.mjs";
import {PasswordModal} from "./modals/password.modal.mjs";
import {AddNewAddressModal} from "./modals/add.new.address.modal.mjs";
import {Logger} from "./utilities/logger.mjs";

class SignInPage extends BasePage{

    constructor(page) {
        super(page);

        //sign-in page web elements
        this._signInPageIcon = page.locator("//span[@aria-label='login']");
        this._signInPageTitle = page.locator("//h2[@data-testid='login-title']");
        this._signInPageSubtitle = page.locator("//p[@data-testid='login-description']");
        //input form (sign-in)
        this._signInPageEmailSubtext = page.locator("//label[@for='email']");
        this._signInPageEmailInputField = page.locator("//input[@id='email']");
        this._signInPagePasswordSubtext = page.locator("//label[@for='password']");
        this._signInPagePasswordInputField = page.locator("//input[@id='password']");
        this._signInPageViewPasswordButton = page.locator("//button[@class='text-gray-400 hover:text-gray-600 focus:outline-none']");
        //list elements
        this._signInPageRequiredTagElements = page.locator("//span[@class='text-red-500']");
        //button
        this._signInPageSignInButton = page.locator("//button[@data-testid='login-submit-button']");
        this._signInPageSignUpText = page.locator("//p[@class='text-sm text-gray-600']");
        this._signInPageSignUpLink = page.locator("//span[@data-testid='login-signup-link']");
        //invalid singular input error message
        this._signInPageInvalidSingularInputError = page.locator("//p[@class='text-red-500 text-xs mt-1']");
        //invalid credentials error box
        this._signInPageInvalidCredentialsErrorMsg = page.locator("//div[@id='_rht_toaster']");

        const createAccountPage = new CreateAccountPage(page);
        const passwordModal = new PasswordModal(page);
        const addNewAddressModal = new AddNewAddressModal(page);

        //valid user sign-in input data
        this._validUserLoginEmail = createAccountPage.validUserEmail;
        this._validUserLoginPassword = createAccountPage.validUserPassword;

        //valid edited user sign-in input data
        this._validEditedLoginEmail = addNewAddressModal.validAddressEditedEmail;
        this._validEditedLoginPassword = passwordModal.validEditedPassword;

    }

    //click "Sign Up" link method
    async clickSignUpLink(){await this._signInPageSignUpLink.click();}

    //valid user login data input methods
    async inputValidLoginEmailIntoEmailInputField(){
        const validLoginEmail = this._validUserLoginEmail;
        Logger.info("Valid user login email: " + validLoginEmail);
        await this._signInPageEmailInputField.fill(validLoginEmail);
    }
    async inputValidLoginPasswordIntoPasswordInputField(){
        const validLoginPassword = this._validUserLoginPassword;
        Logger.info("Valid user login password: " + validLoginPassword);
        await this._signInPagePasswordInputField.fill(validLoginPassword);
    }

    //valid edited login data input methods
    async inputValidEditedLoginEmailIntoEmailInputField(){
        const validEditedLoginEmail = this._validEditedLoginEmail;
        Logger.info("Valid edited user login email: " + validEditedLoginEmail);
        await this._signInPageEmailInputField.fill(validEditedLoginEmail);
    }
    async inputValidEditedLoginPasswordIntoPasswordInputField(){
        const validEditedLoginPassword = this._validEditedLoginPassword;
        Logger.info("Valid edited user login password: " + validEditedLoginPassword);
        await this._signInPagePasswordInputField.fill(validEditedLoginPassword);
    }

    //click "View Password" button method
    async clickViewPasswordButton(){await this._signInPageViewPasswordButton.click();}

    //click "Sign In" button method
    async clickSignInButton(){await this._signInPageSignInButton.click();}

    //sign-in page text element getters
    async getSignInPageTitle(){return await this._signInPageTitle.innerText();}
    async getSignInPageSubtitle(){return await this._signInPageSubtitle.innerText();}
    //input form (sign-in)
    async getSignInPageEmailSubtext(){return await this._signInPageEmailSubtext.innerText();}
    async getSignInPagePasswordSubtext(){return await this._signInPagePasswordSubtext.innerText();}
    //button
    async getSignInPageSignInBtnText(){return await this._signInPageSignInButton.innerText();}
    async getSignInPageSignUpText(){return await this._signInPageSignUpText.innerText();}

    //invalid singular input error message getter
    async getSignInPageInvalidSingularInputErrorMsg(){return await this._signInPageInvalidSingularInputError.innerText();}
    //invalid credentials error message getter
    async getSignInPageInvalidCredentialsInputErrorMsg(){return await this._signInPageInvalidCredentialsErrorMsg.innerText();}

    //sign-in page web element getters
    get signInPageIcon(){return this._signInPageIcon;}
    get signInPageTitle(){return this._signInPageTitle;}
    get signInPageSubtitle(){return this._signInPageSubtitle;}
    //input form (sign-in)
    get signInPageEmailSubtext(){return this._signInPageEmailSubtext;}
    get signInPageEmailInputField(){return this._signInPageEmailInputField;}
    get signInPagePasswordSubtext(){return this._signInPagePasswordSubtext;}
    get signInPagePasswordInputField(){return this._signInPagePasswordInputField;}
    //list elements
    get signInPageRequiredTagElement(){return this._signInPageRequiredTagElements;}
    //button
    get signInPageSignInButton(){return this._signInPageSignInButton;}
    get signInPageSignUpText(){return this._signInPageSignUpText;}
    get signInPageSignUpLink(){return this._signInPageSignUpLink;}

}
export {SignInPage};