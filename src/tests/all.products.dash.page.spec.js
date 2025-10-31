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

});