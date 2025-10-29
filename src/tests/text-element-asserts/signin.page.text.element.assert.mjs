"use strict"

import {SignInPage} from "../../pages/signin.page.mjs";
import {expect} from "@playwright/test";

class SignInPageTextElementAssert{

    //sign-in page text element assert test method
    async isSignInPageTextElementAsExpected(page){
        const signInPage = new SignInPage(page);
        //assert the sign-in page title is as expected
        const signInPageTitle = await signInPage.getSignInPageTitle();
        expect(signInPageTitle).toBe("Sign In");
        //assert the sign-in page subtitle is as expected
        const signInPageSubtitle = await signInPage.getSignInPageSubtitle();
        expect(signInPageSubtitle).toBe("Welcome back! Please sign in to access your account");
        //input form (sign-in)
        //assert the sign-in page email subtext is as expected
        const signInPageEmailSubtext = await signInPage.getSignInPageEmailSubtext();
        expect(signInPageEmailSubtext).toBe("Email Address *");
        //assert the sign-in page password subtext is as expected
        const signInPagePasswordSubtext = await signInPage.getSignInPagePasswordSubtext();
        expect(signInPagePasswordSubtext).toBe("Password *");
        //button
        //assert the sign-in page sign-in button text is as expected
        const signInPageSignInBtnText = await signInPage.getSignInPageSignInBtnText();
        expect(signInPageSignInBtnText).toBe("Sign in");
        //assert the sign-in page sign-up text is as expected
        const signInPageSignUpText = await signInPage.getSignInPageSignUpText();
        expect(signInPageSignUpText).toBe("Don't have an account? Sign up");
    }

}
export {SignInPageTextElementAssert};