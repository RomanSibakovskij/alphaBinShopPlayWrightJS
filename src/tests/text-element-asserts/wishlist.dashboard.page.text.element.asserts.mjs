"use strict"

import {WishlistDashboardPage} from "../../pages/wishlist.dashboard.page.js";
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

}
export {WishlistDashboardPageTextElementAsserts};