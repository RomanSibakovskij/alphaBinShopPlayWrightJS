import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(95000);

test.describe("Add Product Review Tests", () => {

    // Test 016 -> add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
    test("Add Product Review Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
        await testMethods.addProductReviewTest(page);
    });

    // Test 016a -> add product ("Samsung 32-inch UHD 4K Smart TV") review test (as a registered user)
    test("Add Product Review Test (as a registered user)", async ({page}) => {
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
        //add product ("Samsung 32-inch UHD 4K Smart TV") review test (as a registered user)
        await testMethods.addProductReviewRegUserTest(page);
    });

});

test.describe("Update Product Review Test", () => {

    // Test 017 -> update product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
    test("Update Product Review Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
        await testMethods.addProductReviewTest(page);
        //update product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
        await testMethods.updateProductReviewTest(page);
    });

});

test.describe("Remove Product Review Test", () => {

    // Test 018 -> remove product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) (the link click doesn't appear to do anything (in automation run), test has failed)
    test("Remove Product Review Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
        await testMethods.addProductReviewTest(page);
        //remove product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
        await testMethods.removeProductReviewTest(page);
        //close the page explicitly
        await page.close();
    });

});