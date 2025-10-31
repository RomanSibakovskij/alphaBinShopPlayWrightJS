"use strict"

import {WishlistDashboardPage} from "../../pages/wishlist.dashboard.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class WishlistDashboardPageDataLogger {

    //wishlist dashboard page product data logger method
    async logWishlistDashboardPageProductData(page){
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        console.log("Wishlist dashboard page displayed product data: " + "\n");

        Logger.info("Wishlist dashboard page displayed product name(s): " + await wishlistDashboardPage.getWishlistDashPageProductName());
        Logger.info("Wishlist dashboard page displayed product review count(s): " + await wishlistDashboardPage.getWishlistDashPageProductReviewCount());
        Logger.info("Wishlist dashboard page displayed product unit price(s): " + await wishlistDashboardPage.getWishlistDashPageProductUnitPrice() + "\n");

    }

}
export {WishlistDashboardPageDataLogger};