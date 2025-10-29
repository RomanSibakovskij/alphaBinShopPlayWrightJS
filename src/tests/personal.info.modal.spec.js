import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(55000);

test.describe("Valid Edit User Account Info Test", () => {

    // Test 005 -> valid edit user account info test (the app fails to update first name, test has failed)
    test("Valid Edit User Account Info Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //valid edit user account info test
        await testMethods.validEditUserAccountInfoTest(page);
    });

});

test.describe("Invalid Edit User Account Info Tests - No Singular Input", () => {

    // Test 005a -> invalid edit user account info test - no edited first name
    test("Invalid Edit User Account Info Test - No Edited First Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - no edited first name
        await testMethods.invalidEditUserAccountInfoNoEditedFirstNameTest(page);
    });

    // Test 005b -> invalid edit user account info test - no edited last name
    test("Invalid Edit User Account Info Test - No Edited Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - no edited last name
        await testMethods.invalidEditUserAccountInfoNoEditedLastNameTest(page);
    });

    // Test 005c -> invalid edit user account info test - no edited phone (this input field is optional)
    test("Invalid Edit User Account Info Test - No Edited Phone", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - no edited phone
        await testMethods.invalidEditUserAccountInfoNoEditedPhoneTest(page);
    });

});

test.describe("Invalid Edit User Account Info Tests - Too Short Singular Input", () => {

    // Test 005d -> invalid edit user account info test - too short edited first name (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Edit User Account Info Test - Too Short Edited First Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - too short edited first name (1 char)
        await testMethods.invalidEditUserAccountInfoTooShortEditedFirstNameTest(page);
    });

    // Test 005e -> invalid edit user account info test - too short edited last name (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Edit User Account Info Test - Too Short Edited Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - too short edited last name (1 char)
        await testMethods.invalidEditUserAccountInfoTooShortEditedLastNameTest(page);
    });

    // Test 005f -> invalid edit user account info test - too short edited phone (9 digits)
    test("Invalid Edit User Account Info Test - Too Short Edited Phone", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - too short edited phone (9 digits)
        await testMethods.invalidEditUserAccountInfoTooShortEditedPhoneTest(page);
    });

});

test.describe("Invalid Edit User Account Info Tests - Too Long Singular Input", () => {

    // Test 005g -> invalid edit user account info test - too long edited first name (100 char) (the error wasn't triggered, test has failed)
    test("Invalid Edit User Account Info Test - Too Long Edited First Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - too long edited first name (100 chars)
        await testMethods.invalidEditUserAccountInfoTooLongEditedFirstNameTest(page);
    });

    // Test 005h -> invalid edit user account info test - too long edited last name (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Edit User Account Info Test - Too Long Edited Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - too long edited last name (100 chars)
        await testMethods.invalidEditUserAccountInfoTooLongEditedLastNameTest(page);
    });

    // Test 005i -> invalid edit user account info test - too long edited phone (11 digits) (the error wasn't triggered, test has failed)
    test("Invalid Edit User Account Info Test - Too Long Edited Phone", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - too long edited phone (11 digits)
        await testMethods.invalidEditUserAccountInfoTooLongEditedPhoneTest(page);
    });

});

test.describe("Invalid Edit User Account Info Tests - Invalid Singular Input Format", () => {

    // Test 005j -> invalid edit user account info test - invalid edited first name (special symbols only) (the error wasn't triggered, test has failed)
    test("Invalid Edit User Account Info Test - Invalid Edited First Name Format", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page);
        //invalid edit user account info test - invalid edited first name (special symbols only)
        await testMethods.invalidEditUserAccountInfoInvalidEditedFirstNameFormatTest(page);
    });

});