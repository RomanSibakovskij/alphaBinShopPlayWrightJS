import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(125000);

test.describe("Single Featured Product Checkout Confirmation Test", () => {

    // Test 025 -> single featured product ("Epson EF-100 Smart Portable Projector") (cash on delivery) check out confirmation test (as a registered user)
    test("Single Featured Product Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //single featured product ("Epson EF-100 Smart Portable Projector") (cash on delivery) check out confirmation test (as a registered user)
        await testMethods.validProductCashOnDeliveryCheckoutConfirmationTest(page);
    });

});
