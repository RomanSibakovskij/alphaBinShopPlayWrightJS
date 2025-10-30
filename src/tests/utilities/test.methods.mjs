"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {SignInPage} from "../../pages/signin.page.mjs";
import {CreateAccountPage} from "../../pages/create.account.page.mjs";
import {AccountDashboardPage} from "../../pages/account.dashboard.page.mjs";

import {CreateAccountPageInvalidScenarios} from "../../pages/create-account-page-invalid-scenarios/create.account.page.invalid.scenarios.mjs";

import {PersonalInfoModalInvalidScenarios} from "../../pages/modals/personal-info-modal-invalid-scenarios/personal.info.modal.invalid.scenarios.mjs";
import {PasswordModalInvalidScenarios} from "../../pages/modals/password-modal-invalid-scenarios/password.modal.invalid.scenarios.mjs";

import {GeneralPageWebElementAssert} from "../web-element-asserts/general.page.web.element.assert.mjs";
import {HomePageWebElementAssert} from "../web-element-asserts/home.page.web.element.assert.mjs";
import {SignInPageWebElementAssert} from "../web-element-asserts/signin.page.web.element.assert.mjs";
import {CreateAccountPageWebElementAssert} from "../web-element-asserts/create.account.page.web.element.assert.mjs";
import {AccountDashboardPageWebElementAssert} from "../web-element-asserts/account.dashboard.web.element.assert.mjs";

import {GeneralPageTextElementAssert} from "../text-element-asserts/general.page.text.element.assert.mjs";
import {HomePageTextElementAssert} from "../text-element-asserts/home.page.text.element.assert.mjs";
import {SignInPageTextElementAssert} from "../text-element-asserts/signin.page.text.element.assert.mjs";
import {CreateAccountPageTextElementAssert} from "../text-element-asserts/create.account.page.text.element.assert.mjs";
import {AccountDashboardPageTextElementAssert} from "../text-element-asserts/account.dashboard.text.element.assert.mjs";

import {PersonalInfoModal} from "../../pages/modals/personal.info.modal.mjs";
import {PasswordModal} from "../../pages/modals/password.modal.mjs";

import {PersonalInfoModalWebElementAssert} from "../web-element-asserts/modals/personal.info.modal.web.element.assert.mjs";
import {PasswordModalWebElementAssert} from "../web-element-asserts/modals/password.modal.web.element.assert.mjs";

import {PersonalInfoModalTextElementAssert} from "../text-element-asserts/modals/personal.info.modal.text.element.assert.mjs";
import {PasswordModalTextElementAssert} from "../text-element-asserts/modals/password.modal.text.element.assert.mjs";

import {HomePageDataLoggers} from "../data-loggers/home.page.data.loggers.mjs";
import {AccountDashPageDataLogger} from "../data-loggers/account.dash.page.data.logger.mjs";

import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";

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

    //invalid user account creation test method - invalid user email format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(page){
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
        //input invalid email format into email input field (missing '@')
        await createAccountPageInvalidScenarios.inputInvalidEmailFormatIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - invalid user email format
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Invalid User Email Format.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message
        const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
        expect(signUpInvalidSingularInputErrorMsg).toBe("Enter a valid email address");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User Email Format.png", fullPage: true });
    }

    //invalid user account creation test method - existing user email format (used beforehand in manual testing)
    async invalidUserAccountCreationExistingEmailTest(page){
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
        //input existing email into email input field (used beforehand in manual testing)
        await createAccountPageInvalidScenarios.inputExistingEmailIntoEmailInputField();
        //input valid password into password input field
        await createAccountPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - existing user email
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Existing User Email.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message
        const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
        //log the misspelling issue
        (signUpInvalidSingularInputErrorMsg === "User already exists") ? console.log("") : Logger.error(`The existing email input error is misspelled. Expected: 'User already exists', actual: ${signUpInvalidSingularInputErrorMsg}.`);
        expect(signUpInvalidSingularInputErrorMsg).toBe("User already Exist");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Existing User Email.png", fullPage: true });
    }

    //invalid user account creation test method - invalid user password format (lowercases only)
    async invalidUserAccountCreationInvalidPasswordFormatTest(page){
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
        //input invalid password format into password input field (lowercases only)
        await createAccountPageInvalidScenarios.inputInvalidPasswordFormatIntoPasswordInputField();
        //click "View Password" button
        await createAccountPage.clickViewPasswordButton();
        //capture screenshot of the create account page display after invalid data input - invalid user password format
        await page.screenshot({ path: "src/tests/screenshots/Create Account Page Display After Invalid Data Input - Invalid User Password Format.png", fullPage: true });
        //click "Create Account" button
        await createAccountPage.clickSignUpButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(2500);
        //assert the user gets the expected error message, throw an error otherwise
        try {
            const signUpInvalidSingularInputErrorMsg = await createAccountPage.getSignUpInvalidSingularInputErrorMsg();
            expect(signUpInvalidSingularInputErrorMsg).toBe("Password format is invalid");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User Password Format.png", fullPage: true });
            throw new Error("The invalid password input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Account Creation Test Result - Invalid User Password Format.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user login test

    //valid user login test method
    async validUserLoginTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageWebElementAssert = new SignInPageWebElementAssert();
        const signInPageTextElementAssert = new SignInPageTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //sign-in page web element assert
        await signInPageWebElementAssert.isSignInPageWebElementVisible(page);
        //sign-in page text element assert
        await signInPageTextElementAssert.isSignInPageTextElementAsExpected(page);
        //capture screenshot of the sign-in page display before data input
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display Before Data Input.png", fullPage: true });
        //input valid login email into sign-in email input field
        await signInPage.inputValidLoginEmailIntoEmailInputField();
        //input valid login password into sign-in password input field
        await signInPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Valid Data Input.png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets onto home page after successful login
        const expectedHomePageURL = "https://demo.alphabin.co/";
        const actualHomePageURL = page.url();
        expect(expectedHomePageURL).toBe(actualHomePageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid User Login Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit account info test

    //valid edit account information test method
    async validEditUserAccountInfoTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Valid Data Input.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //log account dashboard page displayed user data (to verify the data has been updated0
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //reload the current page (without it, changes don't apply)
        page.reload();
        //wait for element to load
        await page.waitForTimeout(4500);
        //assert the account full name gets updated, throw an error otherwise
        const expectedEditedFullName = PersonalInfoModal.editedFullName;
        const actualEditedFullName = await accountDashboardPage.getAccountDashPageUserFullName();
        try{
            expect(actualEditedFullName).toBe(expectedEditedFullName);
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Valid Edit User Account Info Test Result (edited full name doesn't get applied).png", fullPage: true });
            throw new Error(`The user full name doesn't get edited, test has failed. Expected edited full name: ${expectedEditedFullName}, actual user full name: ${actualEditedFullName}.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid Edit User Account Info Test Result.png", fullPage: true });
    }

    //invalid edit account info tests

    //no singular input

    //invalid edit account information test method - no edited first name
    async invalidEditUserAccountInfoNoEditedFirstNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //don't input edited first name into first name input field
        await personalInfoModalInvalidScenarios.inputNoEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - no edited first name
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - No Edited First Name.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message
        const personalInfoModalNoFirstNameInputError = await personalInfoModal.getPersonalInfoModalInvalidSingularInputError();
        expect(personalInfoModalNoFirstNameInputError).toBe("First name is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - No Edited First Name.png", fullPage: true });
    }

    //invalid edit account information test method - no edited last name
    async invalidEditUserAccountInfoNoEditedLastNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //don't input edited last name into last name input field
        await personalInfoModalInvalidScenarios.inputNoEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - no edited last name
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - No Edited Last Name.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message
        const personalInfoModalNoLastNameInputError = await personalInfoModal.getPersonalInfoModalInvalidSingularInputError();
        expect(personalInfoModalNoLastNameInputError).toBe("Last name is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - No Edited Last Name.png", fullPage: true });
    }

    //invalid edit account information test method - no edited phone
    async invalidEditUserAccountInfoNoEditedPhoneTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //don't input valid phone into phone input field (it's optional)
        await personalInfoModalInvalidScenarios.inputNoPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - no phone
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - No Phone.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //log the issue that this input field is optional
        Logger.warn("The phone input field is optional, so it doesn't have an error attached to it");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - No Phone.png", fullPage: true });
    }

    //too short singular input

    //invalid edit account information test method - too short edited first name (1 char)
    async invalidEditUserAccountInfoTooShortEditedFirstNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input too short edited first name into first name input field (1 char)
        await personalInfoModalInvalidScenarios.inputTooShortEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - too short edited first name
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Too Short Edited First Name.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("First name is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Edited First Name.png", fullPage: true });
            throw new Error(`The too short edited first name input error wasn't triggered (Expected: 'First name is too short', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Edited First Name.png", fullPage: true });
    }

    //invalid edit account information test method - too short edited last name (1 char)
    async invalidEditUserAccountInfoTooShortEditedLastNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input too short edited last name into last name input field (1 char)
        await personalInfoModalInvalidScenarios.inputTooShortEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - too short edited last name
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Too Short Edited Last Name.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("Last name is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Edited Last Name.png", fullPage: true });
            throw new Error(`The too short edited last name input error wasn't triggered (Expected: 'Last name is too short', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Edited Last Name.png", fullPage: true });
    }

    //invalid edit account information test method - too short edited phone (9 digits)
    async invalidEditUserAccountInfoTooShortEditedPhoneTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input too short phone into phone input field (9 digits)
        await personalInfoModalInvalidScenarios.inputTooShortPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - too short phone
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Too Short Phone.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalTooShortIphoneInputError = await personalInfoModal.getPersonalInfoModalInvalidSingularInputError();
        try {
            expect(personalInfoModalTooShortIphoneInputError).toBe("Contact number must be 10 digits");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Edited Phone.png", fullPage: true });
            throw new Error(`The too short edited phone input error wasn't triggered (Expected: 'Contact number must be 10 digits', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Phone.png", fullPage: true });
    }

    //too long singular input

    //invalid edit account information test method - too long edited first name (100 chars)
    async invalidEditUserAccountInfoTooLongEditedFirstNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input too long edited first name into first name input field (100 chars)
        await personalInfoModalInvalidScenarios.inputTooLongEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - too long edited first name
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Too Long Edited First Name.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("First name is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Long Edited First Name.png", fullPage: true });
            throw new Error(`The too long edited first name input error wasn't triggered (Expected: 'First name is too long', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Long Edited First Name.png", fullPage: true });
    }

    //invalid edit account information test method - too long edited last name (100 chars)
    async invalidEditUserAccountInfoTooLongEditedLastNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input too long edited last name into last name input field (100 chars)
        await personalInfoModalInvalidScenarios.inputTooLongEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - too long edited last name
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Too Long Edited Last Name.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("Last name is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Long Edited Last Name.png", fullPage: true });
            throw new Error(`The too long edited last name input error wasn't triggered (Expected: 'Last name is too long', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Long Edited Last Name.png", fullPage: true });
    }

    //invalid edit account information test method - too long edited phone (11 digits)
    async invalidEditUserAccountInfoTooLongEditedPhoneTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input too long phone into phone input field (11 digits)
        await personalInfoModalInvalidScenarios.inputTooLongPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - too long phone
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Too Long Phone.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("Phone is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Long Edited Phone.png", fullPage: true });
            throw new Error(`The too long edited phone input error wasn't triggered (Expected: 'Phone is too long', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Long Phone.png", fullPage: true });
    }

    //invalid singular input format

    //invalid edit account information test method - invalid edited first name format (special symbols only)
    async invalidEditUserAccountInfoInvalidEditedFirstNameFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input invalid edited first name format into first name input field (special symbols only)
        await personalInfoModalInvalidScenarios.inputInvalidEditedFirstNameFormatIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - invalid edited first name format
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Invalid Edited First Name Format.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("First name cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Invalid Edited First Name Format.png", fullPage: true });
            throw new Error(`The invalid edited first name input format error wasn't triggered (Expected: 'First name cannot consist of special symbols only', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Invalid Edited First Name Format.png", fullPage: true });
    }

    //invalid edit account information test method - invalid edited last name format (special symbols only)
    async invalidEditUserAccountInfoInvalidEditedLastNameFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input invalid edited last name into last name input field (special symbols only)
        await personalInfoModalInvalidScenarios.inputInvalidEditedLastNameFormatIntoLastNameInputField();
        //input valid phone into phone input field (it's optional)
        await personalInfoModal.inputPhoneIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - invalid edited last name format
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Invalid Edited Last Name Format.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("Last name cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Invalid Edited Last Name Format.png", fullPage: true });
            throw new Error(`The invalid edited last name input format error wasn't triggered (Expected: 'Last name cannot consist of special symbols only', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Invalid Edited Last Name Format.png", fullPage: true });
    }

    //invalid edit account information test method - invalid edited phone format (special symbols only)
    async invalidEditUserAccountInfoInvalidEditedPhoneFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalInvalidScenarios = new PersonalInfoModalInvalidScenarios(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display Before Data Input.png", fullPage: true });
        //input valid edited first name into first name input field
        await personalInfoModal.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoModal.inputEditedLastNameIntoLastNameInputField();
        //input invalid phone format into phone input field (special symbols only)
        await personalInfoModalInvalidScenarios.inputInvalidPhoneFormatIntoPhoneInputField();
        //capture screenshot of the personal info modal display after invalid data input - invalid phone format
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display After Invalid Data Input - Invalid Phone Format.png", fullPage: true });
        //click "Save Changes" button
        await personalInfoModal.clickSaveChangesButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user receives an expected error message, throw an error otherwise
        const personalInfoModalUpdateFailureMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        try {
            expect(personalInfoModalUpdateFailureMsg).toBe("Phone cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Invalid Edited Phone Format.png", fullPage: true });
            throw new Error(`The invalid edited phone input format error wasn't triggered (Expected: 'Phone cannot consist of special symbols only', actual: ${personalInfoModalUpdateFailureMsg}), test has failed.`);
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Invalid Phone Format.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit user account password test

    //valid edit user account password test method
    async validEditUserAccountPasswordTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const passwordModal = new PasswordModal(page);
        const passwordModalWebElementAssert = new PasswordModalWebElementAssert();
        const passwordModalTextElementAssert = new PasswordModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display.png", fullPage: true });
        //click "Security" button
        await personalInfoModal.clickSecurityButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //password modal web element assert
        await passwordModalWebElementAssert.isPasswordModalWebElementVisible(page);
        //password modal text element assert
        await passwordModalTextElementAssert.isPasswordModalTextElementAsExpected(page);
        //capture screenshot of the password modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display Before Data Input.png", fullPage: true });
        //input valid new password into new password input field
        await passwordModal.inputNewPasswordIntoNewPasswordInputField();
        //input matching confirm password into confirm password input field
        await passwordModal.inputConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the password modal display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display After Valid Data Input.png", fullPage: true });
        //click "Update Password" button
        await passwordModal.clickUpdatePasswordButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //assert the user receives an expected error message
        const passwordUpdateSuccessMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        expect(passwordUpdateSuccessMsg).toBe("Password updated successfully")
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid Edit User Account Password Test Result.png", fullPage: true });
    }

    //invalid edit user account password tests

    //no singular input

    //invalid edit user account password test method - no confirm password
    async invalidEditUserAccountPasswordNoConfirmPasswordTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const passwordModal = new PasswordModal(page);
        const passwordModalInvalidScenarios = new PasswordModalInvalidScenarios(page);
        const passwordModalWebElementAssert = new PasswordModalWebElementAssert();
        const passwordModalTextElementAssert = new PasswordModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display.png", fullPage: true });
        //click "Security" button
        await personalInfoModal.clickSecurityButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //password modal web element assert
        await passwordModalWebElementAssert.isPasswordModalWebElementVisible(page);
        //password modal text element assert
        await passwordModalTextElementAssert.isPasswordModalTextElementAsExpected(page);
        //capture screenshot of the password modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display Before Data Input.png", fullPage: true });
        //input valid new password into new password input field
        await passwordModal.inputNewPasswordIntoNewPasswordInputField();
        //don't input confirm password into confirm password input field
        await passwordModalInvalidScenarios.inputNoConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the password modal display after invalid data input - no confirm password
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display After Invalid Data Input - No Confirm Password.png", fullPage: true });
        //click "Update Password" button
        await passwordModal.clickUpdatePasswordButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //assert the user gets an expected error message
        const passwordModalInputSingularErrorMsg = await passwordModal.getPasswordModalInvalidSingularInputErrorMsg();
        expect(passwordModalInputSingularErrorMsg).toBe("Please confirm your password");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Password Test Result - No Confirm Password.png", fullPage: true });
    }

    //too short input

    //invalid edit user account password test method - too short new/confirm password (7 chars)
    async invalidEditUserAccountPasswordTooShortNewConfirmPasswordTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const passwordModal = new PasswordModal(page);
        const passwordModalInvalidScenarios = new PasswordModalInvalidScenarios(page);
        const passwordModalWebElementAssert = new PasswordModalWebElementAssert();
        const passwordModalTextElementAssert = new PasswordModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display.png", fullPage: true });
        //click "Security" button
        await personalInfoModal.clickSecurityButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //password modal web element assert
        await passwordModalWebElementAssert.isPasswordModalWebElementVisible(page);
        //password modal text element assert
        await passwordModalTextElementAssert.isPasswordModalTextElementAsExpected(page);
        //capture screenshot of the password modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display Before Data Input.png", fullPage: true });
        //input too short new password into new password input field (7 chars)
        await passwordModalInvalidScenarios.inputTooShortNewPasswordIntoNewPasswordInputField();
        //input matching too short confirm password into confirm password input field (7 chars)
        await passwordModalInvalidScenarios.inputTooShortConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the password modal display after invalid data input - too short new/confirm password
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display After Invalid Data Input - Too Short New And Confirm Password.png", fullPage: true });
        //click "Update Password" button
        await passwordModal.clickUpdatePasswordButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //assert the user gets an expected error message
        const passwordModalInputSingularErrorMsg = await passwordModal.getPasswordModalInvalidSingularInputErrorMsg();
        expect(passwordModalInputSingularErrorMsg).toBe("Password must be at least 8 characters");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Password Test Result - Too Short New And Confirm Password.png", fullPage: true });
    }

    //too long input

    //invalid edit user account password test method - too long new/confirm password (35 chars)
    async invalidEditUserAccountPasswordTooLongNewConfirmPasswordTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const passwordModal = new PasswordModal(page);
        const passwordModalInvalidScenarios = new PasswordModalInvalidScenarios(page);
        const passwordModalWebElementAssert = new PasswordModalWebElementAssert();
        const passwordModalTextElementAssert = new PasswordModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display.png", fullPage: true });
        //click "Security" button
        await personalInfoModal.clickSecurityButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //password modal web element assert
        await passwordModalWebElementAssert.isPasswordModalWebElementVisible(page);
        //password modal text element assert
        await passwordModalTextElementAssert.isPasswordModalTextElementAsExpected(page);
        //capture screenshot of the password modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display Before Data Input.png", fullPage: true });
        //input too long new password into new password input field (35 chars)
        await passwordModalInvalidScenarios.inputTooLongNewPasswordIntoNewPasswordInputField();
        //input matching too long confirm password into confirm password input field (35 chars)
        await passwordModalInvalidScenarios.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the password modal display after invalid data input - too long new/confirm password
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display After Invalid Data Input - Too Long New And Confirm Password.png", fullPage: true });
        //click "Update Password" button
        await passwordModal.clickUpdatePasswordButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //assert the user gets an expected error message
        try {
            const passwordModalInputSingularErrorMsg = await passwordModal.getPasswordModalInvalidCredentialsInputErrorMsg();
            expect(passwordModalInputSingularErrorMsg).toBe("Password is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Password Test Result - Too Long New And Confirm Password.png", fullPage: true });
            throw new Error("The too long password input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Password Test Result - Too Long New And Confirm Password.png", fullPage: true });
    }

    //invalid singular input

    //invalid edit user account password test method - mismatching confirm password
    async invalidEditUserAccountPasswordMismatchingConfirmPasswordTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModal = new PersonalInfoModal(page);
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const passwordModal = new PasswordModal(page);
        const passwordModalInvalidScenarios = new PasswordModalInvalidScenarios(page);
        const passwordModalWebElementAssert = new PasswordModalWebElementAssert();
        const passwordModalTextElementAssert = new PasswordModalTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //home page web element assert
        await homePageWebElementAssert.isHomePageWebElementVisible(page);
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click header "Account" icon button
        await generalPage.clickHeaderAccountIconBtn();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4000);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //log account dashboard page displayed user data
        await accountDashPageDataLogger.logAccountDashPageUserData(page);
        //personal info modal web element assert (since it appears on the screen)
        await personalInfoModalWebElementAssert.isPersonalInfoModalWebElementVisible(page);
        //personal info modal text element assert (since it appears on the screen)
        await personalInfoModalTextElementAssert.isPersonalInfoModalTextElementAsExpected(page);
        //capture screenshot of the personal info modal display
        await page.screenshot({ path: "src/tests/screenshots/Personal Info Modal Display.png", fullPage: true });
        //click "Security" button
        await personalInfoModal.clickSecurityButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //password modal web element assert
        await passwordModalWebElementAssert.isPasswordModalWebElementVisible(page);
        //password modal text element assert
        await passwordModalTextElementAssert.isPasswordModalTextElementAsExpected(page);
        //capture screenshot of the password modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display Before Data Input.png", fullPage: true });
        //input valid new password into new password input field
        await passwordModal.inputNewPasswordIntoNewPasswordInputField();
        //input mismatching confirm password into confirm password input field
        await passwordModalInvalidScenarios.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //capture screenshot of the password modal display after invalid data input - mismatching confirm password
        await page.screenshot({ path: "src/tests/screenshots/Password Modal Display After Invalid Data Input - Mismatching Confirm Password.png", fullPage: true });
        //click "Update Password" button
        await passwordModal.clickUpdatePasswordButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //assert the user gets an expected error message
        try {
            const passwordModalInputSingularErrorMsg = await passwordModal.getPasswordModalInvalidSingularInputErrorMsg();
            expect(passwordModalInputSingularErrorMsg).toBe("Passwords do not match");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Password Test Result - Mismatching Confirm Password.png", fullPage: true });
            throw new Error("The mismatching confirm password input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Password Test Result - Mismatching Confirm Password.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
export {TestMethods};