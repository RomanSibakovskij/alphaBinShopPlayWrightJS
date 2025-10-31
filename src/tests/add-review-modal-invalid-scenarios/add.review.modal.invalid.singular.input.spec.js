import { test } from '@playwright/test';

import {TestMethods} from "../utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(95000);

test.describe("Invalid Add Product Review Tests - No Singular Input", () => {

    // Test 016b -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review full name (the React error was triggered)
    test("Invalid Add Product Review Test (as a guest) - No Guest Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review full name
        await testMethods.invalidAddProductReviewNoGuestFullNameTest(page);
    });

    // Test 016c -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review email (the React error was triggered)
    test("Invalid Add Product Review Test (as a guest) - No Guest Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review email
        await testMethods.invalidAddProductReviewNoGuestEmailTest(page);
    });

    // Test 016d -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review stars (the error wasn't triggered but the missing review stars input wasn't permitted)
    test("Invalid Add Product Review Test (as a guest) - No Guest Review Stars", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review stars
        await testMethods.invalidAddProductReviewNoGuestReviewStarsTest(page);
    });

    // Test 016e -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review title (the React error was triggered)
    test("Invalid Add Product Review Test (as a guest) - No Guest Review Title", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review title
        await testMethods.invalidAddProductReviewNoGuestReviewTitleTest(page);
    });

    // Test 016f -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review (the React error was triggered)
    test("Invalid Add Product Review Test (as a guest) - No Guest Review", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review
        await testMethods.invalidAddProductReviewNoGuestReviewTest(page);
    });

});

test.describe("Invalid Add Product Review Tests - Too Short Singular Input", () => {

    // Test 016g -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review full name (3 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Too Short Guest Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review full name
        await testMethods.invalidAddProductReviewTooShortGuestFullNameTest(page);
    });

    // Test 016h -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review email (1 char -> name, domain) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Too Short Guest Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review email
        await testMethods.invalidAddProductReviewTooShortGuestEmailTest(page);
    });

    // Test 016i -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review title (1 char) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Too Short Guest Review Title", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review title
        await testMethods.invalidAddProductReviewTooShortGuestReviewTitleTest(page);
    });

    // Test 016j -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review (9 chars)
    test("Invalid Add Product Review Test (as a guest) - Too Short Guest Review", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review
        await testMethods.invalidAddProductReviewTooShortGuestReviewTest(page);
    });

});

test.describe("Invalid Add Product Review Tests - Too Long Singular Input", () => {

    // Test 016k -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review full name (201 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Too Long Guest Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review full name
        await testMethods.invalidAddProductReviewTooLongGuestFullNameTest(page);
    });

    // Test 016l -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review email (100 chars -> name, domain) (the React error was triggered)
    test("Invalid Add Product Review Test (as a guest) - Too Long Guest Email", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review email
        await testMethods.invalidAddProductReviewTooLongGuestEmailTest(page);
    });

    // Test 016m -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review title (100 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Too Long Guest Review Title", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review title
        await testMethods.invalidAddProductReviewTooLongGuestReviewTitleTest(page);
    });

    // Test 016n -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review (10001 chars) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Too Long Guest Review", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review
        await testMethods.invalidAddProductReviewTooLongGuestReviewTest(page);
    });

});

test.describe("Invalid Add Product Review Tests - Invalid Singular Input Format", () => {

    // Test 016o -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review full name format (special symbols only) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Invalid Guest Full Name Format", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review full name format
        await testMethods.invalidAddProductReviewInvalidGuestFullNameFormatTest(page);
    });

    // Test 016p -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review email format (missing '@') (the React error was triggered)
    test("Invalid Add Product Review Test (as a guest) - Invalid Guest Email Format", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review email format
        await testMethods.invalidAddProductReviewInvalidGuestEmailFormatTest(page);
    });

    // Test 016q -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review title format (special symbols only) (the error wasn't triggered, test has failed)
    test("Invalid Add Product Review Test (as a guest) - Invalid Guest Review Title Format", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review title format
        await testMethods.invalidAddProductReviewInvalidGuestReviewTitleFormatTest(page);
    });

});