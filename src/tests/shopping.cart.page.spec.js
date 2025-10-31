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

});