import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(70000);

test.describe("Navigate To Signup Page Test", () => {

    // Test 001 -> navigate to sign up page test
    test("Navigate To Sign Up Page Test", async ({page}) => {
        //launch the page
        await page.goto('/');
        //navigate to signup page test
        await testMethods.navigateToSignUpPageTest(page);
    });

});

test.describe("Add Single Featured Product To Cart Tests", () => {

    // Test 009 -> add single featured product ("Dell XPS 13 (2021) Laptop") to cart test (as a guest)
    test("Add Single Featured Product To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") to cart test (as a guest)
        await testMethods.addSingleFeaturedProductToCartTest(page);
    });

    // Test 009a -> add single featured product ("Epson EF-100 Smart Portable Projector") to cart test (as a registered user)
    test("Add Single Featured Product To Cart Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add Multiple Featured Products To Cart Tests", () => {

    // Test 009b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to cart test (as a guest)
    test("Add Multiple Featured Products To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to cart test (as a guest)
        await testMethods.addMultipleFeaturedProductsToCartTest(page);
    });

    // Test 009c -> add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to cart test (as a registered user)
    test("Add Multiple Featured Products To Cart Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add Single New Arrivals Product To Cart Tests", () => {

    // Test 010 -> add single new arrivals product ("Seagate 4TB External Hard Drive") to cart test (as a guest)
    test("Add Single New Arrivals Product To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single new arrivals product ("Seagate 4TB External Hard Drive") to cart test (as a guest)
        await testMethods.addSingleNewArrivalsProductToCartTest(page);
    });

    // Test 010a -> add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to cart test (as a registered user)
    test("Add Single New Arrivals Product To Cart Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add Multiple New Arrivals Products To Cart Tests", () => {

    // Test 010b -> add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to cart test (as a guest)
    test("Add Multiple New Arrivals Products To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to cart test (as a guest)
        await testMethods.addMultipleNewArrivalsProductsToCartTest(page);
    });

    // Test 010c -> add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to cart test (as a registered user)
    test("Add Multiple New Arrivals Products To Cart Test (as a registered user)", async ({page}) => {
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
        //add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to cart test (as a registered user)
        await testMethods.addMultipleNewArrivalsProductToCartRegUserTest(page);
    });

});

test.describe("Remove Single Product From Cart Modal Test", () => {

    // Test 011 -> remove single featured product ("Dell XPS 13 (2021) Laptop") from cart modal test (as a guest)
    test("Remove Single Featured Product From Cart Modal Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //remove single featured product ("Dell XPS 13 (2021) Laptop") from cart modal test (as a guest)
        await testMethods.removeSingleFeaturedProductFromCartModalTest(page);
    });

});

test.describe("Add Single Featured Product To Wishlist Tests", () => {

    // Test 012 -> add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test (as a guest)
    test("Add Single Featured Product To Wishlist Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test (as a guest)
        await testMethods.addSingleFeaturedProductToWishlistTest(page);
        //close the page explicitly
        await page.close();
    });

});