import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(105000);

test.describe("Add Single Featured Product To Checkout Tests", () => {

    // Test 019 -> add single featured product ("Dell XPS 13 (2021) Laptop") to check out test (as a guest) (the user account is required, test has failed)
    test("Add Single Featured Product To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") to cart test (as a guest)
        await testMethods.addSingleFeaturedProductToCartTest(page);
        //add single featured product ("Dell XPS 13 (2021) Laptop") to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 019a -> add single featured product ("Epson EF-100 Smart Portable Projector") to check out test (as a registered user)
    test("Add Single Featured Product To Checkout Test (as a registered user)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
        //valid user account creation test
        await testMethods.validUserAccountCreationTest(page)
        //valid user login test
        await testMethods.validUserLoginTest(page)
        //valid add user address (without email) test
        await testMethods.validAddUserAddressWithoutEmailTest(page);
        //add single featured product ("Epson EF-100 Smart Portable Projector") to cart test (as a registered user)
        await testMethods.addSingleFeaturedProductToCartRegUserTest(page);
        //add single featured product ("Epson EF-100 Smart Portable Projector") to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
    });

});