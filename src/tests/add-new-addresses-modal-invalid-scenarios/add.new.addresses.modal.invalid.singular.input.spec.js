import { test } from '@playwright/test';

import {TestMethods} from "../utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(55000);

test.describe("Invalid Add User Address Tests - No Singular Input", () => {

    // Test 007c -> invalid add user address test - no address full name
    test("Invalid Add User Address Test - No Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address full name
        await testMethods.invalidAddUserAddressNoFullNameTest(page);
    });

    // Test 007d -> invalid add user address test - no address email
    test("Invalid Add User Address Test - No Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address email
        await testMethods.invalidAddUserAddressNoEmailTest(page);
    });

    // Test 007e -> invalid add user address test - no address street
    test("Invalid Add User Address Test - No Street", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address street
        await testMethods.invalidAddUserAddressNoStreetTest(page);
    });

    // Test 007f -> invalid add user address test - no address city
    test("Invalid Add User Address Test - No City", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address city
        await testMethods.invalidAddUserAddressNoCityTest(page);
    });

    // Test 007g -> invalid add user address test - no address state
    test("Invalid Add User Address Test - No State", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address state
        await testMethods.invalidAddUserAddressNoStateTest(page);
    });

    // Test 007h -> invalid add user address test - no address country
    test("Invalid Add User Address Test - No Country", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address country
        await testMethods.invalidAddUserAddressNoCountryTest(page);
    });

    // Test 007i -> invalid add user address test - no address post code
    test("Invalid Add User Address Test - No Post Code", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - no address post code
        await testMethods.invalidAddUserAddressNoPostCodeTest(page);
    });

});

test.describe("Invalid Add User Address Tests - Too Short Singular Input", () => {

    // Test 007j -> invalid add user address test - too short address full name (3 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address full name (3 chars)
        await testMethods.invalidAddUserAddressTooShortFullNameTest(page);
    });

    // Test 007k -> invalid add user address test - too short address email (1 char -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address email (1 char -> name, domain)
        await testMethods.invalidAddUserAddressTooShortEmailTest(page);
    });

    // Test 007l -> invalid add user address test - too short address street (3 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short Street", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address street (3 chars)
        await testMethods.invalidAddUserAddressTooShortStreetTest(page);
    });

    // Test 007m -> invalid add user address test - too short address city (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short City", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address city (1 char)
        await testMethods.invalidAddUserAddressTooShortCityTest(page);
    });

    // Test 007n -> invalid add user address test - too short address state (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short State", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address state (1 char)
        await testMethods.invalidAddUserAddressTooShortStateTest(page);
    });

    // Test 007o -> invalid add user address test - too short address country (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short Country", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address country (1 char)
        await testMethods.invalidAddUserAddressTooShortCountryTest(page);
    });

    // Test 007p -> invalid add user address test - too short address post code (4 digits) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Short Post Code", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address post code (4 digits)
        await testMethods.invalidAddUserAddressTooShortPostCodeTest(page);
    });

});

test.describe("Invalid Add User Address Tests - Too Long Singular Input", () => {

    // Test 007q -> invalid add user address test - too long address full name (201 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too short address full name (201 chars)
        await testMethods.invalidAddUserAddressTooLongFullNameTest(page);
    });

    // Test 007r -> invalid add user address test - too long address email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too long address email (100 chars -> name, domain)
        await testMethods.invalidAddUserAddressTooLongEmailTest(page);
    });

    // Test 007s -> invalid add user address test - too long address street (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long Street", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too long address street (100 chars)
        await testMethods.invalidAddUserAddressTooLongStreetTest(page);
    });

    // Test 007t -> invalid add user address test - too long address city (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long City", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too long address city (100 chars)
        await testMethods.invalidAddUserAddressTooLongCityTest(page);
    });

    // Test 007u -> invalid add user address test - too long address state (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long State", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too long address state (100 chars)
        await testMethods.invalidAddUserAddressTooLongStateTest(page);
    });

    // Test 007v -> invalid add user address test - too long address country (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long Country", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too long address country (100 chars)
        await testMethods.invalidAddUserAddressTooLongCountryTest(page);
    });

    // Test 007w -> invalid add user address test - too long address post code (6 digits) (the error wasn't triggered, test has failed)
    test("Invalid Add User Address Test - Too Long Post Code", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //invalid add user address test - too long address post code (6 digits)
        await testMethods.invalidAddUserAddressTooLongPostCodeTest(page);
    });

});