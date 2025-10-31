//@ts-check
"use strict"

import {WishlistDashboardPage} from "../../pages/wishlist.dashboard.page.js";
import {expect} from "@playwright/test";

class WishlistDashboardPageWebElementAsserts {

    //wishlist dashboard page web element assert test method
    async isWishlistDashboardPageWebElementVisible(page){
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        //assert the wishlist dashboard page return back button is visible
        await expect(wishlistDashboardPage.wishlistDashPageReturnBackButton).toBeVisible();
        //assert the wishlist dashboard page title is visible
        await expect(wishlistDashboardPage.wishlistDashPageTitle).toBeVisible();
        //assert the wishlist dashboard page item counter is visible
        await expect(wishlistDashboardPage.wishlistDashPageItemCounter).toBeVisible();
        //assert the wishlist dashboard page continue shopping button is visible
        await expect(wishlistDashboardPage.wishlistDashPageContinueShoppingBtn).toBeVisible();
        //assert the wishlist dashboard page view cart button is visible
        await expect(wishlistDashboardPage.wishlistDashPageViewCartBtn).toBeVisible();
        //list elements
        //assert the wishlist dashboard page product images are visible (as a list)
        const wishlistDashPageProductImages = wishlistDashboardPage.wishlistDashPageProductImgElement;
        const wishlistDashPageProductImageCount = await wishlistDashPageProductImages.count();
        for (let i = 0; i < wishlistDashPageProductImageCount; i++) {
            await expect(wishlistDashPageProductImages.nth(i)).toBeVisible();
        }
        //assert the wishlist dashboard page product names are visible (as a list)
        const wishlistDashPageProductNames = wishlistDashboardPage.wishlistDashPageProductNameElement;
        const wishlistDashPageProductNameCount = await wishlistDashPageProductNames.count();
        for (let i = 0; i < wishlistDashPageProductNameCount; i++) {
            await expect(wishlistDashPageProductNames.nth(i)).toBeVisible();
        }
        //assert the wishlist dashboard page product review stars are visible (as a list)
        const wishlistDashPageProductReviewStars = wishlistDashboardPage.wishlistDashPageProductReviewStarElement;
        const wishlistDashPageProductReviewStarCount = await wishlistDashPageProductReviewStars.count();
        for (let i = 0; i < wishlistDashPageProductReviewStarCount; i++) {
            await expect(wishlistDashPageProductReviewStars.nth(i)).toBeVisible();
        }
        //assert the wishlist dashboard page product review counts are visible (as a list)
        const wishlistDashPageProductReviewCounts = wishlistDashboardPage.wishlistDashPageProductReviewCountElement;
        const wishlistDashPageProductReviewCountsCount = await wishlistDashPageProductReviewCounts.count();
        for (let i = 0; i < wishlistDashPageProductReviewCountsCount; i++) {
            await expect(wishlistDashPageProductReviewCounts.nth(i)).toBeVisible();
        }
        //assert the wishlist dashboard page product unit prices are visible (as a list)
        const wishlistDashPageProductUnitPrices = wishlistDashboardPage.wishlistDashPageProductUnitPriceElement;
        const wishlistDashPageProductUnitPricesCount = await wishlistDashPageProductUnitPrices.count();
        for (let i = 0; i < wishlistDashPageProductUnitPricesCount; i++) {
            await expect(wishlistDashPageProductUnitPrices.nth(i)).toBeVisible();
        }
        //assert the wishlist dashboard page product add to cart buttons are visible (as a list)
        const wishlistDashPageProductAddToCartButtons = wishlistDashboardPage.wishlistDashPageProductAddToCartBtnElement;
        const wishlistDashPageProductAddToCartBtnCount = await wishlistDashPageProductAddToCartButtons.count();
        for (let i = 0; i < wishlistDashPageProductAddToCartBtnCount; i++) {
            await expect(wishlistDashPageProductAddToCartButtons.nth(i)).toBeVisible();
        }
    }

}
export {WishlistDashboardPageWebElementAsserts};