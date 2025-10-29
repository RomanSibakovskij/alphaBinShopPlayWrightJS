"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class HomePageDataLoggers{

    //home page featured product data logger method
    async logHomePageFeaturedProductData(page){
        const homePage = new HomePage(page);
        console.log("Home page featured product displayed data: " + "\n")

        Logger.info("Home page featured product name(s): " + await homePage.getHomePageFeaturedProductName());
        Logger.info("Home page featured product review count(s): " + await homePage.getHomePageFeaturedProductReviewCount());
        Logger.info("Home page featured product price(s): " + await homePage.getHomePageFeaturedProductPrice() + "\n");
    }

    //home page new arrivals product data logger method
    async logHomePageNewArrivalsProductData(page){
        const homePage = new HomePage(page);
        console.log("Home page new arrivals product displayed data: " + "\n")

        Logger.info("Home page new arrivals product name(s): " + await homePage.getHomePageNewArrivalsProductName());
        Logger.info("Home page new arrivals product review count(s): " + await homePage.getHomePageNewArrivalsProductReviewCount());
        Logger.info("Home page new arrivals product price(s): " + await homePage.getHomePageNewArrivalsProductPrice() + "\n");
    }

}
export {HomePageDataLoggers};