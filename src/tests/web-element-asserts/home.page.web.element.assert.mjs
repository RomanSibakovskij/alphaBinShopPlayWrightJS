"use strict"

import {HomePage} from "../../pages/home.page.mjs"
import {expect} from "@playwright/test";

class HomePageWebElementAssert {

    //home page web element assert test method
    async isHomePageWebElementVisible(page){
        const homePage = new HomePage(page);
        //welcome image section
        //assert the home page welcome image section is visible
        await expect(homePage.homePageWelcomeImage).toBeVisible();
        //assert the home page welcome title is visible
        await expect(homePage.homePageWelcomeTitle).toBeVisible();
        //assert the home page welcome subtext is visible
        await expect(homePage.homePageWelcomeSubtext).toBeVisible();
        //assert the home page welcome shop now is visible
        await expect(homePage.homePageWelcomeShopNowButton).toBeVisible();
        //categories section (list elements)
        //assert the home page categories images are visible (as a list)
        const homePageCategoriesImages = homePage.homePageCategoriesImgElement;
        const homePageCategoriesImagesCount = await homePageCategoriesImages.count();
        for (let i = 0; i < homePageCategoriesImagesCount; i++) {
            await expect(homePageCategoriesImages.nth(i)).toBeVisible();
        }
        //assert the home page categories name are visible (as a list)
        const homePageCategoriesNames = homePage.homePageCategoriesNameElement;
        const homePageCategoriesNamesCount = await homePageCategoriesNames.count();
        for (let i = 0; i < homePageCategoriesNamesCount; i++) {
            await expect(homePageCategoriesNames.nth(i)).toBeVisible();
        }
        //assert the home page categories description are visible (as a list)
        const homePageCategoriesDescriptions = homePage.homePageCategoriesDescriptionElement;
        const homePageCategoriesDescriptionsCount = await homePageCategoriesDescriptions.count();
        for (let i = 0; i < homePageCategoriesDescriptionsCount; i++) {
            await expect(homePageCategoriesDescriptions.nth(i)).toBeVisible();
        }
        //assert the home page categories explore more links are visible (as a list)
        const homePageCategoriesExploreMoreLinks = homePage.homePageCategoriesExploreMoreLinkElement;
        const homePageCategoriesExploreMoreLinksCount = await homePageCategoriesExploreMoreLinks.count();
        for (let i = 0; i < homePageCategoriesExploreMoreLinksCount; i++) {
            await expect(homePageCategoriesExploreMoreLinks.nth(i)).toBeVisible();
        }
        //featured products section
        //assert the home page featured products section title visible
        await expect(homePage.homePageFeaturedProductsSectionTitle).toBeVisible();
        //featured products section
        //assert the home page featured products scroll left button is visible
        await expect(homePage.homePageFeaturedProductsScrollLeftBtn).toBeVisible();
        //featured products section
        //assert the home page featured products scroll right button is visible
        await expect(homePage.homePageFeaturedProductsScrollRightBtn).toBeVisible();
        //list elements
        //assert the home page featured product images are visible (as a list)
        const homePageFeaturedProductImgs = homePage.homePageFeaturedProductImgElement;
        const homePageFeaturedProductImgsCount = await homePageFeaturedProductImgs.count();
        for (let i = 0; i < homePageFeaturedProductImgsCount; i++) {
            await expect(homePageFeaturedProductImgs.nth(i)).toBeVisible();
        }
        //assert the home page featured product names name visible (as a list)
        const homePageFeaturedProductNames = homePage.homePageFeaturedProductNameElement;
        const homePageFeaturedProductNamesCount = await homePageFeaturedProductNames.count();
        for (let i = 0; i < homePageFeaturedProductNamesCount; i++) {
            await expect(homePageFeaturedProductNames.nth(i)).toBeVisible();
        }
        //assert the home page featured product review stars are visible (as a list)
        const homePageFeaturedProductReviewStars = homePage.homePageFeaturedProductReviewStarElement;
        const homePageFeaturedProductReviewStarsCount = await homePageFeaturedProductReviewStars.count();
        for (let i = 0; i < homePageFeaturedProductReviewStarsCount; i++) {
            await expect(homePageFeaturedProductReviewStars.nth(i)).toBeVisible();
        }
        //assert the home page featured product review counts are visible (as a list)
        const homePageFeaturedProductReviewCounts = homePage.homePageFeaturedProductReviewCountElement;
        const homePageFeaturedProductReviewCountersCount = await homePageFeaturedProductReviewCounts.count();
        for (let i = 0; i < homePageFeaturedProductReviewCountersCount; i++) {
            await expect(homePageFeaturedProductReviewCounts.nth(i)).toBeVisible();
        }
        //assert the home page featured product prices are visible (as a list)
        const homePageFeaturedProductPrices = homePage.homePageFeaturedProductPriceElement;
        const homePageFeaturedProductPricesCount = await homePageFeaturedProductPrices.count();
        for (let i = 0; i < homePageFeaturedProductPricesCount; i++) {
            await expect(homePageFeaturedProductPrices.nth(i)).toBeVisible();
        }
        //laptop discount images section
        //assert the home page laptop discount image is visible
        await expect(homePage.homePageLaptopDiscountImage).toBeVisible();
        //assert the home page laptop discount subtext is visible
        await expect(homePage.homePageLaptopDiscountSubtext).toBeVisible();
        //assert the home page laptop discount shop now button is visible
        await expect(homePage.homePageLaptopDiscountShopNowButton).toBeVisible();
        //price drop images section
        //assert the home page price drop image is visible
        await expect(homePage.homePagePriceDropImage).toBeVisible();
        //assert the home page price drop subtext is visible
        await expect(homePage.homePagePriceDropSubtext).toBeVisible();
        //assert the home page price drop shop now is visible
        await expect(homePage.homePagePriceDropShopNowButton).toBeVisible();
        //new arrivals products section
        //assert the home page new arrivals products section title is visible
        await expect(homePage.homePageNewArrivalsProductsSectionTitle).toBeVisible();
        //assert the home page new arrivals products scroll left button is visible
        await expect(homePage.homePageNewArrivalsProductsScrollLeftBtn).toBeVisible();
        //assert the home page new arrivals products scroll right button is visible
        await expect(homePage.homePageNewArrivalsProductsScrollRightBtn).toBeVisible();
        //list elements
        //assert the home page new arrivals product images are visible (as a list)
        const homePageNewArrivalsProductImgs = homePage.homePageNewArrivalsProductImgElement;
        const homePageNewArrivalsProductImgsCount = await homePageNewArrivalsProductImgs.count();
        for (let i = 0; i < homePageNewArrivalsProductImgsCount; i++) {
            await expect(homePageNewArrivalsProductImgs.nth(i)).toBeVisible();
        }
        //assert the home page new arrivals product names are visible (as a list)
        const homePageNewArrivalsProductNames = homePage.homePageNewArrivalsProductNameElement;
        const homePageNewArrivalsProductNamesCount = await homePageNewArrivalsProductNames.count();
        for (let i = 0; i < homePageNewArrivalsProductNamesCount; i++) {
            await expect(homePageNewArrivalsProductNames.nth(i)).toBeVisible();
        }
        //assert the home page new arrivals product review stars are visible (as a list)
        const homePageNewArrivalsProductReviewStars = homePage.homePageNewArrivalsProductReviewStarElement;
        const homePageNewArrivalsProductReviewStarsCount = await homePageNewArrivalsProductReviewStars.count();
        for (let i = 0; i < homePageNewArrivalsProductReviewStarsCount; i++) {
            await expect(homePageNewArrivalsProductReviewStars.nth(i)).toBeVisible();
        }
        //assert the home page new arrivals product review counts are visible (as a list)
        const homePageNewArrivalsProductReviewCounts = homePage.homePageNewArrivalsProductReviewCountElement;
        const homePageNewArrivalsProductReviewCountersCount = await homePageNewArrivalsProductReviewCounts.count();
        for (let i = 0; i < homePageNewArrivalsProductReviewCountersCount; i++) {
            await expect(homePageNewArrivalsProductReviewCounts.nth(i)).toBeVisible();
        }
        //assert the home page new arrivals product prices are visible (as a list)
        const homePageNewArrivalsProductPrices = homePage.homePageNewArrivalsProductPriceElement;
        const homePageNewArrivalsProductPriceCount = await homePageNewArrivalsProductPrices.count();
        for (let i = 0; i < homePageNewArrivalsProductPriceCount; i++) {
            await expect(homePageNewArrivalsProductPrices.nth(i)).toBeVisible();
        }
        //category products section
        //assert the home page category products section title is visible
        await expect(homePage.homePageCategoryProductsSectionTitle).toBeVisible();
        //assert the home page category products scroll left button is visible
        await expect(homePage.homePageCategoryProductsScrollLeftBtn).toBeVisible();
        //assert the home page category products scroll right button is visible
        await expect(homePage.homePageCategoryProductsScrollRightBtn).toBeVisible();
        //list elements
        //assert the home page category product images are visible (as a list)
        const homePageCategoryProductsImgs = homePage.homePageCategoryProductImgElement;
        const homePageCategoryProductsImgCount = await homePageCategoryProductsImgs.count();
        for (let i = 0; i < homePageCategoryProductsImgCount; i++) {
            await expect(homePageCategoryProductsImgs.nth(i)).toBeVisible();
        }
        //assert the home page category product names are visible (as a list)
        const homePageCategoryProductsNames = homePage.homePageCategoryProductNameElement;
        const homePageCategoryProductsNameCount = await homePageCategoryProductsImgs.count();
        for (let i = 0; i < homePageCategoryProductsNameCount; i++) {
            await expect(homePageCategoryProductsNames.nth(i)).toBeVisible();
        }
        //subscribe section
        //assert the home page subscribe section image is visible
        await expect(homePage.homePageSubscribeSectionImage).toBeVisible();
        //assert the home page subscribe section title is visible
        await expect(homePage.homePageSubscribeSectionTitle).toBeVisible();
        //assert the home page subscribe email input field is visible
        await expect(homePage.homePageSubscribeEmailInputField).toBeVisible();
        //assert the home page subscribe button is visible
        await expect(homePage.homePageSubscribeButton).toBeVisible();
    }

}
export {HomePageWebElementAssert};