"use strict"

import {SignInPage} from "../../pages/signin.page.mjs";
import {expect} from "@playwright/test";

class SignInPageWebElementAssert{

    //sign-in page web element assert test method
    async isSignInPageWebElementVisible(page){
        const signInPage = new SignInPage(page);
        //assert the sign-in page icon is visible
        await expect(signInPage.signInPageIcon).toBeVisible();
        //assert the sign-in page title is visible
        await expect(signInPage.signInPageTitle).toBeVisible();
        //assert the sign-in page subtitle is visible
        await expect(signInPage.signInPageSubtitle).toBeVisible();
        //input form (sign-in)
        //assert the sign-in page email subtext is visible
        await expect(signInPage.signInPageEmailSubtext).toBeVisible();
        //assert the sign-in page email input field is visible
        await expect(signInPage.signInPageEmailInputField).toBeVisible();
        //assert the sign-in page password subtext is visible
        await expect(signInPage.signInPagePasswordSubtext).toBeVisible();
        //assert the sign-in page password input field is visible
        await expect(signInPage.signInPagePasswordInputField).toBeVisible();
        //assert the sign-in page required tags are visible (as a list)
        const signInPageRequiredTags = signInPage.signInPageRequiredTagElement;
        const signInPageRequiredTagsCount = await signInPageRequiredTags.count();
        for (let i = 0; i < signInPageRequiredTagsCount; i++) {
            await expect(signInPageRequiredTags.nth(i)).toBeVisible();
        }
        //button
        //assert the sign-in page sign-in button is visible
        await expect(signInPage.signInPageSignInButton).toBeVisible();
        //assert the sign-in page sign-up text is visible
        await expect(signInPage.signInPageSignUpText).toBeVisible();
        //assert the sign-in page sign-up link is visible
        await expect(signInPage.signInPageSignUpLink).toBeVisible();
    }

}
export {SignInPageWebElementAssert};