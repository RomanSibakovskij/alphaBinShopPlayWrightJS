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