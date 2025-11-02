import { test } from '@playwright/test';

import {TestMethods} from "../utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(125000);

test.describe("Invalid Single Featured Product Checkout Confirmation Tests - Invalid Singular Input", () => {

    //important note: even though the errors weren't triggered, changes don't apply to shipping address

    // Test 029ak -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address full name format (special symbols only) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Invalid Ship Address Full Name Format", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address full name format
        await testMethods.invalidProductCheckoutConfirmationInvalidShipAddressFullNameFormatTest(page);
    });

    // Test 029al -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address email format (missing '@')
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Invalid Ship Address Email Format", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address email format
        await testMethods.invalidProductCheckoutConfirmationInvalidShipAddressEmailFormatTest(page);
    });

    // Test 029am -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address city format (special symbols only) (the error wasn't triggered, test has failed)
    test("Invalid Single Featured Product Checkout Confirmation Test (as a registered user) - Invalid Ship Address City Format", async ({page}) => {
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
        //invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address city format
        await testMethods.invalidProductCheckoutConfirmationInvalidShipAddressCityFormatTest(page);
    });


});