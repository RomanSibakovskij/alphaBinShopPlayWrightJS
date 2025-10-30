import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(55000);

test.describe.configure({
    mode: "default"
});

test.describe("Valid User Login Tests", () => {

    // Test 003 -> valid user login test
    test("Valid User Login Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
    });

    // Test 003a -> valid user login with edited email test
    test("Valid User Login With Edited Email Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //valid add user address test
        await testMethods.validAddUserAddressTest(page);
        //valid user login with edited email test
        await testMethods.validUserLoginEditedEmailTest(page);
    });

    // Test 003b -> valid user login with edited password test
    test("Valid User Login With Edited Password Test", async ({page}) => {
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
        //valid user login with edited password test
        await testMethods.validUserLoginEditedPasswordTest(page);
    });

});

test.describe("Invalid User Login Tests - No Singular Input", () => {

    // Test 003c -> invalid user login test - no login email
    test("Invalid User Login Test - No Login Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //invalid user login test - no login email
        await testMethods.invalidUserLoginNoEmailTest(page)
    });

});