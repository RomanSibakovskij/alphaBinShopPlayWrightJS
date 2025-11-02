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

    // Test 029ab -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address state (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Address State", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address state
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressStateTest(page);
    });

    // Test 029ac -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Address", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressTest(page);
    });

    // Test 029ad -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping post code (6 digits) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Post Code", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping post code
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressPostCodeTest(page);
    });

    // Test 029ae -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping country (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Ship Country", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping country
        await testMethods.invalidProductCheckoutConfirmationTooLongShipAddressCountryTest(page);
    });

    // Test 029af -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card number (17 digits) (the error was triggered but the input was removed after "Place order" button click)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Credit Card Number", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card number
        await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardNumberTest(page);
    });

    // Test 029ag -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card name (201 chars) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Credit Card Name", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card name
        await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardNameTest(page);
    });

    // Test 029ah -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card expiration month (3 digits) (the error was triggered but the input form doesn't allow 3-digit input)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Credit Card Exp Month", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card expiration month
        await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardExpMonthTest(page);
    });

    // Test 029ai -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card expiration year (3 digits) (the error was triggered but the input form doesn't allow 3-digit input)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Too Long Credit Card Exp Year", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card expiration year
        await testMethods.invalidProductCheckoutConfirmationTooLongCreditCardExpYearTest(page);
    });

});