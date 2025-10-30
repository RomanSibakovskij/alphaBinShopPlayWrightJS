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
