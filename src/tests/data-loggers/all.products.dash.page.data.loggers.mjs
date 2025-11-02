"use strict"

import {AllProductsDashboardPage} from "../../pages/all.products.dashboard.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class AllProductsDashPageDataLoggers {

    //all products dashboard page product data logger method
    async logAllProductsDashPageProductData(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        console.log("All products dashboard page displayed product data: " + "\n");

        Logger.info("All products dashboard page displayed product count: " + await allProductsDashboardPage.getAllProductsDashboardPageProductCount());
        Logger.info("All products dashboard page displayed product name(s): " + await allProductsDashboardPage.getAllProductsDashPageProductName());
        Logger.info("All products dashboard page displayed product review count(s): " + await allProductsDashboardPage.getAllProductsDashPageProductReviewCount());
        Logger.info("All products dashboard page displayed product unit price(s): " + await allProductsDashboardPage.getAllProductsDashPageProductUnitPrice());

    }

    //all products dashboard page price range data logger method
    async logAllProductsDashPageProductPriceRangeData(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        console.log("All products dashboard page displayed product price range data: " + "\n");

        Logger.info("All products dashboard page displayed product price range: " + await allProductsDashboardPage.getAllProductsDashboardPageFiltersCategoryPriceRange());

    }

}
export {AllProductsDashPageDataLoggers};