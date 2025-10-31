"use strict"

import {WishlistDashboardPage} from "../../pages/wishlist.dashboard.page.mjs";
import {expect} from "@playwright/test";

class WishlistDashboardPageTextElementAsserts {

    //wishlist dashboard page text element assert test method
    async isWishlistDashboardPageTextElementAsExpected(page){
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        //assert the wishlist dashboard page title is as expected
        const wishlistDashPageTitle = await wishlistDashboardPage.getWishlistDashPageTitle();
        expect(wishlistDashPageTitle).toBe("My Wishlist");
        //assert the wishlist dashboard page continue shopping button text is as expected
        const wishlistDashPageContinueShoppingBtnText = await wishlistDashboardPage.getWishlistDashPageContinueShoppingBtnText();
        expect(wishlistDashPageContinueShoppingBtnText).toBe("Continue Shopping");
        //assert the wishlist dashboard page view cart button text is as expected
        const wishlistDashPageViewCartBtnText = await wishlistDashboardPage.getWishlistDashPageViewCartBtnText();
        expect(wishlistDashPageViewCartBtnText).toBe("View Cart");
        //list elements
        //assert the wishlist dashboard page add to cart button texts are as expected (as a list)
        const wishlistDashPageAddToCartBtnTextTexts = await wishlistDashboardPage.getWishlistDashPageAddToCartBtnText();
        expect(wishlistDashPageAddToCartBtnTextTexts.length).toBeGreaterThan(0);
        wishlistDashPageAddToCartBtnTextTexts.forEach(text => {
            expect(text).toBe("Add to Cart");
        });
    }

    //wishlist dashboard page (empty) text element assert test method
    async isEmptyWishlistDashboardPageTextElementAsExpected(page){
        const wishlistDashboardPage = new WishlistDashboardPage(page);
        //assert the wishlist dashboard page title is as expected
        const wishlistDashPageTitle = await wishlistDashboardPage.getWishlistDashPageTitle();
        expect(wishlistDashPageTitle).toBe("My Wishlist");
        //assert the wishlist dashboard page empty wishlist title is as expected
        const wishlistDashPageEmptyWishlistTitle = await wishlistDashboardPage.getWishlistDashPageEmptyWishlistMessageOne();
        expect(wishlistDashPageEmptyWishlistTitle).toBe("Your wishlist is empty");
        //assert the wishlist dashboard page empty wishlist description is as expected
        const wishlistDashPageEmptyWishlistDesc = await wishlistDashboardPage.getWishlistDashPageEmptyWishlistMessageTwo();
        expect(wishlistDashPageEmptyWishlistDesc).toBe("Items added to your wishlist will be saved here. Start browsing and add your favorite products!");
        //assert the wishlist dashboard page title is as expected
        const wishlistDashPageShopNowBtnText = await wishlistDashboardPage.getWishlistDashPageEmptyWishlistShopNowBtnText();
        expect(wishlistDashPageShopNowBtnText).toBe("Shop Now");
    }

}
export {WishlistDashboardPageTextElementAsserts};