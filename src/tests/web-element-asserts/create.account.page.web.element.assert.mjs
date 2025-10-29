"use strict"

import {CreateAccountPage} from "../../pages/create.account.page.mjs";
import {expect} from "@playwright/test";

class CreateAccountPageWebElementAssert {

    //create account page web element assert test method
    async isCreateAccountPageWebElementVisible(page){
        const createAccountPage = new CreateAccountPage(page);
        //assert the create account page icon is visible
        await expect(createAccountPage.signUpPageIcon).toBeVisible();
        //assert the create account page title is visible
        await expect(createAccountPage.signUpPageTitle).toBeVisible();
        //assert the create account page subtitle is visible
        await expect(createAccountPage.signUpPageSubtitle).toBeVisible();
        //input form (sign-up)
        //assert the create account page first name subtext is visible
        await expect(createAccountPage.signUpPageFirstNameSubtext).toBeVisible();
        //assert the create account page first name input field is visible
        await expect(createAccountPage.signUpPageFirstNameInputField).toBeVisible();
        //assert the create account page last name subtext is visible
        await expect(createAccountPage.signUpPageLastNameSubtext).toBeVisible();
        //assert the create account page last name input field is visible
        await expect(createAccountPage.signUpPageLastNameInputField).toBeVisible();
        //assert the create account page email subtext is visible
        await expect(createAccountPage.signUpPageEmailSubtext).toBeVisible();
        //assert the create account page email input field is visible
        await expect(createAccountPage.signUpPageEmailInputField).toBeVisible();
        //assert the create account page password subtext is visible
        await expect(createAccountPage.signUpPagePasswordSubtext).toBeVisible();
        //assert the create account page password input field is visible
        await expect(createAccountPage.signUpPagePasswordInputField).toBeVisible();
        //assert the create account page view password button is visible
        await expect(createAccountPage.signUpPageViewPasswordButton).toBeVisible();
        //assert the create account page password hint is visible
        await expect(createAccountPage.signUpPagePasswordHint).toBeVisible();
        //list elements
        //assert the create account page required tags are visible (as a list)
        const createAccountPageRequiredTags = createAccountPage.signUpPageRequiredTagElement;
        const createAccountPageRequiredTagsCount = await createAccountPageRequiredTags.count();
        for (let i = 0; i < createAccountPageRequiredTagsCount; i++) {
            await expect(createAccountPageRequiredTags.nth(i)).toBeVisible();
        }
        //button
        //assert the create account page create account button is visible
        await expect(createAccountPage.signUpPageSignUpButton).toBeVisible();
        //singular elements
        //assert the create account page privacy policy and terms agreement subtext is visible
        await expect(createAccountPage.signUpPagePrivacyAndTermsAgreementSubtext).toBeVisible();
        //assert the create account page privacy policy link is visible
        await expect(createAccountPage.signUpPagePrivacyLink).toBeVisible();
        //assert the create account page terms link is visible
        await expect(createAccountPage.signUpPageTermsLink).toBeVisible();
        //assert the create account page sign-in text is visible
        await expect(createAccountPage.signUpPageSignInText).toBeVisible();
        //assert the create account page sign-in link is visible
        await expect(createAccountPage.signUpPageSignInLink).toBeVisible();
    }

}
export {CreateAccountPageWebElementAssert};