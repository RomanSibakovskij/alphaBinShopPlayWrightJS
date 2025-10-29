"use strict"

import {CreateAccountPage} from "../../pages/create.account.page.mjs";
import {expect} from "@playwright/test";

class CreateAccountPageTextElementAssert {

    //sign-up page text element assert test method
    async isCreateAccountPageTextElementAsExpected(page){
        const createAccountPage = new CreateAccountPage(page);
        //assert the create account page title is as expected
        const createAccountPageTitle = await createAccountPage.getSignUpPageTitle();
        expect(createAccountPageTitle).toBe("Create Account");
        //assert the create account page subtitle is as expected
        const createAccountPageSubtitle = await createAccountPage.getSignUpPageSubtitle();
        expect(createAccountPageSubtitle).toBe("Join us today and discover the complete shopping experience");
        //input form (sign-up)
        //assert the create account page first name subtext is as expected
        const createAccountPageFirstNameSubtext = await createAccountPage.getSignUpPageFirstNameSubtext();
        expect(createAccountPageFirstNameSubtext).toBe("First Name *");
        //assert the create account page last name subtext is as expected
        const createAccountPageLastNameSubtext = await createAccountPage.getSignUpPageLastNameSubtext();
        expect(createAccountPageLastNameSubtext).toBe("Last Name *");
        //assert the create account page email subtext is as expected
        const createAccountPageEmailSubtext = await createAccountPage.getSignUpPageEmailSubtext();
        expect(createAccountPageEmailSubtext).toBe("Email Address *");
        //assert the create account page password subtext is as expected
        const createAccountPagePasswordSubtext = await createAccountPage.getSignUpPagePasswordSubtext();
        expect(createAccountPagePasswordSubtext).toBe("Password *");
        //assert the create account page password hint is as expected
        const createAccountPagePasswordHint = await createAccountPage.getSignUpPagePasswordHint();
        expect(createAccountPagePasswordHint).toBe("Password must be at least 6 characters long");
        //button
        //assert the create account page create button text is as expected
        const createAccountPageSignUpBtnText = await createAccountPage.getSignUpPageSignUpBtnText();
        expect(createAccountPageSignUpBtnText).toBe("Create Account");
        //assert the create account page privacy policy and terms agreement subtext is as expected
        const createAccountPagePrivacyAndTermsAgreementSubtext = await createAccountPage.getSignUpPagePrivacyAndTermsAgreementSubtext();
        expect(createAccountPagePrivacyAndTermsAgreementSubtext).toBe("By creating an account, you agree to our Terms of Service and Privacy Policy");
        //assert the create account page sign-in subtext is as expected
        const createAccountPageSignInSubtext = await createAccountPage.getSignUpPageSignInSubtext();
        expect(createAccountPageSignInSubtext).toBe("Already have an account? Sign in");
    }

}
export {CreateAccountPageTextElementAssert};