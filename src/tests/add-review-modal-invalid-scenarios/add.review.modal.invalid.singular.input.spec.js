import { test } from '@playwright/test';

import {TestMethods} from "../utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(95000);

test.describe("Invalid Add Product Review Tests - No Singular Input", () => {

    // Test 016b -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review full name (the error wasn't triggered but the missing full name input wasn't permitted)
    test("Invalid Add Product Review Test (as a guest) - No Guest Full Name", async ({page}) => {
        //launch the page
        await page.goto('/');
        //invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review full name
        await testMethods.invalidAddProductReviewNoGuestFullNameTest(page);
    });

});