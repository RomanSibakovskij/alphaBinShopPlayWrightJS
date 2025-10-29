"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {SignInPage} from "../../pages/signin.page.mjs";
import {CreateAccountPage} from "../../pages/create.account.page.mjs";

import {GeneralPageWebElementAssert} from "../web-element-asserts/general.page.web.element.assert.mjs";
import {HomePageWebElementAssert} from "../web-element-asserts/home.page.web.element.assert.mjs";
import {SignInPageWebElementAssert} from "../web-element-asserts/signin.page.web.element.assert.mjs";
import {CreateAccountPageWebElementAssert} from "../web-element-asserts/create.account.page.web.element.assert.mjs";

import {GeneralPageTextElementAssert} from "../text-element-asserts/general.page.text.element.assert.mjs";
import {HomePageTextElementAssert} from "../text-element-asserts/home.page.text.element.assert.mjs";
import {SignInPageTextElementAssert} from "../text-element-asserts/signin.page.text.element.assert.mjs";
import {CreateAccountPageTextElementAssert} from "../text-element-asserts/create.account.page.text.element.assert.mjs";

import {HomePageDataLoggers} from "../data-loggers/home.page.data.loggers.mjs";
import {expect} from "@playwright/test";

class TestMethods{

    //navigate to sign up page test method
    async navigateToSignUpPageTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const signInPage = new SignInPage(page);
        const signInPageWebElementAssert = new SignInPageWebElementAssert();
        const signInPageTextElementAssert = new SignInPageTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //log home page featured product data
        await homePageDataLoggers.logHomePageFeaturedProductData(page);
        //log home page new arrivals product data
        await homePageDataLoggers.logHomePageNewArrivalsProductData(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button method
        await generalPage.clickHeaderAccountIconBtn();
        //sign-in page web element assert
        await signInPageWebElementAssert.isSignInPageWebElementVisible(page);
        //sign-in page text element assert
        await signInPageTextElementAssert.isSignInPageTextElementAsExpected(page);
        //capture screenshot of the sign-in page display
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display.png", fullPage: true });
        //await the user is on the sign-in page
        const expectedSignInURL = "https://demo.alphabin.co/login";
        const actualSignInURL = page.url();
        expect(actualSignInURL).toBe(expectedSignInURL);
        //click "Sign in" button
        await signInPage.clickSignUpLink();
        //await the user is on the create account page
        const expectedCreatedAccountURL = "https://demo.alphabin.co/signup";
        const actualCreatedAccountURL = page.url();
        expect(actualCreatedAccountURL).toBe(expectedCreatedAccountURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Navigate To Sign Up Page Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation test

    //valid user account creation test method
    async validUserAccountCreationTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageWebElementAssert = new CreateAccountPageWebElementAssert();
        const createAccountPageTextElementAssert = new CreateAccountPageTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //create account pge web element assert
        await createAccountPageWebElementAssert.isCreateAccountPageWebElementVisible(page);
        //create account page text element assert
        await createAccountPageTextElementAssert.isCreateAccountPageTextElementAsExpected(page);
        //capture screenshot of the create account page display before data input
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await createAccountPage.inputFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await createAccountPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Valid Data Input.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4700);
        //assert the user gets onto sign in page after account creation (since the popup is outside of DOM)
        const expectedURL = "https://demo.alphabin.co/login"
        const actualURL = page.url();
        await expect(actualURL).toEqual(expectedURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid User Account Creation Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
export {TestMethods};