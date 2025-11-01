import { test } from '@playwright/test';

import {TestMethods} from "../utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(125000);

test.describe("Invalid Single Featured Product Checkout Confirmation Tests - Too Short Singular Input", () => {

    //important note: even though the errors weren't triggered, changes don't apply to shipping address

    // Test 029l -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address full name (3 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address Full Name", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address full name
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressFullNameTest(page);
    });

    // Test 029m -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address email (1 char -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address Email", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address email
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressEmailTest(page);
    });

    // Test 029n -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address city (2 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address City", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address city
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressCityTest(page);
    });

    // Test 029o -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address state (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address State", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address state
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressStateTest(page);
    });

    // Test 029p -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address (3 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressTest(page);
    });

    // Test 029q -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address post code (4 digits) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address Post Code", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address post code
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressPostCodeTest(page);
    });

    // Test 029r -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address country (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Short Ship Address Country", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address country
        await testMethods.invalidProductCheckoutConfirmationTooShortShipAddressCountryTest(page);
    });


});