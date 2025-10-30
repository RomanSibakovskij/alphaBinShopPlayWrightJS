import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(55000);

test.describe("Valid Add User Address Tests", () => {

    // Test 007 -> valid add user address test
    test("Valid Add User Address Test", async ({page}) => {
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
    });

    // Test 007a -> add second user address test
    test("Add Second User Address Test", async ({page}) => {
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
        //valid add second user address test
        await testMethods.validAddSecondUserAddressTest(page);
    });

});

test.describe("Update User Address Test", () => {

    // Test 007b -> update user address test
    test("Update User Address Test", async ({page}) => {
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
        //update user address test
        await testMethods.updateUserAddressTest(page);
    });

});

test.describe("Remove User Address Test", () => {

    // Test 008 -> remove user address test
    test("Remove User Address Test", async ({page}) => {
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
        //remove user address test
        await testMethods.removeUserAddressTest(page);
    });

});