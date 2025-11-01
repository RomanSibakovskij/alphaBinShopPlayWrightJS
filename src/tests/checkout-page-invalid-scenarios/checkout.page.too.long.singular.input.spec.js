import { test } from '@playwright/test';

import {TestMethods} from "../utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(125000);

test.describe("Invalid Single Featured Product Checkout Confirmation Tests - Too Long Singular Input", () => {

    //important note: even though the errors weren't triggered, changes don't apply to shipping address

    // Test 029y -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address full name (201 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Address Full Name", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address full name
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressFullNameTest(page);
    });

    // Test 029z -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Address Email", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address email
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressEmailTest(page);
    });

    // Test 029aa -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address city (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Address City", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address city
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressCityTest(page);
    });

});