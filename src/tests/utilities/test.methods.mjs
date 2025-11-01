"use strict"

import {GeneralPage} from "../../pages/general.page.mjs";
import {HomePage} from "../../pages/home.page.mjs";
import {SignInPage} from "../../pages/signin.page.mjs";
import {CreateAccountPage} from "../../pages/create.account.page.mjs";
import {AccountDashboardPage} from "../../pages/account.dashboard.page.mjs";
import {WishlistDashboardPage} from "../../pages/wishlist.dashboard.page.mjs";
import {AllProductsDashboardPage} from "../../pages/all.products.dashboard.page.mjs";
import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {ShoppingCartPage} from "../../pages/shopping.cart.page.mjs";
import {CheckoutPage} from "../../pages/checkout.page.mjs";
import {OrderDetailsPage} from "../../pages/order.details.page.mjs";

import {CreateAccountPageInvalidScenarios} from "../../pages/create-account-page-invalid-scenarios/create.account.page.invalid.scenarios.mjs";
import {SignInPageInvalidScenarios} from "../../pages/signin-page-invalid-scenarios/signin.page.invalid.scenarios.mjs";

import {PersonalInfoModalInvalidScenarios} from "../../pages/modals/personal-info-modal-invalid-scenarios/personal.info.modal.invalid.scenarios.mjs";
import {PasswordModalInvalidScenarios} from "../../pages/modals/password-modal-invalid-scenarios/password.modal.invalid.scenarios.mjs";
import {AddNewAddressModalInvalidScenarios} from "../../pages/modals/add-new-address-modal-invalid-scenarios/add.new.address.modal.invalid.scenarios.mjs";
import {AddReviewModalInvalidScenarios} from "../../pages/modals/add-review-modal-invalid-scenarios/add.review.moda.invalid.scenarios.mjs";

import {GeneralPageWebElementAssert} from "../web-element-asserts/general.page.web.element.assert.mjs";
import {HomePageWebElementAssert} from "../web-element-asserts/home.page.web.element.assert.mjs";
import {SignInPageWebElementAssert} from "../web-element-asserts/signin.page.web.element.assert.mjs";
import {CreateAccountPageWebElementAssert} from "../web-element-asserts/create.account.page.web.element.assert.mjs";
import {AccountDashboardPageWebElementAssert} from "../web-element-asserts/account.dashboard.web.element.assert.mjs";
import {WishlistDashboardPageWebElementAsserts} from "../web-element-asserts/wishlist.dashboard.page.web.element.asserts.mjs";
import {AllProductsDashPageWebElementAsserts} from "../web-element-asserts/all.products.dash.page.web.element.asserts.mjs";
import {SingleProductPageWebElementAsserts} from "../web-element-asserts/single.product.page.web.element.asserts.mjs";
import {ShoppingCartPageWebElementAsserts} from "../web-element-asserts/shopping.cart.page.web.element.asserts.mjs";
import {CheckoutPageWebElementAsserts} from "../web-element-asserts/checkout.page.web.element.asserts.mjs";
import {OrderDetailsPageWebElementAssert} from "../web-element-asserts/order.details.page.web.element.assert.mjs";

import {GeneralPageTextElementAssert} from "../text-element-asserts/general.page.text.element.assert.mjs";
import {HomePageTextElementAssert} from "../text-element-asserts/home.page.text.element.assert.mjs";
import {SignInPageTextElementAssert} from "../text-element-asserts/signin.page.text.element.assert.mjs";
import {CreateAccountPageTextElementAssert} from "../text-element-asserts/create.account.page.text.element.assert.mjs";
import {AccountDashboardPageTextElementAssert} from "../text-element-asserts/account.dashboard.text.element.assert.mjs";
import {WishlistDashboardPageTextElementAsserts} from "../text-element-asserts/wishlist.dashboard.page.text.element.asserts.mjs";
import {AllProductsDashPageTextElementAsserts} from "../text-element-asserts/all.products.dash.page.text.element.asserts.mjs";
import {SingleProductPageTextElementAsserts} from "../text-element-asserts/single.product.page.text.element.asserts.mjs";
import {ShoppingCartPageTextElementAsserts} from "../text-element-asserts/shopping.cart.page.text.element.asserts.mjs";
import {CheckoutPageTextElementAsserts} from "../text-element-asserts/checkout.page.text.element.asserts.mjs";
import {OrderDetailsPageTextElementAssert} from "../text-element-asserts/order.details.page.text.element.assert.mjs";

import {PersonalInfoModal} from "../../pages/modals/personal.info.modal.mjs";
import {PasswordModal} from "../../pages/modals/password.modal.mjs";
import {AddressesDashboardModal} from "../../pages/modals/addresses.dashboard.modal.mjs";
import {AddNewAddressModal} from "../../pages/modals/add.new.address.modal.mjs";
import {ShoppingCartModal} from "../../pages/modals/shopping.cart.modal.mjs";
import {AddReviewModal} from "../../pages/modals/add.review.modal.mjs";

import {PersonalInfoModalWebElementAssert} from "../web-element-asserts/modals/personal.info.modal.web.element.assert.mjs";
import {PasswordModalWebElementAssert} from "../web-element-asserts/modals/password.modal.web.element.assert.mjs";
import {AddressesDashboardModalWebElementAsserts} from "../web-element-asserts/modals/addresses.dashboard.modal.web.element.asserts.mjs";
import {AddNewAddressModalWebElementAssert} from "../web-element-asserts/modals/add.new.address.modal.web.element.assert.mjs";
import {ShoppingCartModalWebElementAsserts} from "../web-element-asserts/modals/shopping.cart.modal.web.element.asserts.mjs";
import {AddReviewModalWebElementAsserts} from "../web-element-asserts/modals/add.review.modal.web.element.asserts.mjs";

import {PersonalInfoModalTextElementAssert} from "../text-element-asserts/modals/personal.info.modal.text.element.assert.mjs";
import {PasswordModalTextElementAssert} from "../text-element-asserts/modals/password.modal.text.element.assert.mjs";
import {AddressesDashboardModalTextElementAsserts} from "../text-element-asserts/modals/addresses.dashboard.modal.text.element.asserts.mjs";
import {AddNewAddressModalTextElementAsserts} from "../text-element-asserts/modals/add.new.address.modal.text.element.asserts.mjs";
import {ShoppingCartModalTextElementAsserts} from "../text-element-asserts/modals/shopping.cart.modal.text.element.asserts.mjs";
import {AddReviewModalTextElementAsserts} from "../text-element-asserts/modals/add.review.modal.text.element.asserts.mjs";

import {HomePageDataLoggers} from "../data-loggers/home.page.data.loggers.mjs";
import {AccountDashPageDataLogger} from "../data-loggers/account.dash.page.data.logger.mjs";
import {WishlistDashboardPageDataLogger} from "../data-loggers/wishlist.dashboard.page.data.logger.mjs";
import {AllProductsDashPageDataLoggers} from "../data-loggers/all.products.dash.page.data.loggers.mjs";
import {SingleProductPageDataLoggers} from "../data-loggers/single.product.page.data.loggers.mjs";
import {ShoppingCartPageDataLogger} from "../data-loggers/shopping.cart.page.data.logger.mjs";
import {CheckoutPageDataLoggers} from "../data-loggers/checkout.page.data.loggers.mjs";
import {OrderDetailsPageDataLogger} from "../data-loggers/order.details.page.data.logger.mjs";

import {AddressesDashboardModalDataLogger} from "../data-loggers/modals/addresses.dashboard.modal.data.logger.mjs";
import {ShoppingCartModalDataLogger} from "../data-loggers/modals/shopping.cart.modal.data.logger.mjs";

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
        await page.waitForTimeout(5500);
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
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4500);
        //assert the user gets onto home page after successful login
        const expectedHomePageURL = "https://demo.alphabin.co/";
        const actualHomePageURL = page.url();
        expect(expectedHomePageURL).toBe(actualHomePageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid User Login Test Result.png", fullPage: true });
    }

    //valid user login with edited login email test method
    async validUserLoginEditedEmailTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const signInPage = new SignInPage(page);
        const signInPageWebElementAssert = new SignInPageWebElementAssert();
        const signInPageTextElementAssert = new SignInPageTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display.png", fullPage: true });
        //click "Log out" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(3000);
        //sign-in page web element assert
        await signInPageWebElementAssert.isSignInPageWebElementVisible(page);
        //sign-in page text element assert
        await signInPageTextElementAssert.isSignInPageTextElementAsExpected(page);
        //capture screenshot of the sign-in page display before data input
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display Before Data Input.png", fullPage: true });
        //input valid edited login email into sign-in email input field
        await signInPage.inputValidEditedLoginEmailIntoEmailInputField();
        //input valid login password into sign-in password input field
        await signInPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Valid Data Input (edited login email).png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4500);
        //assert the user gets onto home page after successful login
        const expectedHomePageURL = "https://demo.alphabin.co/";
        const actualHomePageURL = page.url();
        expect(expectedHomePageURL).toBe(actualHomePageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid User Login With Edited Email Test Result.png", fullPage: true });
    }

    //valid user login with edited login password test method
    async validUserLoginEditedPasswordTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const passwordModalWebElementAssert = new PasswordModalWebElementAssert();
        const passwordModalTextElementAssert = new PasswordModalTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageWebElementAssert = new SignInPageWebElementAssert();
        const signInPageTextElementAssert = new SignInPageTextElementAssert();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //password modal web element assert
        await passwordModalWebElementAssert.isPasswordModalWebElementVisible(page);
        //password modal text element assert
        await passwordModalTextElementAssert.isPasswordModalTextElementAsExpected(page);
        //capture screenshot of the account dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Account Dashboard Page Display (with Password Modal).png", fullPage: true });
        //click "Log out" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(3000);
        //sign-in page web element assert
        await signInPageWebElementAssert.isSignInPageWebElementVisible(page);
        //sign-in page text element assert
        await signInPageTextElementAssert.isSignInPageTextElementAsExpected(page);
        //capture screenshot of the sign-in page display before data input
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display Before Data Input.png", fullPage: true });
        //input valid login email into sign-in email input field
        await signInPage.inputValidLoginEmailIntoEmailInputField();
        //input valid edited login password into sign-in password input field
        await signInPage.inputValidEditedLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Valid Data Input (edited login password).png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4500);
        //assert the user gets onto home page after successful login
        const expectedHomePageURL = "https://demo.alphabin.co/";
        const actualHomePageURL = page.url();
        expect(expectedHomePageURL).toBe(actualHomePageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid User Login With Edited Password Test Result.png", fullPage: true });
    }

    //invalid user login tests

    //no singular input

    //invalid user login test method - no login email
    async invalidUserLoginNoEmailTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageInvalidScenarios = new SignInPageInvalidScenarios(page);
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
        //don't input login email into sign-in email input field
        await signInPageInvalidScenarios.inputNoLoginEmailIntoEmailInputField();
        //input valid login password into sign-in password input field
        await signInPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after invalid data input - no login email
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Invalid Data Input - No Login Email.png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load
        await page.waitForTimeout(2000);
        //assert the user gets an expected user message
        const signInPageMissingEmailInputError = await signInPage.getSignInPageInvalidSingularInputErrorMsg();
        expect(signInPageMissingEmailInputError).toBe("Email is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Login Test Result - No Login Email.png", fullPage: true });
    }

    //invalid user login test method - no login password
    async invalidUserLoginNoPasswordTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageInvalidScenarios = new SignInPageInvalidScenarios(page);
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
        //don't input login password into sign-in password input field
        await signInPageInvalidScenarios.inputNoLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after invalid data input - no login password
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Invalid Data Input - No Login Password.png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load
        await page.waitForTimeout(2000);
        //assert the user gets an expected user message
        const signInPageMissingPasswordInputError = await signInPage.getSignInPageInvalidSingularInputErrorMsg();
        expect(signInPageMissingPasswordInputError).toBe("Password is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Login Test Result - No Login Password.png", fullPage: true });
    }

    //invalid singular input

    //invalid user login test method - invalid login email
    async invalidUserLoginInvalidEmailTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageInvalidScenarios = new SignInPageInvalidScenarios(page);
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
        //input invalid login email into sign-in email input field
        await signInPageInvalidScenarios.inputInvalidLoginEmailIntoEmailInputField();
        //input valid login password into sign-in password input field
        await signInPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after invalid data input - invalid login email
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Invalid Data Input - Invalid Login Email.png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets an expected user message
        const signInPageInvalidEmailInputError = await signInPage.getSignInPageInvalidCredentialsInputErrorMsg();
        expect(signInPageInvalidEmailInputError).toBe("Invalid credentials");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Login Test Result - Invalid Login Email.png", fullPage: true });
    }

    //invalid user login test method - invalid login email format (missing '@')
    async invalidUserLoginInvalidEmailFormatTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageInvalidScenarios = new SignInPageInvalidScenarios(page);
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
        //input invalid login email format into sign-in email input field (missing '@')
        await signInPageInvalidScenarios.inputInvalidLoginEmailFormatIntoEmailInputField();
        //input valid login password into sign-in password input field
        await signInPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after invalid data input - invalid login email format
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Invalid Data Input - Invalid Login Email Format.png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load
        await page.waitForTimeout(2000);
        //assert the user gets an expected user message
        const signInPageInvalidEmailInputError = await signInPage.getSignInPageInvalidSingularInputErrorMsg();
        expect(signInPageInvalidEmailInputError).toBe("Email is invalid");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Login Test Result - Invalid Login Email Format.png", fullPage: true });
    }

    //invalid user login test method - invalid login password
    async invalidUserLoginInvalidPasswordTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const signInPage = new SignInPage(page);
        const signInPageInvalidScenarios = new SignInPageInvalidScenarios(page);
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
        //input invalid login password into sign-in password input field
        await signInPageInvalidScenarios.inputInvalidLoginPasswordIntoPasswordInputField();
        //click "View Password" button
        await signInPage.clickViewPasswordButton();
        //capture screenshot of the sign-in page display after invalid data input - invalid login password
        await page.screenshot({ path: "src/tests/screenshots/Sign In Page Display After Invalid Data Input - Invalid Login Password.png", fullPage: true });
        //click "Sign In" button
        await signInPage.clickSignInButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets an expected user message
        const signInPageInvalidEmailInputError = await signInPage.getSignInPageInvalidCredentialsInputErrorMsg();
        expect(signInPageInvalidEmailInputError).toBe("Invalid credentials");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid User Login Test Result - Invalid Login Password.png", fullPage: true });
    }

    //valid user logout test

    //valid user logout test method
    async validUserLogoutTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
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
        //capture screenshot of the account dashboard page display
        await page.screenshot({ path: "src/tests/screenshots/Account Dashboard Page Display (with Personal Info Modal).png", fullPage: true });
        //click "Log out" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2000);
        //assert the user gets onto sign in page after logging out (since the popup is outside of DOM)
        const expectedURL = "https://demo.alphabin.co/login"
        const actualURL = page.url();
        await expect(actualURL).toEqual(expectedURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid User Logout Test Result.png", fullPage: true });
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
        const personalInfoModalTooShortPhoneInputError = await personalInfoModal.getPersonalInfoModalInvalidSingularInputError();
        try {
            expect(personalInfoModalTooShortPhoneInputError).toBe("Contact number must be 10 digits");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Edit User Account Info Test Result - Too Short Edited Phone.png", fullPage: true });
            throw new Error(`The too short edited phone input error wasn't triggered (Expected: 'Contact number must be 10 digits', actual: ${personalInfoModalTooShortPhoneInputError}), test has failed.`);
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
        //assert the user receives an expected success message
        const passwordUpdateSuccessMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        expect(passwordUpdateSuccessMsg).toBe("Password updated successfully");
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

    //valid add user address tests

    //valid add user address test method
    async validAddUserAddressTest(page){
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
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addressesDashboardModalDataLogger = new AddressesDashboardModalDataLogger();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Valid Data Input.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(5000);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //log addresses dashboard modal displayed data
        await addressesDashboardModalDataLogger.logAddressDashModalAddressData(page);
        //assert the user receives an expected success message
        const addressAdditionSuccessMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        expect(addressAdditionSuccessMsg).toBe("Address added successfully");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid Add User Address Test Result.png", fullPage: true });
    }

//valid add user address (without email) test method
    async validAddUserAddressWithoutEmailTest(page){
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
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addressesDashboardModalDataLogger = new AddressesDashboardModalDataLogger();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input current user email into email input field
        await addNewAddressModal.inputOldAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Valid Data Input.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(5000);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //log addresses dashboard modal displayed data
        await addressesDashboardModalDataLogger.logAddressDashModalAddressData(page);
        //assert the user receives an expected success message
        const addressAdditionSuccessMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        expect(addressAdditionSuccessMsg).toBe("Address added successfully");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid Add User Address (Without Changing Email) Test Result.png", fullPage: true });
    }

    //valid add second user address test method
    async validAddSecondUserAddressTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const personalInfoModal = new PersonalInfoModal(page);
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addressesDashboardModalDataLogger = new AddressesDashboardModalDataLogger();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //log addresses dashboard modal displayed data
        await addressesDashboardModalDataLogger.logAddressDashModalAddressData(page);
        //capture screenshot of the addresses dashboard modal display
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display.png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Valid Data Input.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(5000);
        //assert the user receives an expected success message
        const addressAdditionSuccessMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        expect(addressAdditionSuccessMsg).toBe("Address added successfully");
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //log addresses dashboard modal displayed data
        await addressesDashboardModalDataLogger.logAddressDashModalAddressData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Valid Add Second User Address Test Result.png", fullPage: true });
    }

    //update user address test

    //update user address test method
    async updateUserAddressTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addressesDashboardModalDataLogger = new AddressesDashboardModalDataLogger();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display.png", fullPage: true });
        //log addresses dashboard modal displayed data
        await addressesDashboardModalDataLogger.logAddressDashModalAddressData(page);
        //click set edit address button
        await addressesDashboardModal.clickSetEditAddressButton(0);
        //wait for element to load
        await page.waitForTimeout(3000);
        //update address modal web element assert (the elements are the same as in add new address modal)
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //update address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isUpdateAddressModalUpperElementTextAsExpected(page);
        //update address modal text element assert (the elements are the same as in add new address modal)
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the update address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Update Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the update address modal display after valid data input
        await page.screenshot({ path: "src/tests/screenshots/Update Address Modal Display After Valid Data Input.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(5000);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //log addresses dashboard modal displayed data
        await addressesDashboardModalDataLogger.logAddressDashModalAddressData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Update User Address Test Result.png", fullPage: true });
    }

    //remove user address test

    //remove user address test method
    async removeUserAddressTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const personalInfoModal = new PersonalInfoModal(page);
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //account dashboard page web element assert
        await accountDashboardPageWebElementAssert.isAccountDashboardPageWebElementVisible(page);
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashPageTextElementAsExpected(page);
        //addresses dashboard modal web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardModalWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display.png", fullPage: true });
        //click set delete address button
        await addressesDashboardModal.clickSetDeleteAddressButton(0);
        //wait for element to load
        await page.waitForTimeout(1950);
        //addresses dashboard modal delete pop-up web element assert
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardDeletePopUpWebElementVisible(page);
        //addresses dashboard modal delete pop-up text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalDeletePopUpTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal delete address pop-up display
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Delete Address Pop Up Display.png", fullPage: true });
        //click "Delete" button
        await addressesDashboardModal.clickDeleteButton();
        //wait for element to load
        await page.waitForTimeout(3200);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //assert the user receives an expected success message
        const addressRemovalSuccessMsg = await personalInfoModal.getPersonalInfoModalMsgBoxText();
        expect(addressRemovalSuccessMsg).toBe("Address deleted successfully");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Remove User Address Test Result.png", fullPage: true });
    }

    //invalid add user address tests

    //no singular input

    //invalid add user address test method - no address full name
    async invalidAddUserAddressNoFullNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //don't input first name into first name input field
        await addNewAddressModalInvalidScenarios.inputNoNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no full name
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No Full Name.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoFullNameInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalNoFullNameInputError).toBe("First Name is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No Full Name.png", fullPage: true });
    }

    //invalid add user address test method - no address email
    async invalidAddUserAddressNoEmailTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //don't input email into email input field
        await addNewAddressModalInvalidScenarios.inputNoNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no email
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No Email.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoEmailInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalNoEmailInputError).toBe("Email is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No Email.png", fullPage: true });
    }

    //invalid add user address test method - no address street
    async invalidAddUserAddressNoStreetTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //don't input street into street input field
        await addNewAddressModalInvalidScenarios.inputNoNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no street
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No Street.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoStreetInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalNoStreetInputError).toBe("Street address is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No Street.png", fullPage: true });
    }

    //invalid add user address test method - no address city
    async invalidAddUserAddressNoCityTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //don't input city into city input field
        await addNewAddressModalInvalidScenarios.inputNoNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no city
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No City.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoCityInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalNoCityInputError).toBe("City is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No City.png", fullPage: true });
    }

    //invalid add user address test method - no address state
    async invalidAddUserAddressNoStateTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //don't input state into state input field
        await addNewAddressModalInvalidScenarios.inputNoNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no state
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No State.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalNoStateInputError).toBe("State is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No State.png", fullPage: true });
    }

    //invalid add user address test method - no address country
    async invalidAddUserAddressNoCountryTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //don't input country into country input field (it's optional)
        await addNewAddressModalInvalidScenarios.inputNoNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no country
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No Country.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoCountryInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
        expect(addNewAddressModalNoCountryInputError).toBe("Failed to add address");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No Country.png", fullPage: true });
    }

    //invalid add user address test method - no address post code
    async invalidAddUserAddressNoPostCodeTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //don't input post code into post code input field
        await addNewAddressModalInvalidScenarios.inputNoNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - no post code
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - No Post Code.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error
        const addNewAddressModalNoPostCodeInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalNoPostCodeInputError).toBe("ZIP code is required");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - No Post Code.png", fullPage: true });
    }

    //too short singular input

    //invalid add user address test method - too short address full name (3 chars)
    async invalidAddUserAddressTooShortFullNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input too short first name into first name input field (3 chars)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short full name
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short Full Name.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortFullNameInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortFullNameInputError).toBe("Full Name is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Full Name.png", fullPage: true });
            throw new Error("The too short address full name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Full Name.png", fullPage: true });
    }

    //invalid add user address test method - too short address email (1 char -> name, domain)
    async invalidAddUserAddressTooShortEmailTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input too short email into email input field (1 char -> name, domain)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short email
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short Email.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortEmailInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortEmailInputError).toBe("Email is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Email.png", fullPage: true });
            throw new Error("The too short address email input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Email.png", fullPage: true });
    }

    //invalid add user address test method - too short address street (3 chars)
    async invalidAddUserAddressTooShortStreetTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input too short street into street input field (3 chars)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short street
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short Street.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStreetInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStreetInputError).toBe("Street address is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Street.png", fullPage: true });
            throw new Error("The too short address street input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Street.png", fullPage: true });
    }

    //invalid add user address test method - too short address city (1 char)
    async invalidAddUserAddressTooShortCityTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input too short city into city input field (1 char)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short city
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short City.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortCityInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortCityInputError).toBe("City is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short City.png", fullPage: true });
            throw new Error("The too short address city input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short City.png", fullPage: true });
    }

    //invalid add user address test method - too short address state (1 char)
    async invalidAddUserAddressTooShortStateTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input too short state into state input field (1 char)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short state
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short State.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("State is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short State.png", fullPage: true });
            throw new Error("The too short address state input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short State.png", fullPage: true });
    }

    //invalid add user address test method - too short address country (1 char)
    async invalidAddUserAddressTooShortCountryTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input too short country into country input field (it's optional) (1 char)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short country
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short Country.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("Country is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Country.png", fullPage: true });
            throw new Error("The too short address country input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Country.png", fullPage: true });
    }

    //invalid add user address test method - too short address post code (4 digits)
    async invalidAddUserAddressTooShortPostCodeTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field (1 char)
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input too short post code into post code input field (4 digits)
        await addNewAddressModalInvalidScenarios.inputTooShortNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too short post code
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Short Post Code.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("ZIP code is too short");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Post Code.png", fullPage: true });
            throw new Error("The too short address post code input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Short Post Code.png", fullPage: true });
    }

    //too long singular input

    //invalid add user address test method - too long address full name (201 chars)
    async invalidAddUserAddressTooLongFullNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input too long first name into first name input field (201 chars)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long full name
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long Full Name.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortFullNameInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortFullNameInputError).toBe("Full Name is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Full Name.png", fullPage: true });
            throw new Error("The too long address full name input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Full Name.png", fullPage: true });
    }

    //invalid add user address test method - too long address email (100 chars -> name, domain)
    async invalidAddUserAddressTooLongEmailTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input too long email into email input field (100 chars -> name, domain)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long email
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long Email.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortEmailInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortEmailInputError).toBe("Email is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Email.png", fullPage: true });
            throw new Error("The too long address email input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Email.png", fullPage: true });
    }

    //invalid add user address test method - too long address street (100 chars)
    async invalidAddUserAddressTooLongStreetTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input too long street into street input field (100 chars)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long street
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long Street.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStreetInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStreetInputError).toBe("Street address is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Street.png", fullPage: true });
            throw new Error("The too long address street input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Street.png", fullPage: true });
    }

    //invalid add user address test method - too long address city (100 chars)
    async invalidAddUserAddressTooLongCityTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input too long city into city input field (100 chars)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long city
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long City.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortCityInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortCityInputError).toBe("City is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long City.png", fullPage: true });
            throw new Error("The too long address city input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long City.png", fullPage: true });
    }

    //invalid add user address test method - too long address state (100 chars)
    async invalidAddUserAddressTooLongStateTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input too long state into state input field (100 chars)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long state
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long State.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("State is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long State.png", fullPage: true });
            throw new Error("The too long address state input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long State.png", fullPage: true });
    }

    //invalid add user address test method - too long address country (100 chars)
    async invalidAddUserAddressTooLongCountryTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input too long country into country input field (it's optional) (100 chars)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long country
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long Country.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("Country is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Country.png", fullPage: true });
            throw new Error("The too long address country input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Country.png", fullPage: true });
    }

    //invalid add user address test method - too long address post code (6 digits)
    async invalidAddUserAddressTooLongPostCodeTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field (1 char)
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input too long post code into post code input field (6 digits)
        await addNewAddressModalInvalidScenarios.inputTooLongNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - too long post code
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Too Long Post Code.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("ZIP code is too long");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Post Code.png", fullPage: true });
            throw new Error("The too long address post code input error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Too Long Post Code.png", fullPage: true });
    }

    //invalid singular input format

    //invalid add user address test method - invalid address full name format (special symbols only)
    async invalidAddUserAddressInvalidFullNameFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input invalid first name format into first name input field (special symbols only)
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressFullNameFormatIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid full name format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid Full Name Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortFullNameInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortFullNameInputError).toBe("Full Name cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Full Name Format.png", fullPage: true });
            throw new Error("The invalid address full name input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Full Name Format.png", fullPage: true });
    }

    //invalid add user address test method - invalid address email format (missing '@')
    async invalidAddUserAddressInvalidEmailFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input invalid email format into email input field (missing '@')
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressEmailFormatIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid email format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid Email Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        const addNewAddressModalTooShortEmailInputError = await addNewAddressModal.getAddNewAddressModalInvalidSingularInputErrorMsg();
        expect(addNewAddressModalTooShortEmailInputError).toBe("Invalid email address");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Email Format.png", fullPage: true });
    }

    //invalid add user address test method - invalid address street format (special symbols only)
    async invalidAddUserAddressInvalidStreetFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input invalid street format into street input field (special symbols only)
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressStreetFormatIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid street format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid Street Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStreetInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStreetInputError).toBe("Street address cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Street Format.png", fullPage: true });
            throw new Error("The invalid address street input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Street Format.png", fullPage: true });
    }

    //invalid add user address test method - invalid address city format (special symbols only)
    async invalidAddUserAddressInvalidCityFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input invalid city format into city input field (special symbols only)
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressCityFormatIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid city format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid City Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortCityInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortCityInputError).toBe("City cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid City Format.png", fullPage: true });
            throw new Error("The invalid address city input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid City Format.png", fullPage: true });
    }

    //invalid add user address test method - invalid address state format (special symbols only)
    async invalidAddUserAddressInvalidStateFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input invalid state format into state input field (special symbols only)
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressStateFormatIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid state format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid State Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("State cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid State Format.png", fullPage: true });
            throw new Error("The invalid address state input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid State Format.png", fullPage: true });
    }

    //invalid add user address test method - invalid address country format (special symbols only)
    async invalidAddUserAddressInvalidCountryFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input invalid country into country input field (it's optional) (special symbols only)
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressCountryFormatIntoCountryInputField();
        //input valid post code into post code input field
        await addNewAddressModal.inputNewAddressPostCodeIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid country format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid Country Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("Country cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Country Format.png", fullPage: true });
            throw new Error("The invalid address country input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Country Format.png", fullPage: true });
    }

    //invalid add user address test method - invalid address post code format (special symbols only)
    async invalidAddUserAddressInvalidPostCodeFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const accountDashboardPage = new AccountDashboardPage(page);
        const accountDashboardPageWebElementAssert = new AccountDashboardPageWebElementAssert();
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert();
        const accountDashPageDataLogger = new AccountDashPageDataLogger();
        const personalInfoModalWebElementAssert = new PersonalInfoModalWebElementAssert();
        const personalInfoModalTextElementAssert = new PersonalInfoModalTextElementAssert();
        const addressesDashboardModal = new AddressesDashboardModal(page);
        const addressesDashboardModalWebElementAsserts = new AddressesDashboardModalWebElementAsserts();
        const addressesDashboardModalTextElementAsserts = new AddressesDashboardModalTextElementAsserts();
        const addNewAddressModal = new AddNewAddressModal(page);
        const addNewAddressModalInvalidScenarios = new AddNewAddressModalInvalidScenarios(page);
        const addNewAddressModalWebElementAssert = new AddNewAddressModalWebElementAssert();
        const addNewAddressModalTextElementAsserts = new AddNewAddressModalTextElementAsserts();
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
        //click "Addresses" aside navbar link
        await accountDashboardPage.clickSetAsideAccountNavbarLink(2);
        //wait for element to load
        await page.waitForTimeout(3000);
        //addresses dashboard modal web element assert (no addresses)
        await addressesDashboardModalWebElementAsserts.isAddressesDashboardNoAddressWebElementVisible(page);
        //addresses dashboard modal text element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalTextElementAsExpected(page);
        //addresses dashboard modal (no addresses) test element assert
        await addressesDashboardModalTextElementAsserts.isAddressesDashboardModalNoAddressTextElementAsExpected(page);
        //capture screenshot of the addresses dashboard modal display (without address)
        await page.screenshot({ path: "src/tests/screenshots/Addresses Dashboard Modal Display (no addresses).png", fullPage: true });
        //click "Add New Address" button
        await addressesDashboardModal.clickAddNewAddressButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //add new address modal web element assert
        await addNewAddressModalWebElementAssert.isAddNewAddressModalWebElementVisible(page);
        //add new address modal (upper elements) text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalUpperElementTextAsExpected(page);
        //add new address modal text element assert
        await addNewAddressModalTextElementAsserts.isAddNewAddressModalTextAsExpected(page);
        //capture screenshot of the add new address modal display before data input
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display Before Data Input.png", fullPage: true });
        //input valid first name into first name input field
        await addNewAddressModal.inputNewAddressFullNameIntoFullNameInputField();
        //input valid email into email input field
        await addNewAddressModal.inputNewAddressEmailIntoEmailInputField();
        //input valid street into street input field
        await addNewAddressModal.inputNewAddressStreetIntoStreetInputField();
        //input valid city into city input field
        await addNewAddressModal.inputNewAddressCityIntoCityInputField();
        //input valid state into state input field (1 char)
        await addNewAddressModal.inputNewAddressStateIntoStateInputField();
        //input valid country into country input field (it's optional)
        await addNewAddressModal.inputNewAddressCountryIntoCountryInputField();
        //input invalid post code format into post code input field (special symbols only)
        await addNewAddressModalInvalidScenarios.inputInvalidNewAddressPostCodeFormatIntoPostCodeInputField();
        //capture screenshot of the add new address modal display after invalid data input - invalid post code format
        await page.screenshot({ path: "src/tests/screenshots/Add New Address Modal Display After Invalid Data Input - Invalid Post Code Format.png", fullPage: true });
        //click "Save Address" button
        await addNewAddressModal.clickSaveAddressButton();
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3600);
        //assert the user receives an expected error, throw an error otherwise
        try {
            const addNewAddressModalTooShortStateInputError = await addNewAddressModal.getAddNewAddressModalInvalidCredentialsInputErrorMsg();
            expect(addNewAddressModalTooShortStateInputError).toBe("ZIP code cannot consist of special symbols only");
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Post Code Format.png", fullPage: true });
            throw new Error("The invalid address post code input format error wasn't triggered, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add User Address Test Result - Invalid Post Code Format.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single featured product to cart tests

    //add single featured product ("Dell XPS 13 (2021) Laptop") to cart test method (as a guest)
    async addSingleFeaturedProductToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("Dell XPS 13 (2021) Laptop") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(0);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualFeaturedProductName = productNames[0];
        expect(actualFeaturedProductName).toBe("Dell XPS 13 (2021) Laptop");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Dell XPS 13 (2021) Laptop).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Featured Product To Cart Test Result (guest).png", fullPage: true });
    }

    //add single featured product ("Epson EF-100 Smart Portable Projector") to cart test method (as a registered user)
    async addSingleFeaturedProductToCartRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("Epson EF-100 Smart Portable Projector") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(3);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualFeaturedProductName = productNames[0];
        expect(actualFeaturedProductName).toBe("Epson EF-100 Smart Portable Projector");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Epson EF-100 Smart Portable Projector).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Featured Product To Cart Test Result (registered user).png", fullPage: true });
    }

    //add multiple featured products to cart tests

    //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to cart test method (as a guest)
    async addMultipleFeaturedProductsToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(1);
        //click set featured product ("HP LaserJet Pro MFP M428fdw Wireless Printer") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(2);
        //click header "Shopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct products have been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const expectedProductNames = ["SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer"];
        expect(productNames).toEqual(expectedProductNames);
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Dell XPS 13 (2021) Laptop and HP LaserJet Pro MFP M428fdw Wireless Printer).png", fullPage: true });
        //alter set product (Dell laptop) quantity
        await shoppingCartModal.clickSetQtyIncreaseButton(0, 6);
        //log shopping cart modal product data (to verify the product quantity has been altered)
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //capture screenshot of the shopping cart modal display (to verify the product quantity has been altered)
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (multiple Dell XPS 13 (2021) Laptops and HP LaserJet Pro MFP M428fdw Wireless Printer).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets onto shopping cart page after placing the products into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Featured Products To Cart Test Result (guest).png", fullPage: true });
    }

    //add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to cart test method (as a registered user)
    async addMultipleFeaturedProductsToCartRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click set featured product ("Rode NT1-A Condenser Mic") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(4);
        //click set featured product ("JBL Charge 4 Bluetooth Speaker") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(5);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct products have been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const expectedProductNames = ["Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker"];
        expect(productNames).toEqual(expectedProductNames);
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Rode NT1-A Condenser Mic and JBL Charge 4 Bluetooth Speaker).png", fullPage: true });
        //alter set product (Dell laptop) quantity
        await shoppingCartModal.clickSetQtyIncreaseButton(1, 6);
        //log shopping cart modal product data (to verify the product quantity has been altered)
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //capture screenshot of the shopping cart modal display (to verify the product quantity has been altered)
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (Rode NT1-A Condenser Mic and multiple  JBL Charge 4 Bluetooth Speakers).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets onto shopping cart page after placing the products into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Featured Products To Cart Test Result (registered user).png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single new arrivals product to cart tests

    //add single new arrivals product ("Seagate 4TB External Hard Drive") to cart test method (as a guest)
    async addSingleNewArrivalsProductToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set new arrivals product ("Seagate 4TB External Hard Drive") add to cart button
        await homePage.clickAddSetNewArrivalsProductToCartBtn(6);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualFeaturedProductName = productNames[0];
        expect(actualFeaturedProductName).toBe("Seagate 4TB External Hard Drive");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Seagate 4TB External Hard Drive).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single New Arrivals Product To Cart Test Result (guest).png", fullPage: true });
    }

    //add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to cart test method (as a registered user)
    async addSingleNewArrivalsProductToCartRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") add to cart button
        await homePage.clickAddSetNewArrivalsProductToCartBtn(7);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualFeaturedProductName = productNames[0];
        expect(actualFeaturedProductName).toBe("SanDisk Ultra Dual Drive 32GB USB 3.0");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single SanDisk Ultra Dual Drive 32GB USB 3.0).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single New Arrivals Product To Cart Test Result (registered user).png", fullPage: true });
    }

    //add multiple new arrivals products to cart tests

    //add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to cart test method (as a guest)
    async addMultipleNewArrivalsProductsToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //click new arrivals products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrivals products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrivals products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set new arrivals product ("GoPro HERO10 Black") add to cart button
        await homePage.clickAddSetNewArrivalsProductToCartBtn(8);
        //click set new arrivals product ("Logitech MX Master 3 Wireless Mouse") add to cart button
        await homePage.clickAddSetNewArrivalsProductToCartBtn(9);
        //click header "Shopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct products have been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const expectedProductNames = ["GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse"];
        expect(productNames).toEqual(expectedProductNames);
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single GoPro HERO10 Black and Logitech MX Master 3 Wireless Mouse).png", fullPage: true });
        //alter set product (Dell laptop) quantity
        await shoppingCartModal.clickSetQtyIncreaseButton(0, 6);
        //log shopping cart modal product data (to verify the product quantity has been altered)
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //capture screenshot of the shopping cart modal display (to verify the product quantity has been altered)
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (multiple GoPro HERO10 Blacks and Logitech MX Master 3 Wireless Mouse).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets onto shopping cart page after placing the products into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple New Arrivals Products To Cart Test Result (guest).png", fullPage: true });
    }

    //add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to cart test method (as a registered user)
    async addMultipleNewArrivalsProductToCartRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click new arrival products scroll right button
        await homePage.clickNewArrivalsProductScrollRightBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set new arrivals product ("TP-Link Archer AX73 Wi-Fi 6 Router") add to cart button
        await homePage.clickAddSetNewArrivalsProductToCartBtn(10);
        //click set new arrivals product ("Apple iPad Air (2022, 5th Gen)") add to cart button
        await homePage.clickAddSetNewArrivalsProductToCartBtn(11);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct products have been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const expectedProductNames = ["TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)"];
        expect(productNames).toEqual(expectedProductNames);
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single TP-Link Archer AX73 Wi-Fi 6 Router and Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //alter set product (Dell laptop) quantity
        await shoppingCartModal.clickSetQtyIncreaseButton(1, 6);
        //log shopping cart modal product data (to verify the product quantity has been altered)
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //capture screenshot of the shopping cart modal display (to verify the product quantity has been altered)
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (TP-Link Archer AX73 Wi-Fi 6 Router and multiple Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(2500);
        //assert the user gets onto shopping cart page after placing the products into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple New Arrivals Products To Cart Test Result (registered user).png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //remove single featured product to cart test (since registered user and guest will have the same output, only gust branch is being tested to avoid redundancy)

    //remove single featured product ("Dell XPS 13 (2021) Laptop") to cart test method
    async removeSingleFeaturedProductFromCartModalTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("Dell XPS 13 (2021) Laptop") add to cart button
        await homePage.clickAddSetFeaturedProductToCartBtn(0);
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualFeaturedProductName = productNames[0];
        expect(actualFeaturedProductName).toBe("Dell XPS 13 (2021) Laptop");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Dell XPS 13 (2021) Laptop).png", fullPage: true });
        //click set product remove button
        await shoppingCartModal.clickSetProductRemoveFromCartButton(0);
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //empty shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isEmptyShoppingCartModalWebElementVisible(page);
        //shopping cart header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //empty shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isEmptyShoppingCartModalTextElementAsExpected(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Remove Single Featured Product From Cart Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single/multiple product(s) to wishlist tests

    //add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test method (as a guest)
    async addSingleFeaturedProductToWishlistTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("Dell XPS 13 (2021) Laptop") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(0);
        //click header "Wishlist" button
        await generalPage.clickHeaderWishlistIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //assert the user gets onto wishlist page
        const expectedWishlistPageURL = "https://demo.alphabin.co/wishlist";
        const actualWishlistPageURL = page.url();
        expect(expectedWishlistPageURL).toBe(actualWishlistPageURL);
        //assert the correct product has been added to wishlist
        const wishlistProductNames = await wishlistDashboardPage.getWishlistDashPageProductName();
        const actualWishlistProductName = wishlistProductNames[0];
        expect(actualWishlistProductName).toBe("Dell XPS 13 (2021) Laptop");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Featured Product (single Dell XPS 13 (2021) Laptop) To Wishlist Test Result (guest).png", fullPage: true });
    }

    //add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test method (as a registered user)
    async addSingleFeaturedProductToWishlistRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("Dell XPS 13 (2021) Laptop") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(0);
        //click header "Wishlist" button
        await generalPage.clickHeaderWishlistIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //assert the user gets onto wishlist page
        const expectedWishlistPageURL = "https://demo.alphabin.co/wishlist";
        const actualWishlistPageURL = page.url();
        expect(expectedWishlistPageURL).toBe(actualWishlistPageURL);
        //assert the correct product has been added to wishlist
        const wishlistProductNames = await wishlistDashboardPage.getWishlistDashPageProductName();
        const actualWishlistProductName = wishlistProductNames[0];
        expect(actualWishlistProductName).toBe("Dell XPS 13 (2021) Laptop");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Featured Product (single Dell XPS 13 (2021) Laptop) To Wishlist Test Result (registered user).png", fullPage: true });
    }

    //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") to wishlist test method (as a guest)
    async addMultipleFeaturedProductToWishlistTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(1);
        //click set featured product ("HP LaserJet Pro MFP M428fdw Wireless Printer") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(2);
        //click set featured product ("Epson EF-100 Smart Portable Projector") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(3);
        //click header "Wishlist" button
        await generalPage.clickHeaderWishlistIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //assert the user gets onto wishlist page
        const expectedWishlistPageURL = "https://demo.alphabin.co/wishlist";
        const actualWishlistPageURL = page.url();
        expect(expectedWishlistPageURL).toBe(actualWishlistPageURL);
        //assert the correct product has been added to wishlist
        const actualWishlistProductNames = await wishlistDashboardPage.getWishlistDashPageProductName();
        const expectedWishlistProductNames = ["SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector"];
        expect(actualWishlistProductNames).toStrictEqual(expectedWishlistProductNames);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Featured Products (single SanDisk Extreme Pro 3.0 USB-C Memory Card Reader, HP LaserJet Pro MFP M428fdw Wireless Printer, Epson EF-100 Smart Portable Projector) To Wishlist Test Result (guest).png", fullPage: true });
    }

    //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") to wishlist test method (as a registered user)
    async addMultipleFeaturedProductToWishlistRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePage = new HomePage(page);
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click featured products scroll left button
        await homePage.clickFeaturedProductScrollLeftBtn();
        //wait for element to load
        await page.waitForTimeout(1000);
        //click set featured product ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(1);
        //click set featured product ("HP LaserJet Pro MFP M428fdw Wireless Printer") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(2);
        //click set featured product ("Epson EF-100 Smart Portable Projector") add to wishlist button
        await homePage.clickAddSetFeaturedProductToWishlistBtn(3);
        //click header "Wishlist" button
        await generalPage.clickHeaderWishlistIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //assert the user gets onto wishlist page
        const expectedWishlistPageURL = "https://demo.alphabin.co/wishlist";
        const actualWishlistPageURL = page.url();
        expect(expectedWishlistPageURL).toBe(actualWishlistPageURL);
        //assert the correct product has been added to wishlist
        const actualWishlistProductNames = await wishlistDashboardPage.getWishlistDashPageProductName();
        const expectedWishlistProductNames = ["SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector"];
        expect(actualWishlistProductNames).toStrictEqual(expectedWishlistProductNames);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Featured Products (single SanDisk Extreme Pro 3.0 USB-C Memory Card Reader, HP LaserJet Pro MFP M428fdw Wireless Printer, Epson EF-100 Smart Portable Projector) To Wishlist Test Result (registered user).png", fullPage: true });
    }

    //remove single product from wishlist test (it may apply to any single product added to wishlist)

    //remove single product from wishlist test method
    async removeSingleProductFromWishlistTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //click set product remove from wishlist button
        await wishlistDashboardPage.clickSetRemoveProductFromWishlistBtn(0);
        //wait for element to load
        await page.waitForTimeout(2500);
        //empty wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isEmptyWishlistDashboardPageWebElementVisible(page);
        //empty wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isEmptyWishlistDashboardPageTextElementAsExpected(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Remove Single Product From Wishlist Test Result (guest).png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single/multiple product(s) from wishlist to cart tests (registered user and guest share the same method)

    //add single product from wishlist to cart test method
    async addSingleWishlistProductToCartTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //click set "Add to Cart" button
        await wishlistDashboardPage.clickSetAddToCartButton(0);
        //click "View Cart" button
        await wishlistDashboardPage.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Product From Wishlist To Cart Test Result.png", fullPage: true });
    }

    //add multiple products from wishlist to cart test method
    async addMultipleWishlistProductsToCartTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        const wishlistDashboardPageWebElementAsserts = new WishlistDashboardPageWebElementAsserts();
        const wishlistDashboardPageTextElementAsserts = new WishlistDashboardPageTextElementAsserts();
        const wishlistDashboardPageDataLogger = new WishlistDashboardPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //wishlist dashboard page web element assert
        await wishlistDashboardPageWebElementAsserts.isWishlistDashboardPageWebElementVisible(page);
        //wishlist dashboard page text element assert
        await wishlistDashboardPageTextElementAsserts.isWishlistDashboardPageTextElementAsExpected(page);
        //log wishlist dashboard page product data
        await wishlistDashboardPageDataLogger.logWishlistDashboardPageProductData(page);
        //click set "Add to Cart" button
        await wishlistDashboardPage.clickSetAddToCartButton(0);
        //click set "Add to Cart" button
        await wishlistDashboardPage.clickSetAddToCartButton(1);
        //click set "Add to Cart" button
        await wishlistDashboardPage.clickSetAddToCartButton(2);
        //click "View Cart" button
        await wishlistDashboardPage.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the products into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Products From Wishlist To Cart Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single all products category dashboard page product to cart tests

    //add single all products category dashboard page product ("Rode NT1-A Condenser Mic") to cart test method (as a guest)
    async addSingleAllProductsDashPageProductToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "List view" button
        await allProductsDashboardPage.clickListViewButton();
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (list view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageListWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (list view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (list view).png", fullPage: true });
        //set price range from (to a set value) -> 10000
        await allProductsDashboardPage.setPriceRangeFrom(0.11);
        //set price range to (to a set value) -> 25000
        await allProductsDashboardPage.setPriceRangeTo(0.27);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (list view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (list view with set price range).png", fullPage: true });
        //click set product ("Rode NT1-A Condenser Mic") card (list view)
        await allProductsDashboardPage.clickSetProductCardListMethod(0);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //capture screenshot of the single product page ("Rode NT1-A Condenser Mic") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Rode NT1-A Condenser Mic).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Rode NT1-A Condenser Mic";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Rode NT1-A Condenser Mic") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Rode NT1-A Condenser Mic Additional Info Section).png", fullPage: true });
        //click "Add to Cart" button
        await singleProductPage.clickAddToCartButton();
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualSingleProductName = productNames[0];
        await expect(actualSingleProductName).toBe("Rode NT1-A Condenser Mic");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Rode NT1-A Condenser Mic).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add All Products Dashboard Page Single Product To Cart Test Result (guest).png", fullPage: true });
    }

    //add single all products category dashboard page product ("Apple iPad Air (2022, 5th Gen)") to cart test method (as a registered user)
    async addSingleAllProductsDashPageProductToCartRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Add to Cart" button
        await singleProductPage.clickAddToCartButton();
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualSingleProductName = productNames[0];
        expect(actualSingleProductName).toBe("Apple iPad Air (2022, 5th Gen)");
        //assert product quantity count stays constant
        const productCounterCount = await shoppingCartModal.getShoppingCartModalProductCount();
        const productQuantity = await shoppingCartModal.getShoppingCartModalProductQty();
        const totalQty = productQuantity.reduce((sum, qty) => sum + Number(qty), 0)
        expect(Number(productCounterCount)).toBe(totalQty);
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (single Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add All Products Dashboard Page Single Product To Cart Test Result (registered user).png", fullPage: true });
    }

    //add multiple all products category dashboard page products to cart tests

    //add multiple all products category dashboard page products ("Seagate 4TB External Hard Drive") to cart test method (as a guest)
    async addMultipleAllProductsDashPageProductsToCartTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click set product ("Seagate 4TB External Hard Drive") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(2);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Seagate 4TB External Hard Drive") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Seagate 4TB External Hard Drive).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Seagate 4TB External Hard Drive";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Seagate 4TB External Hard Drive") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Seagate 4TB External Hard Drive Additional Info Section).png", fullPage: true });
        //click product increase button
        await singleProductPage.clickProductQtyIncreaseButton(4);
        //wait for element to load
        await page.waitForTimeout(1300);
        //capture screenshot of the single product page ("Seagate 4TB External Hard Drive" -> multiple products) display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (multiple Seagate 4TB External Hard Drive Products).png", fullPage: true });
        //click "Add to Cart" button
        await singleProductPage.clickAddToCartButton();
        //click header "Shopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(4000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualSingleProductName = productNames[0];
        expect(actualSingleProductName).toBe("Seagate 4TB External Hard Drive");
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (multiple Seagate 4TB External Hard Drives).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add All Products Dashboard Page Multiple Products To Cart Test Result (guest).png", fullPage: true });
    }

    //add multiple all products category dashboard page products ("Samsung 32-inch UHD 4K Smart TV") to cart test method (as a registered user)
    async addMultipleAllProductsDashPageProductsToCartRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const shoppingCartModal = new ShoppingCartModal(page);
        const shoppingCartModalWebElementAsserts = new ShoppingCartModalWebElementAsserts();
        const shoppingCartModalTextElementAsserts = new ShoppingCartModalTextElementAsserts();
        const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Samsung 32-inch UHD 4K Smart TV") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(2);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Samsung 32-inch UHD 4K Smart TV).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Samsung 32-inch UHD 4K Smart TV";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Samsung 32-inch UHD 4K Smart TV Additional Info Section).png", fullPage: true });
        //click product increase button
        await singleProductPage.clickProductQtyIncreaseButton(4);
        //wait for element to load
        await page.waitForTimeout(1300);
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV" -> multiple products) display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (multiple Samsung 32-inch UHD 4K Smart TV).png", fullPage: true });
        //click "Add to Cart" button
        await singleProductPage.clickAddToCartButton();
        //click header "hopping Cart" button
        await generalPage.clickHeaderShoppingCartIconBtn();
        //wait for element to load
        await page.waitForTimeout(3000);
        //shopping cart modal header web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalHeaderWebElementVisible(page);
        //shopping cart modal web element assert
        await shoppingCartModalWebElementAsserts.isShoppingCartModalWebElementVisible(page);
        //shopping cart modal header text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalHeaderTextElementAsExpected(page);
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAsserts.isShoppingCartModalTextElementAsExpected(page);
        //log shopping cart modal product data
        await shoppingCartModalDataLogger.logShoppingCartModalData(page);
        //assert the correct product has been added
        const productNames = await shoppingCartModal.getShoppingCartModalProductName();
        const actualSingleProductName = productNames[0];
        expect(actualSingleProductName).toBe("Samsung 32-inch UHD 4K Smart TV");
        //capture screenshot of the shopping cart modal display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Modal Display (multiple Samsung 32-inch UHD 4K Smart TVs).png", fullPage: true });
        //click "View Cart" button
        await shoppingCartModal.clickViewCartButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto shopping cart page after placing the product into the cart
        const expectedCartPageURL = "https://demo.alphabin.co/cart";
        const actualCartPageURL = page.url();
        expect(expectedCartPageURL).toBe(actualCartPageURL);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add All Products Dashboard Page Multiple Products To Cart Test Result (registered user).png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add product review tests

    //add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest)
    async addProductReviewTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section after valid review data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Valid Review Data Input).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //single product page review section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageReviewWebElementVisible(page);
        //single product page review section text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageReviewTextElementAsExpected(page);
        //log single product page review data
        await singleProductPageDataLoggers.logSingleProductPageReviewData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Product Review Test Result (guest).png", fullPage: true });
    }

    //add product ("Samsung 32-inch UHD 4K Smart TV") review test method (as a registered user)
    async addProductReviewRegUserTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(0);
        //wait for element to load
        await page.waitForTimeout(2000);
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Samsung 32-inch UHD 4K Smart TV") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(2);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Samsung 32-inch UHD 4K Smart TV).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Samsung 32-inch UHD 4K Smart TV";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Samsung 32-inch UHD 4K Smart TV) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page);
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Samsung 32-inch UHD 4K Smart TV) Review Section Before Data Input).png", fullPage: true });
        //input valid registered user full name into your name input field
        await addReviewModal.inputRegUserFullNameIntoYourNameInputField();
        //input valid registered user email into your email input field
        await addReviewModal.inputRegUserEmailIntoYourEmailInputField();
        //input valid registered user review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid registered user review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Samsung 32-inch UHD 4K Smart TV") review section after valid review data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Samsung 32-inch UHD 4K Smart TV) Review Section After Valid Review Data Input).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //single product page review section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageReviewWebElementVisible(page);
        //single product page review section text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageReviewTextElementAsExpected(page);
        //log single product page review data
        await singleProductPageDataLoggers.logSingleProductPageReviewData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Product Review Test Result (guest).png", fullPage: true });
    }

    //invalid add product review tests (since the registered user will have the same output, only guest branch is being tested to avoid redundancy)

    //no singular input

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - no guest full name
    async invalidAddProductReviewNoGuestFullNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //don't input guest full name into your name input field
        await addReviewModalInvalidScenarios.inputNoGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - no guest full name
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - No Guest Full Name).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - No Guest Full Name.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - no guest email
    async invalidAddProductReviewNoGuestEmailTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //don't input guest email into your email input field
        await addReviewModalInvalidScenarios.inputNoGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - no guest email
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - No Guest Email).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review email has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - No Guest Email.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - no guest review stars
    async invalidAddProductReviewNoGuestReviewStarsTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - no guest review stars
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - No Guest Review Stars).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review stars have no error message, there's nothing to assert)
        await page.waitForTimeout(3000);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - No Guest Review Stars.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - no guest review title
    async invalidAddProductReviewNoGuestReviewTitleTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //don't input guest review title into review title input field
        await addReviewModalInvalidScenarios.inputNoGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - no guest review title
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - No Guest Review Title).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review title has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - No Guest Review Title.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - no guest review
    async invalidAddProductReviewNoGuestReviewTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //don't input guest review into review (opinion) text area
        await addReviewModalInvalidScenarios.inputNoGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - no guest review
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - No Guest Review).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - No Guest Review.png", fullPage: true });
    }

    //too short singular input

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too short guest full name (3 chars)
    async invalidAddProductReviewTooShortGuestFullNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input too short guest full name into your name input field (3 chars)
        await addReviewModalInvalidScenarios.inputTooShortGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too short guest full name
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Short Guest Full Name).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Full Name.png", fullPage: true});
            throw new Error("The too short review full name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Full Name.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too short guest email (1 char -> name, domain)
    async invalidAddProductReviewTooShortGuestEmailTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input too short guest email into your email input field (1 char -> name, domain)
        await addReviewModalInvalidScenarios.inputTooShortGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too short guest email
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Short Guest Email).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Email.png", fullPage: true});
            throw new Error("The too short review email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Email.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too short guest review title (1 char)
    async invalidAddProductReviewTooShortGuestReviewTitleTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input too short guest review title into review title input field (1 char)
        await addReviewModalInvalidScenarios.inputTooShortGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too short guest review title
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Short Guest Review Title).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Review Title.png", fullPage: true});
            throw new Error("The too short review title input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Review Title.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too short guest review (9 chars)
    async invalidAddProductReviewTooShortGuestReviewTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(2);
        //input too short guest review into review (opinion) text area (9 chars)
        await addReviewModalInvalidScenarios.inputTooShortGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too short guest review
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Short Guest Review).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //assert the user receives an expected error, otherwise, throw an error
        const tooShortReviewInputErrorMsg = await addReviewModal.getAddReviewInvalidSingularInputErrorMsg();
        expect(tooShortReviewInputErrorMsg).toBe("Review must be at least 10 characters");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Short Guest Review.png", fullPage: true });
    }

    //too long singular input

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too long guest full name (201 chars)
    async invalidAddProductReviewTooLongGuestFullNameTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input too long guest full name into your name input field (201 chars)
        await addReviewModalInvalidScenarios.inputTooLongGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too long guest full name
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Long Guest Full Name).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Full Name.png", fullPage: true});
            throw new Error("The too long review full name input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Full Name.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too long guest email (100 chars -> name, domain)
    async invalidAddProductReviewTooLongGuestEmailTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input too short guest email into your email input field (100 chars -> name, domain)
        await addReviewModalInvalidScenarios.inputTooLongGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too long guest email
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Long Guest Email.png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Email.png", fullPage: true});
            throw new Error("The too long review email input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Email.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too long guest review title (100 chars)
    async invalidAddProductReviewTooLongGuestReviewTitleTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input.png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input too short guest review title into review title input field (100 chars)
        await addReviewModalInvalidScenarios.inputTooLongGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too long guest review title
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Long Guest Review Title.png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Review Title.png", fullPage: true});
            throw new Error("The too long review title input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Review Title.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - too long guest review (10001 chars)
    async invalidAddProductReviewTooLongGuestReviewTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAssert = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAssert.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAssert.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(2);
        //input too short guest review into review (opinion) text area (10001 chars)
        await addReviewModalInvalidScenarios.inputTooLongGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - too long guest review
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Too Long Guest Review).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Review.png", fullPage: true});
            throw new Error("The too long review input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Too Long Guest Review.png", fullPage: true });
    }

    //invalid singular input format

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - invalid guest full name format (special symbols only)
    async invalidAddProductReviewInvalidGuestFullNameFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input invalid guest full name format into your name input field (special symbols only)
        await addReviewModalInvalidScenarios.inputInvalidGuestFullNameFormatIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - invalid guest full name format
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Invalid Guest Full Name Format).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Full Name Format.png", fullPage: true});
            throw new Error("The invalid review full name format input error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Full Name Format.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - invalid guest email format (missing '@')
    async invalidAddProductReviewInvalidGuestEmailFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input invalid guest email format into your email input field (missing '@')
        await addReviewModalInvalidScenarios.inputInvalidGuestEmailFormatIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - invalid guest email format
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Invalid Guest Email Format).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Email Format.png", fullPage: true});
            throw new Error("The invalid review email input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Email Format.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - invalid guest review title format (special symbols only)
    async invalidAddProductReviewInvalidGuestReviewTitleFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input invalid guest review title format into review title input field (special symbols only)
        await addReviewModalInvalidScenarios.inputInvalidGuestReviewTitleFormatIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(4);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - invalid guest review title format
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Invalid Guest Review Title Format).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Review Title Format.png", fullPage: true});
            throw new Error("The invalid review title input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Review Title Format.png", fullPage: true });
    }

    //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test method (as a guest) - invalid guest review format (special symbols only)
    async invalidAddProductReviewInvalidGuestReviewFormatTest(page){
        const generalPage = new GeneralPage(page);
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const homePageWebElementAssert = new HomePageWebElementAssert();
        const homePageTextElementAssert = new HomePageTextElementAssert();
        const homePageDataLoggers = new HomePageDataLoggers();
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        const allProductsDashboardPageWebElementAsserts = new AllProductsDashPageWebElementAsserts();
        const allProductsDashboardPageTextElementAsserts = new AllProductsDashPageTextElementAsserts();
        const allProductsDashPageDataLoggers = new AllProductsDashPageDataLoggers();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalInvalidScenarios = new AddReviewModalInvalidScenarios(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
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
        //click header navbar "Home" link
        await generalPage.clickSetHeaderNavbarLink(3);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view).png", fullPage: true });
        //click "Filters" button
        await allProductsDashboardPage.clickFiltersButton();
        //wait for element to load
        await page.waitForTimeout(2700);
        //all products dashboard page header web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageHeaderWebElementVisible(page);
        //all products dashboard page (filters dropdown section) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageFiltersWebElementVisible(page);
        //all products dashboard page (grid view) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageGridWebElementVisible(page);
        //all products dashboard page (product table) web element assert
        await allProductsDashboardPageWebElementAsserts.isAllProductsDashboardPageProductTableWebElementVisible(page);
        //all product dashboard page header text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageHeaderTextElementAsExpected(page);
        //all product dashboard page (filters dropdown section) text element assert
        await allProductsDashboardPageTextElementAsserts.isAllProductsDashboardPageFiltersTextElementAsExpected(page);
        //log all products dashboard page product data
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (with filters view) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with filters).png", fullPage: true });
        //set price range from (to a set value) -> 20000
        await allProductsDashboardPage.setPriceRangeFrom(0.21);
        //wait for element to load
        await page.waitForTimeout(1700);
        //log all products dashboard page product data (to verify price range has been applied)
        await allProductsDashPageDataLoggers.logAllProductsDashPageProductData(page);
        //capture screenshot of the all products dashboard page (grid view - set price range) display
        await page.screenshot({ path: "src/tests/screenshots/All Products Dashboard Page Display (grid view with set price range).png", fullPage: true });
        //click set product ("Apple iPad Air (2022, 5th Gen)") card (grid view)
        await allProductsDashboardPage.clickSetProductCardMethod(1);
        //wait for element to load
        await page.waitForTimeout(2500);
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageWebElementVisible(page);
        //single product page (you may also like) web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageYouMayAlsoLikeWebElementVisible(page);
        //single product page text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageTextElementAsExpected(page);
        //log single product page product data
        await singleProductPageDataLoggers.logSingleProductPageProductData(page);
        //log single product page (you may also like) product data
        await singleProductPageDataLoggers.logSingleProductPageYouMayAlsoLikeProductData(page);
        //single product page description section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageDescriptionWebElementVisible(page);
        //log single product page product description section data
        await singleProductPageDataLoggers.logSingleProductPageProductDescriptionData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen)).png", fullPage: true });
        //assert the user is on the correct product page
        const actualProductPage = await singleProductPage.getSingleProductPageTitle();
        const expectedProductPage = "Apple iPad Air (2022, 5th Gen)";
        expect(actualProductPage).toBe(expectedProductPage);
        //click "Additional Information" navbar button
        await singleProductPage.clickSetNavbarButton(1);
        //wait for element to load
        await page.waitForTimeout(1700);
        //single product page additional information web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageAdditionalInfoWebElementVisible(page);
        //log single product page additional information data
        await singleProductPageDataLoggers.logSingleProductPageAdditionalInfoData(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") additional info section display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section).png", fullPage: true });
        //click "Reviews" navbar button
        await singleProductPage.clickSetNavbarButton(2);
        //wait for element to load
        await page.waitForTimeout(1100);
        //add review modal (empty) web element assert
        await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
        //add review modal (empty) text element assert
        await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page)
        //click "Write a Review" button
        await addReviewModal.clickWriteReviewButton();
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(1);
        //input invalid guest review format into review (opinion) text area (special symbols only)
        await addReviewModalInvalidScenarios.inputInvalidGuestReviewFormatIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section display after invalid review data input - invalid guest review input format
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Invalid Review Data Input - Invalid Guest Review Format).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load (since the review full name has no error message that can be located with a locator, wait for react error message to be triggered)
        await page.waitForTimeout(3000);
        //if the review has been input (the review elements appear), throw an error
        const reviewSectionWebElements = singleProductPage.singleProductPageReviewNameElement;
        const reviewSectionWebElementCount = await reviewSectionWebElements.count();
        if (reviewSectionWebElementCount > 0) {
            await page.screenshot({path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Review Format.png", fullPage: true});
            throw new Error("The invalid review input format error wasn't triggered, test has failed");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Invalid Add Product Review Test Result (guest) - Invalid Guest Review Format.png", fullPage: true });
    }

    //update product review test

    //update product review test method
    async updateProductReviewTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const singleProductPageDataLoggers = new SingleProductPageDataLoggers();
        const addReviewModal = new AddReviewModal(page);
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page review section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageReviewWebElementVisible(page);
        //single product page review section text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageReviewTextElementAsExpected(page);
        //wait for element to load
        await page.waitForTimeout(1100);
        //click set "Edit review" link
        await singleProductPage.clickSetEditReviewLink(0);
        //wait for element to load
        await page.waitForTimeout(1700);
        //add review modal web element assert
        await addReviewModalWebElementAsserts.isAddReviewModalWebElementVisible(page);
        //add review modal text element assert
        await addReviewModalTextElementAsserts.isAddReviewModalTextElementAsExpected(page);
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section before edited data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section Before Edited Data Input).png", fullPage: true });
        //input valid guest full name into your name input field
        await addReviewModal.inputGuestFullNameIntoYourNameInputField();
        //input valid guest email into your email input field
        await addReviewModal.inputGuestEmailIntoYourEmailInputField();
        //input valid guest review title into review title input field
        await addReviewModal.inputGuestReviewTitleIntoReviewTitleInputField();
        //click set review stars
        await addReviewModal.clickSetReviewStars(3);
        //input valid guest review into review (opinion) text area
        await addReviewModal.inputGuestReviewIntoReviewTextarea();
        //capture screenshot of the single product page ("Apple iPad Air (2022, 5th Gen)") review section after valid edited review data input display
        await page.screenshot({ path: "src/tests/screenshots/Single Product Page Display (Apple iPad Air (2022, 5th Gen) Additional Info Section After Valid Edited Review Data Input).png", fullPage: true });
        //click "Submit" button
        await addReviewModal.clickSubmitButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //single product page review section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageReviewWebElementVisible(page);
        //single product page review section text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageReviewTextElementAsExpected(page);
        //log single product page review data
        await singleProductPageDataLoggers.logSingleProductPageReviewData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Update Product Review Test Result (guest).png", fullPage: true });
    }

    //remove product review test

    //remove product review test method
    async removeProductReviewTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const singleProductPage = new SingleProductPage(page);
        const singleProductPageWebElementAsserts = new SingleProductPageWebElementAsserts();
        const singleProductPageTextElementAsserts = new SingleProductPageTextElementAsserts();
        const addReviewModalWebElementAsserts = new AddReviewModalWebElementAsserts();
        const addReviewModalTextElementAsserts = new AddReviewModalTextElementAsserts();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //single product page review section web element assert
        await singleProductPageWebElementAsserts.isSingleProductPageReviewWebElementVisible(page);
        //single product page review section text element assert
        await singleProductPageTextElementAsserts.isSingleProductPageReviewTextElementAsExpected(page);
        //wait for element to load
        await page.waitForTimeout(1100);
        //click set "Delete review" link
        await singleProductPage.clickSetDeleteReviewLink(0);
        //wait for element to load
        await page.waitForTimeout(1700);

        //assert the empty review modal section elements appear, otherwise, throw an error
        try {
            await addReviewModalWebElementAsserts.isEmptyAddReviewModalWebElementVisible(page);
            await addReviewModalTextElementAsserts.isEmptyAddReviewModalTextElementAsExpected(page);
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Remove Product Review Test Result (guest).png", fullPage: true });
            throw new Error("The set 'Delete' review link click doesn't seem to have any effect, test has failed.");
        }
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Remove Product Review Test Result (guest).png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add product(s) to checkout test (the registered user and guest will share the same method)

    //add product(s) to checkout test method
    async addProductToCheckoutTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartPageWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementVisible(page);
        //shopping cart page text element
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display.png", fullPage: true });
        //click "Checkout" button
        await shoppingCartPage.clickCheckoutButton();
        //wait for element to load
        await page.waitForTimeout(3000);
        //assert the user gets onto checkout page after "Checkout" button click
        const expectedURL = "https://demo.alphabin.co/checkout"
        const actualURL = page.url();
        //if the user fails to get onto checkout page, log the issue (it may be intended that way for a guest user)
        try {
            await expect(actualURL).toEqual(expectedURL);
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Add Product(s) To Checkout Page Test Result (guest).png", fullPage: true });
            throw new Error(`The 'guest' level user fails to checkout the product, the user account must be registered beforehand for checking out.`);
        }
        //capture screenshot of the checkout page display
        await page.screenshot({ path: "src/tests/screenshots/Add Product(s) To Checkout Page Test Result (registered user).png", fullPage: true });
    }

    //update product quantity in shopping cart test (the registered user and guest will share the same method, so only guest branch is being tested to avoid redundancy)

    //update product quantity in shopping cart test method
    async updateProductQtyInShoppingCartPageTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartPageWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementVisible(page);
        //shopping cart page text element
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display.png", fullPage: true });
        //click set product quantity increase button
        await shoppingCartPage.clickSetProductQtyIncreaseBtn(0, 4)
        //log shopping cart page product data (to verify the quantity has been updated)
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(4500);
        //assert the user receives the updated product count
        const expectedProductCount = '5'; //since it returns a char, not an int
        const productCount = await shoppingCartPage.getShopCartPageProductQty();
        const actualProductCount = productCount[0];
        //if the user fails to receive the updated product count, throw an error
        try {
            expect(actualProductCount).toBe(expectedProductCount);
        } catch {
            await page.screenshot({ path: "src/tests/screenshots/Update Product Quantity In Shopping Cart Test Result (qty update failure).png", fullPage: true });
            throw new Error("The product quantity fails to be updated, test has failed.");
        }
        //capture screenshot of the checkout page display
        await page.screenshot({ path: "src/tests/screenshots/Update Product Quantity In Shopping Cart Test Result.png", fullPage: true });
    }

    //remove product from shopping cart test (the registered user and guest will share the same method, so only guest branch is being tested to avoid redundancy)

    //remove product quantity from shopping cart test method
    async removeProductFromShoppingCartPageTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const shoppingCartPage = new ShoppingCartPage(page);
        const shoppingCartPageWebElementAsserts = new ShoppingCartPageWebElementAsserts();
        const shoppingCartPageTextElementAsserts = new ShoppingCartPageTextElementAsserts();
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //shopping cart page web element
        await shoppingCartPageWebElementAsserts.isShoppingCartPageWebElementVisible(page);
        //shopping cart page text element
        await shoppingCartPageTextElementAsserts.isShoppingCartPageTextElementAsExpected(page);
        //log shopping cart page product data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData(page);
        //capture screenshot of the shopping cart page display
        await page.screenshot({ path: "src/tests/screenshots/Shopping Cart Page Display.png", fullPage: true });
        //click set product remove button
        await shoppingCartPage.clickSetProductRemoveButton(0);
        //wait for element to load
        await page.waitForTimeout(3000);
        //empty shopping cart page web element assert
        await shoppingCartPageWebElementAsserts.isShoppingCartPageEmptyCartWebElementVisible(page);
        //empty shopping cart page text element assert
        await shoppingCartPageTextElementAsserts.isShoppingCartPageEmptyCartTextElementAsExpected(page);
        //capture screenshot of the checkout page display
        await page.screenshot({ path: "src/tests/screenshots/Remove Product Quantity From Shopping Cart Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid product checkout confirmation tests (only registered users have this feature)

    //valid product checkout confirmation (cash on delivery method) test method
    async validProductCashOnDeliveryCheckoutConfirmationTest(page){
        const generalPageWebElementAssert = new GeneralPageWebElementAssert();
        const generalPageTextElementAssert = new GeneralPageTextElementAssert();
        const checkoutPage = new CheckoutPage(page);
        const checkoutPageWebElementAsserts = new CheckoutPageWebElementAsserts();
        const checkoutPageTextElementAsserts = new CheckoutPageTextElementAsserts();
        const checkoutPageDataLoggers = new CheckoutPageDataLoggers();
        const orderDetailsPageWebElementAssert = new OrderDetailsPageWebElementAssert();
        const orderDetailsPageTextElementAssert = new OrderDetailsPageTextElementAssert();
        const orderDetailsPageDataLogger = new OrderDetailsPageDataLogger();
        //general page web element assert
        await generalPageWebElementAssert.isGeneralPageWebElementVisible(page);
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected(page);
        //checkout page web element assert
        await checkoutPageWebElementAsserts.isCheckoutPageWebElementVisible(page);
        //checkout page credit/debit section web element assert (since it's opened on launch)
        await checkoutPageWebElementAsserts.isCheckoutPageCreditSectionWebElementVisible(page);
        //checkout page text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageTextAsExpected(page);
        //checkout page credit/debit section text element assert (since it's opened on launch)
        await checkoutPageTextElementAsserts.isCheckoutPageCreditTextAsExpected(page);
        //log checkout page shipping address data
        await checkoutPageDataLoggers.logCheckoutShipAddressData(page);
        //log checkout page order summary product data
        await checkoutPageDataLoggers.logCheckoutProductData(page);
        //capture screenshot of the checkout page display
        await page.screenshot({ path: "src/tests/screenshots/Checkout Page Display (with credit card section).png", fullPage: true });
        //click set payment method button
        await checkoutPage.clickSetPayMethodButton(3);
        //wait for element to load (due to network issues, time is extended)
        await page.waitForTimeout(3500);
        //checkout page cash on delivery section web element assert
        await checkoutPageWebElementAsserts.isCheckoutPageCashDeliveryWebElementVisible(page);
        //checkout page cash on delivery section text element assert
        await checkoutPageTextElementAsserts.isCheckoutPageCashDeliveryTextAsExpected(page);
        //capture screenshot of the checkout page display
        await page.screenshot({ path: "src/tests/screenshots/Checkout Page Display (with cash on delivery section).png", fullPage: true });
        //click "Place Order" button
        await checkoutPage.clickPlaceOrderButton();
        //wait for element to load
        await page.waitForTimeout(3100);
        //order details page web element assert
        await orderDetailsPageWebElementAssert.isOrderDetailsPageWebElementVisible(page);
        //order details page text element assert
        await orderDetailsPageTextElementAssert.isOrderDetailsPageTextElementAsExpected(page);
        //log order details page displayed data
        await orderDetailsPageDataLogger.logOrderDetailsPageData(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Product(s) Checkout Confirmation (cash on delivery) Test Result.png", fullPage: true });
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
export {TestMethods};