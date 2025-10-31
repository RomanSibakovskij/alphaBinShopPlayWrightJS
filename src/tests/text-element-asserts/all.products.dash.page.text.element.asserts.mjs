"use strict"

import {AllProductsDashboardPage} from "../../pages/all.products.dashboard.page.mjs";
import {expect} from "@playwright/test";

class AllProductsDashPageTextElementAsserts{

    //all products dashboard page (header) text element test assert
    async isAllProductsDashboardPageHeaderTextElementAsExpected(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page title is as expected
        const allProductsDashPageTitle = await allProductsDashboardPage.getAllProductsDashboardPageTitle();
        expect(allProductsDashPageTitle).toBe("All Products");
        //assert all products dashboard page filters button text is as expected
        const allProductsDashPageFiltersBtnText = await allProductsDashboardPage.getAllProductsDashboardPageFiltersBtnText();
        expect(allProductsDashPageFiltersBtnText).toBe("Filters");
    }

    //all products dashboard page (filters dropdown section) text element test assert
    async isAllProductsDashboardPageFiltersTextElementAsExpected(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page filters category subtext is as expected
        const allProductsDashPageFiltersCategorySubtext = await allProductsDashboardPage.getAllProductsDashboardPageFiltersCategorySubtext();
        await expect(allProductsDashPageFiltersCategorySubtext).toBe("Category");
        //assert all products dashboard page filters category reset button text is as expected
        const allProductsDashPageFiltersCategoryResetFiltersBtnText = await allProductsDashboardPage.getAllProductsDashboardPageFiltersCategoryResetFiltersBtnText();
        await expect(allProductsDashPageFiltersCategoryResetFiltersBtnText).toBe("Reset Filters");
    }

}
export {AllProductsDashPageTextElementAsserts};