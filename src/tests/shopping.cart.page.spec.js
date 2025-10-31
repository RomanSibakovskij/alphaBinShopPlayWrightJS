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

test.describe("Add Multiple Featured Products To Checkout Tests", () => {

    // Test 019b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to check out test (as a guest) (the user account is required, test has failed)
    test("Add Multiple Featured Products To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to cart test (as a guest)
        await testMethods.addMultipleFeaturedProductsToCartTest(page);
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 019c -> add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to check out test (as a registered user)
    test("Add Multiple Featured Products To Checkout Test (as a registered user)", async ({page}) => {
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
        //add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to cart test (as a registered user)
        await testMethods.addMultipleFeaturedProductsToCartRegUserTest(page);
        //add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
    });

});

test.describe("Add Single New Arrivals Product To Checkout Tests", () => {

    // Test 020 -> add single new arrivals product ("Seagate 4TB External Hard Drive") to check out test (as a guest) (the user account is required, test has failed)
    test("Add Single New Arrivals Product To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single new arrivals product ("Seagate 4TB External Hard Drive") to cart test (as a guest)
        await testMethods.addSingleNewArrivalsProductToCartTest(page);
        //add single new arrivals product ("Seagate 4TB External Hard Drive") to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 020a -> add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to check out test (as a registered user)
    test("Add Single New Arrivals Product To Checkout Test (as a registered user)", async ({page}) => {
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
        //add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to cart test (as a registered user)
        await testMethods.addSingleNewArrivalsProductToCartRegUserTest(page);
        //add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
    });

});