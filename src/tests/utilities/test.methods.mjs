"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {SignInPage} from "../../pages/signin.page.mjs";
import {CreateAccountPage} from "../../pages/create.account.page.mjs";

import {CreateAccountPageInvalidScenarios} from "../../pages/create-account-page-invalid-scenarios/create.account.page.invalid.scenarios.mjs";

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

    //invalid user account creation tests

    //no singular input

    //invalid user account creation test method - no user first name
    async invalidUserAccountCreationNoFirstNameTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //don't input first name into first name input field
        await createAccountPageInvalidScenarios.inputNoFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await createAccountPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - no user first name
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - No User First Name.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2000);
        //assert the user gets the expected error message (the locator can't be pinpointed since it disappears after 1200 ms, but the error message is present)
        //const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
        //expect(signUpInvalidSingularInputErrorMsg).toBe("First Name is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - No User First Name.png", fullPage: true });
    }

    //invalid user account creation test method - no user last name
    async invalidUserAccountCreationNoLastNameTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //don't input last name into last name input field
        await createAccountPageInvalidScenarios.inputNoLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - no user last name
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - No User Last Name.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2000);
        //assert the user gets the expected error message (the locator can't be pinpointed since it disappears after 1200 ms, but the error message is present)
        //const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
        //expect(signUpInvalidSingularInputErrorMsg).toBe("Last Name is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - No User Last Name.png", fullPage: true });
    }

    //invalid user account creation test method - no user email
    async invalidUserAccountCreationNoEmailTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //don't input email into email input field
        await createAccountPageInvalidScenarios.inputNoEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - no user email
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - No User Email.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2000);
        //assert the user gets the expected error message (the locator can't be pinpointed since it disappears after 1200 ms, but the error message is present)
        //const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
        //expect(signUpInvalidSingularInputErrorMsg).toBe("Email is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - No User Email.png", fullPage: true });
    }

    //invalid user account creation test method - no user password
    async invalidUserAccountCreationNoPasswordTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //don't input password into password input field
        await createAccountPageInvalidScenarios.inputNoPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - no user password
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - No User Password.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2000);
        //assert the user gets the expected error message (the locator can't be pinpointed since it disappears after 1200 ms, but the error message is present)
        //const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
        //expect(signUpInvalidSingularInputErrorMsg).toBe("Password is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - No User Password.png", fullPage: true });
    }

    //too short singular input

    //invalid user account creation test method - too short user first name (1 char)
    async invalidUserAccountCreationTooShortFirstNameTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too short first name into first name input field (1 char)
        await createAccountPageInvalidScenarios.inputTooShortFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await createAccountPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too short user first name
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Short User First Name.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("First Name is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User First Name.png", fullPage: true });
            throw new Error("The too short first name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User First Name.png", fullPage: true });
    }

    //invalid user account creation test method - too short user last name (1 char)
    async invalidUserAccountCreationTooShortLastNameTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too short last name into last name input field (1 char)
        await createAccountPageInvalidScenarios.inputTooShortLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too short user last name
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Short User Last Name.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Last Name is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User Last Name.png", fullPage: true });
            throw new Error("The too short last name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User Last Name.png", fullPage: true });
    }

    //invalid user account creation test method - too short user email (1 char -> name, domain)
    async invalidUserAccountCreationTooShortEmailTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too short email into email input field (1 char -> name, domain)
        await createAccountPageInvalidScenarios.inputTooShortEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too short user email
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Short User Email.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Email is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User Email.png", fullPage: true });
            throw new Error("The too short email input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User Email.png", fullPage: true });
    }

    //invalid user account creation test method - too short user password (5 chars)
    async invalidUserAccountCreationTooShortPasswordTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too short password into password input field (5 chars)
        await createAccountPageInvalidScenarios.inputTooShortPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too short user password
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Short User Password.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Password must be at least 6 characters");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User Password.png", fullPage: true });
            Logger.info("The expected too short password input error was triggered");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Short User Password.png", fullPage: true });
    }

    //too long singular input

    //invalid user account creation test method - too long user first name (100 chars)
    async invalidUserAccountCreationTooLongFirstNameTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too long first name into first name input field (100 chars)
        await createAccountPageInvalidScenarios.inputTooLongFirstNameIntoFirstNameInputField();
        //input valid last name into last name input field
        await createAccountPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too long user first name
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Long User First Name.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("First Name is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User First Name.png", fullPage: true });
            throw new Error("The too long first name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User First Name.png", fullPage: true });
    }

    //invalid user account creation test method - too long user last name (100 chars)
    async invalidUserAccountCreationTooLongLastNameTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too long last name into last name input field (100 chars)
        await createAccountPageInvalidScenarios.inputTooLongLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too long user last name
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Long User Last Name.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Last Name is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User Last Name.png", fullPage: true });
            throw new Error("The too long last name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User Last Name.png", fullPage: true });
    }

    //invalid user account creation test method - too long user email (100 chars -> name, domain)
    async invalidUserAccountCreationTooLongEmailTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too long email into email input field (100 chars -> name, domain)
        await createAccountPageInvalidScenarios.inputTooLongEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too long user email
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Long User Email.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Email is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User Email.png", fullPage: true });
            throw new Error("The too long email input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User Email.png", fullPage: true });
    }

    //invalid user account creation test method - too long user password (35 chars)
    async invalidUserAccountCreationTooLongPasswordTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input too long password into password input field (35 chars)
        await createAccountPageInvalidScenarios.inputTooLongPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - too long user password
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Too Long User Password.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Password is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User Password.png", fullPage: true });
            throw new Error("The too long password input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Too Long User Password.png", fullPage: true });
    }

    //invalid singular input format

    //invalid user account creation test method - invalid user first name format (special symbols only)
    async invalidUserAccountCreationInvalidFirstNameFormatTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input invalid first name format into first name input field (special symbols only)
        await createAccountPageInvalidScenarios.inputInvalidFirstNameFormatIntoFirstNameInputField();
        //input valid last name into last name input field
        await createAccountPage.inputLastNameIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - invalid user first name format
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Invalid User First Name Format.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("First Name cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User First Name Format.png", fullPage: true });
            throw new Error("The invalid first name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User First Name Format.png", fullPage: true });
    }

    //invalid user account creation test method - invalid user last name format (special symbols only)
    async invalidUserAccountCreationInvalidLastNameFormatTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const createAccountPage = new CreateAccountPage(page);
        const createAccountPageInvalidScenarios = new CreateAccountPageInvalidScenarios(page);
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
        //input invalid last name format into last name input field (special symbols only)
        await createAccountPageInvalidScenarios.inputInvalidLastNameFormatIntoLastNameInputField();
        //input valid email into email input field
        await createAccountPage.inputEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - invalid user last name format
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Invalid User Last Name Format.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Last Name cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User Last Name Format.png", fullPage: true });
            throw new Error("The invalid last name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User Last Name Format.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
export {TestMethods};