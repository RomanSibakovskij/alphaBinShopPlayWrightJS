import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(25000);

test.describe("Valid User Account Creation Test", () => {

    // Test 002 -> valid user account creation test
    test("Valid User Account Creation Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page);
    });

});

test.describe("Invalid User Account Creation Test - No Singular Input", () => {

    // Test 002a -> invalid user account creation test - no user first name
    test("Invalid User Account Creation Test - No User First Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - no user first name
        await testMethods.invalidUserAccountCreationNoFirstNameTest(page);
        //close the page explicitly
        await page.close();
    });

    // Test 002b -> invalid user account creation test - no user last name
    test("Invalid User Account Creation Test - No User Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - no user last name
        await testMethods.invalidUserAccountCreationNoLastNameTest(page);
        //close the page explicitly
        await page.close();
    });

});