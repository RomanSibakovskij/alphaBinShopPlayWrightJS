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
    });

    // Test 002b -> invalid user account creation test - no user last name
    test("Invalid User Account Creation Test - No User Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - no user last name
        await testMethods.invalidUserAccountCreationNoLastNameTest(page);
    });

    // Test 002c -> invalid user account creation test - no user email
    test("Invalid User Account Creation Test - No User Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - no user email
        await testMethods.invalidUserAccountCreationNoEmailTest(page);
    });

    // Test 002d -> invalid user account creation test - no user password
    test("Invalid User Account Creation Test - No User Password", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - no user password
        await testMethods.invalidUserAccountCreationNoPasswordTest(page);
    });

});

test.describe("Invalid User Account Creation Test - Too Short Singular Input", () => {

    // Test 002e -> invalid user account creation test - too short user first name (1 char) (the error wasn't triggered, test has failed)
    test("Invalid User Account Creation Test - Too Short User First Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too short user first name (1 char)
        await testMethods.invalidUserAccountCreationTooShortFirstNameTest(page);
    });

    // Test 002f -> invalid user account creation test - too short user last name (1 char) (the error wasn't triggered, test has failed)
    test("Invalid User Account Creation Test - Too Short User Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too short user last name (1 char)
        await testMethods.invalidUserAccountCreationTooShortLastNameTest(page);
    });

    // Test 002g -> invalid user account creation test - too short user email (1 char -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid User Account Creation Test - Too Short User Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too short user email (1 char -> name, domain)
        await testMethods.invalidUserAccountCreationTooShortEmailTest(page);
    });

    // Test 002h -> invalid user account creation test - too short user password (5 chars)
    test("Invalid User Account Creation Test - Too Short User Password", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too short user password (5 chars)
        await testMethods.invalidUserAccountCreationTooShortPasswordTest(page);
    });

});

test.describe("Invalid User Account Creation Test - Too Long Singular Input", () => {

    // Test 002i -> invalid user account creation test - too long user first name (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid User Account Creation Test - Too Long User First Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too long user first name (100 chars)
        await testMethods.invalidUserAccountCreationTooLongFirstNameTest(page);
    });

    // Test 002j -> invalid user account creation test - too long user last name (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid User Account Creation Test - Too Long User Last Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too long user last name (100 chars)
        await testMethods.invalidUserAccountCreationTooLongLastNameTest(page);
    });

    // Test 002k -> invalid user account creation test - too long user email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid User Account Creation Test - Too Long User Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //invalid user account creation test - too long user email (100 chars -> name, domain)
        await testMethods.invalidUserAccountCreationTooLongEmailTest(page);
    });

});