import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(125000);

test.describe("Product Order Cancellation Test", () => {

    //the output will be the same for other products so only this one is being tested to avoid redundancy

    // Test 030 -> product ("Epson EF-100 Smart Portable Projector") (cash on delivery) order cancellation test (as a registered user)
    test("Product Order Cancellation Test (as a registered user)", async ({page}) => {
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
        //product ("Epson EF-100 Smart Portable Projector") (cash on delivery) order removal test (as a registered user)
        await testMethods.cancelPlacedOrderTest(page);
    });

});