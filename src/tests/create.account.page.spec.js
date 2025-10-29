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