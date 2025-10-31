import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(70000);

test.describe("Remove Featured Product From Wishlist Test", () => {

    // Test 013 -> remove featured product ("Dell XPS 13 (2021) Laptop") from wishlist test (as a guest)
    test("Remove Featured Product From Wishlist Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test (as a guest)
        await testMethods.addSingleFeaturedProductToWishlistTest(page);
        //remove featured product ("Dell XPS 13 (2021) Laptop") from wishlist test (as a guest)
        await testMethods.removeSingleProductFromWishlistTest(page);
    });

});

test.describe("Add Single Featured Product From Wishlist To Cart Tests", () => {

    // Test 014 -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a guest)
    test("Add Single Featured Product From Wishlist To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a guest)
        await testMethods.addSingleFeaturedProductToWishlistTest(page);
        //add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a guest)
        await testMethods.addSingleWishlistProductToCartTest(page);
    });

    // Test 014a -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a registered user)
    test("Add Single Featured Product From Wishlist To Cart Test (as a registered user)", async ({page}) => {
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
    });

});