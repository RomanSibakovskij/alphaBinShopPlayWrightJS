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

});