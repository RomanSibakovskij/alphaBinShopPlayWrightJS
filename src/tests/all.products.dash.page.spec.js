import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(95000);

test.describe("Add All Products Dashboard Page Single Product To Cart Tests", () => {

    // Test 015 -> add all products dashboard page single product ("Rode NT1-A Condenser Mic") to cart test (as a guest)
    test("Add All Products Dashboard Page Single Product To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add all products dashboard page single product ("Rode NT1-A Condenser Mic") to cart test (as a guest)
        await testMethods.addSingleAllProductsDashPageProductToCartTest(page);
    });

    // Test 015a -> add all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") to cart test (as a registered user)
    test("Add All Products Dashboard Page Single Product To Cart Test (as a registered user)", async ({page}) => {
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
    });

});

test.describe("Add All Products Dashboard Page Multiple Products To Cart Tests", () => {

    // Test 015b -> add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to cart test (as a guest)
    test("Add All Products Dashboard Page Multiple Products To Cart Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to cart test (as a guest)
        await testMethods.addMultipleAllProductsDashPageProductsToCartTest(page);
    });

    // Test 015c -> add all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") to cart test (as a registered user)
    test("Add All Products Dashboard Page Multiple Products To Cart Test (as a registered user)", async ({page}) => {
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
    });

});