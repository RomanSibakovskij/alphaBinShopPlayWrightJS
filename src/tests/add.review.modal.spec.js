import { test } from '@playwright/test';

import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(95000);

test.describe.configure({
    mode: "default"
});

test.describe("Add Product Review Tests", () => {

    // Test 016 -> add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
    test("Add Product Review Test (as a guest)", async ({page}) => {
        //launch the page
        await page.goto('/');
        //add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
        await testMethods.addProductReviewTest(page);
    });

});