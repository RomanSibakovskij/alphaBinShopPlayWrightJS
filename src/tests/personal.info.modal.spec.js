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