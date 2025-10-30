import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(55000);

test.describe("Valid Edit User Account Password Test", () => {

    // Test 006 -> valid edit user account password test
    test("Valid Edit User Account Password Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //valid edit user account password test
        await testMethods.validEditUserAccountPasswordTest(page);
    });

});

test.describe("Invalid Edit User Account Password Test - No Singular Input", () => {

    // Test 006a -> invalid edit user account password test - no confirm password
    test("Invalid Edit User Account Password Test - No Confirm Password", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid edit user account password test - no confirm password
        await testMethods.invalidEditUserAccountPasswordNoConfirmPasswordTest(page);
        //close the page explicitly
        await page.close();
    });

});