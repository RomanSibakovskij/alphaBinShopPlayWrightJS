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

test.describe("Multiple Featured Products Checkout Confirmation Test", () => {

    // Test 025a -> multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") (credit card method) check out confirmation test (as a registered user)
    test("Multiple Featured Products Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") (credit card method) check out confirmation test (as a registered user)
        await testMethods.validProductCreditCheckoutConfirmationTest(page);
    });

});

test.describe("New Arrivals Product Checkout Confirmation Test", () => {

    // Test 026 -> single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") (debit card method) check out confirmation test (as a registered user)
    test("Single New Arrivals Product Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") (debit card method) check out confirmation test (as a registered user)
        await testMethods.validProductDebitCheckoutConfirmationTest(page);
    });

});

test.describe("Multiple New Arrivals Products Checkout Confirmation Test", () => {

    // Test 026a -> multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") (net banking - AXIS) check out confirmation test (as a registered user)
    test("Multiple New Arrivals Products Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
        //multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") (net banking - AXIS) check out confirmation test (as a registered user)
        await testMethods.validProductNetBankAxisCheckoutConfirmationTest(page);
    });

});

test.describe("All Products Dashboard Page Single Product Checkout Confirmation Test", () => {

    // Test 027 -> all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") check out confirmation test (cash on delivery method) (as a registered user)
    test("All Products Dashboard Page Single Product Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //add all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") to cart test (as a registered user)
        await testMethods.addSingleAllProductsDashPageProductToCartRegUserTest(page);
        //add all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
        //all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") check out confirmation test (cash on delivery method) (as a registered user)
        await testMethods.validProductCashOnDeliveryCheckoutConfirmationTest(page);
    });

});

test.describe("All Products Dashboard Page Multiple Products Checkout Confirmation Test", () => {

    // Test 027a -> all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") check out confirmation test (cash on delivery) (as a registered user)
    test("All Products Dashboard Page Multiple Products Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //add all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") to cart test (as a registered user)
        await testMethods.addMultipleAllProductsDashPageProductsToCartRegUserTest(page);
        //add all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
        //all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") check out confirmation test (cash on delivery) (as a registered user)
        await testMethods.validProductCashOnDeliveryCheckoutConfirmationTest(page);
    });

});

test.describe("Single Featured Product From Wishlist Checkout Confirmation Test", () => {

    // Test 028 -> single featured product ("Dell XPS 13 (2021) Laptop") from wishlist check out confirmation test (credit card method) (as a registered user)
    test("Single Featured Product From Wishlist Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test (as a registered user)
        await testMethods.addSingleFeaturedProductToWishlistRegUserTest(page);
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a registered user)
        await testMethods.addSingleWishlistProductToCartTest(page);
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
        //single featured product ("Dell XPS 13 (2021) Laptop") from wishlist check out confirmation test (credit card method) (as a registered user)
        await testMethods.validProductCreditCheckoutConfirmationTest(page);
    });

});

test.describe("Multiple Featured Products From Wishlist Checkout Confirmation Test", () => {

    // Test 028a -> multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist check out confirmation test (debit card method) (as a registered user)
    test("Multiple Featured Products From Wishlist Checkout Confirmation Test (as a registered user)", async ({page}) => {
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
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") to wishlist test (as a registered user)
        await testMethods.addMultipleFeaturedProductToWishlistRegUserTest(page);
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to cart test (as a registered user)
        await testMethods.addMultipleWishlistProductsToCartTest(page);
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to check out test (as a registered user)
        await testMethods.addProductToCheckoutTest(page);
        //multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist check out confirmation test (debit card method) (as a registered user)
        await testMethods.validProductDebitCheckoutConfirmationTest(page);
    });

});