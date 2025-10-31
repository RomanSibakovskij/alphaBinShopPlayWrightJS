//@ts-check
"use strict"

import {AllProductsDashboardPage} from "../../pages/all.products.dashboard.page.mjs";
import {expect} from "@playwright/test";

class AllProductsDashPageWebElementAsserts {

    //all products dashboard page (header) web element assert test method
    async isAllProductsDashboardPageHeaderWebElementVisible(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page title is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageTitle).toBeVisible();
        //assert all products dashboard page search bar input field is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageSearchBarInputField).toBeVisible();
        //assert all products dashboard page grid view button is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageGridViewButton).toBeVisible();
        //assert all products dashboard page list view button is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageListViewButton).toBeVisible();
        //assert all products dashboard page filters button is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersButton).toBeVisible();
        //assert all products dashboard page product counter is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageProductCounter).toBeVisible();
    }

    //all products dashboard page (filter section) web element assert test method
    async isAllProductsDashboardPageFiltersWebElementVisible(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page filters category subtext is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersCategorySubtext).toBeVisible();
        //assert all products dashboard page filters category dropdown menu is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersCategoryDropdownMenu).toBeVisible();
        //assert all products dashboard page filters category price range is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersCategoryPriceRange).toBeVisible();
        //assert all products dashboard page filters category price range from slider is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersCategoryPriceRangeFromSliderBar).toBeVisible();
        //assert all products dashboard page filters category price range to slider is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersCategoryPriceRangeToSliderBar).toBeVisible();
        //assert all products dashboard page filters category reset filter is visible
        await expect(allProductsDashboardPage.allProductsDashboardPageFiltersCategoryResetFiltersBtn).toBeVisible();
    }

    //all products dashboard page (grid product list) web element assert test method
    async isAllProductsDashboardPageGridWebElementVisible(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page product cards are visible (as a list)
        const allProductsDashPageProductCards = allProductsDashboardPage.allProductsDashboardPageProductCardElement;
        const allProductsDashPageProductCardCount = await allProductsDashPageProductCards.count();
        for (let i = 0; i < allProductsDashPageProductCardCount; i++) {
            await expect(allProductsDashPageProductCards.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product images are visible (as a list)
        const allProductsDashPageProductImgs = allProductsDashboardPage.allProductsDashboardPageProductImgElement;
        const allProductsDashPageProductImgCount = await allProductsDashPageProductImgs.count();
        for (let i = 0; i < allProductsDashPageProductImgCount; i++) {
            await expect(allProductsDashPageProductImgs.nth(i)).toBeVisible();
        }
    }

    //all products dashboard page (product list view) web element assert test method
    async isAllProductsDashboardPageListWebElementVisible(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page product cards are visible (as a list)
        const allProductsDashPageProductCards = allProductsDashboardPage.allProductsDashboardPageProductListCardElement;
        const allProductsDashPageProductCardCount = await allProductsDashPageProductCards.count();
        for (let i = 0; i < allProductsDashPageProductCardCount; i++) {
            await expect(allProductsDashPageProductCards.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product images are visible (as a list)
        const allProductsDashPageProductImgs = allProductsDashboardPage.allProductsDashboardPageProductListImgElement;
        const allProductsDashPageProductImgCount = await allProductsDashPageProductImgs.count();
        for (let i = 0; i < allProductsDashPageProductImgCount; i++) {
            await expect(allProductsDashPageProductImgs.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product add to wishlist buttons are visible (as a list)
        const allProductsDashPageProductAddToWishlistButtons = allProductsDashboardPage.allProductsDashboardPageProductListAddToWishlistBtnElement;
        const allProductsDashPageProductAddToWishlistButtonsCount = await allProductsDashPageProductAddToWishlistButtons.count();
        for (let i = 0; i < allProductsDashPageProductAddToWishlistButtonsCount; i++) {
            await expect(allProductsDashPageProductAddToWishlistButtons.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product add to cart buttons are visible (as a list)
        const allProductsDashPageProductAddToCartButtons = allProductsDashboardPage.allProductsDashboardPageProductListAddToCartBtnElement;
        const allProductsDashPageProductAddToCartButtonsCount = await allProductsDashPageProductAddToCartButtons.count();
        for (let i = 0; i < allProductsDashPageProductAddToCartButtonsCount; i++) {
            await expect(allProductsDashPageProductAddToCartButtons.nth(i)).toBeVisible();
        }
    }

    //all products dashboard page (product table) web element assert test method
    async isAllProductsDashboardPageProductTableWebElementVisible(page){
        const allProductsDashboardPage = new AllProductsDashboardPage(page);
        //assert all products dashboard page product names are visible (as a list)
        const allProductsDashPageProductNames = allProductsDashboardPage.allProductsDashboardPageProductNameElement;
        const allProductsDashPageProductNameCount = await allProductsDashPageProductNames.count();
        for (let i = 0; i < allProductsDashPageProductNameCount; i++) {
            await expect(allProductsDashPageProductNames.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product review stars are visible (as a list)
        const allProductsDashPageProductReviewStars = allProductsDashboardPage.allProductsDashboardPageProductReviewStarElement;
        const allProductsDashPageProductReviewStarCount = await allProductsDashPageProductReviewStars.count();
        for (let i = 0; i < allProductsDashPageProductReviewStarCount; i++) {
            await expect(allProductsDashPageProductReviewStars.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product review stars are visible (as a list)
        const allProductsDashPageProductReviewCounts = allProductsDashboardPage.allProductsDashboardPageProductReviewCountElement;
        const allProductsDashPageProductReviewCountsCount = await allProductsDashPageProductReviewCounts.count();
        for (let i = 0; i < allProductsDashPageProductReviewCountsCount; i++) {
            await expect(allProductsDashPageProductReviewCounts.nth(i)).toBeVisible();
        }
        //assert all products dashboard page product unit prices are visible (as a list)
        const allProductsDashPageProductUnitPrices = allProductsDashboardPage.allProductsDashboardPageProductUnitPriceElement;
        const allProductsDashPageProductUnitPriceCount = await allProductsDashPageProductUnitPrices.count();
        for (let i = 0; i < allProductsDashPageProductUnitPriceCount; i++) {
            await expect(allProductsDashPageProductUnitPrices.nth(i)).toBeVisible();
        }
    }

}
export {AllProductsDashPageWebElementAsserts};