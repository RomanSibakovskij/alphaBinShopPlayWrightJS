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

test.describe("Add Multiple New Arrivals Products To Checkout Tests", () => {

    // Test 020b -> add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to check out test (as a guest) (the user account is required, test has failed)
    test("Add Multiple New Arrivals Products To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to cart test (as a guest)
        await testMethods.addMultipleNewArrivalsProductsToCartTest(page);
        //add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 020c -> add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to check out test (as a registered user)
    test("Add Multiple New Arrivals Products To Checkout Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add All Products Dashboard Page Single Product To Checkout Tests", () => {

    // Test 021 -> add all products dashboard page single product ("Rode NT1-A Condenser Mic") to check out test (as a guest) (the user account is required, test has failed)
    test("Add All Products Dashboard Page Single Product To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add all products dashboard page single product ("Rode NT1-A Condenser Mic") to cart test (as a guest)
        await testMethods.addSingleAllProductsDashPageProductToCartTest(page);
        //add all products dashboard page single product ("Rode NT1-A Condenser Mic") to check out test (as a guest) (the user account is required, test has failed)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 021a -> add all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") to check out test (as a registered user)
    test("Add All Products Dashboard Page Single Product To Checkout Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add All Products Dashboard Page Multiple Products To Checkout Tests", () => {

    // Test 021b -> add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to check out test (as a guest) (the user account is required, test has failed)
    test("Add All Products Dashboard Page Multiple Products To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to cart test (as a guest)
        await testMethods.addMultipleAllProductsDashPageProductsToCartTest(page);
        //add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 021c -> add all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") to check out test (as a registered user)
    test("Add All Products Dashboard Page Multiple Products To Checkout Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add Single Featured Product From Wishlist To Checkout Tests", () => {

    // Test 022 -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to check out test (as a guest) (the user account is required, test has failed)
    test("Add Single Featured Product From Wishlist To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a guest)
        await testMethods.addSingleFeaturedProductToWishlistTest(page);
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a guest)
        await testMethods.addSingleWishlistProductToCartTest(page);
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 022a -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to check out test (as a registered user)
    test("Add Single Featured Product From Wishlist To Checkout Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add Multiple Featured Products From Wishlist To Checkout Tests", () => {

    // Test 022b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to check out test (as a guest) (the user account is required, test has failed)
    test("Add Multiple Featured Products From Wishlist To Checkout Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") to wishlist test (as a guest)
        await testMethods.addMultipleFeaturedProductToWishlistTest(page);
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to cart test (as a guest)
        await testMethods.addMultipleWishlistProductsToCartTest(page);
        //add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to check out test (as a guest)
        await testMethods.addProductToCheckoutTest(page);
    });

    // Test 022c -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to check out test (as a registered user)
    test("Add Multiple Featured Products From Wishlist To Checkout Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Update Product Quantity In Shopping Cart Page Test", () => {

    // Test 023 -> update featured product ("Dell XPS 13 (2021) Laptop") quantity in shopping cart page test (as a guest)
    test("Update Product Quantity In Shopping Cart Page Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") to cart test (as a guest)
        await testMethods.addSingleFeaturedProductToCartTest(page);
        //update featured product ("Dell XPS 13 (2021) Laptop") quantity in shopping cart page test (as a guest)
        await testMethods.updateProductQtyInShoppingCartPageTest(page);
    });

});