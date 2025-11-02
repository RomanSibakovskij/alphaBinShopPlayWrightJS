"use strict"

import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {expect} from "@playwright/test";

class SingleProductPageWebElementAsserts{

    //single product page web element assert test method
    async isSingleProductPageWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //assert the single product page title is visible
        await expect(singleProductPage.singleProductPageTitle).toBeVisible();
        //assert the single product page description is visible
        await expect(singleProductPage.singleProductPageDescription).toBeVisible();
        //assert the single product page review star block is visible
        await expect(singleProductPage.singleProductPageReviewStarBlock).toBeVisible();
        //assert the single product page review count is visible
        await expect(singleProductPage.singleProductPageReviewCount).toBeVisible();
        //assert the single product page product unit price is visible
        await expect(singleProductPage.singleProductPageUnitPrice).toBeVisible();
        //assert the single product page main product image is visible
        await expect(singleProductPage.singleProductPageMainProductImage).toBeVisible();
        //assert the single product page quantity subtext is visible
        await expect(singleProductPage.singleProductPageQuantitySubtext).toBeVisible();
        //assert the single product page product quantity decrease is visible
        await expect(singleProductPage.singleProductPageProductQtyDecreaseButton).toBeVisible();
        //assert the single product page product quantity counter is visible
        await expect(singleProductPage.singleProductPageProductQtyCounter).toBeVisible();
        //assert the single product page product quantity increase is visible
        await expect(singleProductPage.singleProductPageProductQtyIncreaseButton).toBeVisible();
        //assert the single product page product add to cart button is visible
        await expect(singleProductPage.singleProductPageProductAddToCartButton).toBeVisible();
        //assert the single product page product buy now button is visible
        await expect(singleProductPage.singleProductPageProductBuyNowButton).toBeVisible();
        //list elements
        //assert the single product page product images are visible (as a list)
        const singleProductPageProductImages = singleProductPage.singleProductPageProductImgElements;
        const singleProductPageProductImagesCount = await singleProductPageProductImages.count();
        for (let i = 0; i < singleProductPageProductImagesCount; i++) {
            await expect(singleProductPageProductImages.nth(i)).toBeVisible();
        }
        //assert the single product page lower product images are visible (as a list)
        const singleProductPageLowerProductImages = singleProductPage.singleProductPageLowerProductImgElements;
        const singleProductPageLowerProductImagesCount = await singleProductPageLowerProductImages.count();
        for (let i = 0; i < singleProductPageLowerProductImagesCount; i++) {
            await expect(singleProductPageLowerProductImages.nth(i)).toBeVisible();
        }
        //navbar elements
        //assert the single product page lower product images are visible (as a list)
        const singleProductPageNavbarButtons = singleProductPage.singleProductPageNavbarButtonElements;
        const singleProductPageNavbarButtonsCount = await singleProductPageNavbarButtons.count();
        for (let i = 0; i < singleProductPageNavbarButtonsCount; i++) {
            await expect(singleProductPageNavbarButtons.nth(i)).toBeVisible();
        }
        //description section
        //assert the single product page product description is visible
        await expect(singleProductPage.singleProductPageProductDescription).toBeVisible();
        //additional information data
        //assert the single product page additional information data is visible
        await expect(singleProductPage.singleProductPageProductDescription).toBeVisible();
    }

    //single product page (description section) web element assert test method
    async isSingleProductPageDescriptionWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //description section
        //assert the single product page product description is visible
        await expect(singleProductPage.singleProductPageProductDescription).toBeVisible();
    }

    //single product page (additional information section) web element assert test method
    async isSingleProductPageAdditionalInfoWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //additional information section
        //assert the single product page additional information data is visible
        await expect(singleProductPage.singleProductPageAdditionalInformationData).toBeVisible();
    }

    //single product page (review section) web element assert test method
    async isSingleProductPageReviewWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //review section
        //assert the single product page review names are visible (as a list)
        const singleProductPageReviewNames = singleProductPage.singleProductPageReviewNameElement;
        const singleProductPageReviewNameCount = await singleProductPageReviewNames.count();
        for (let i = 0; i < singleProductPageReviewNameCount; i++) {
            await expect(singleProductPageReviewNames.nth(i)).toBeVisible();
        }
        //assert the single product page review submission dates are visible (as a list)
        const singleProductPageReviewSubmissionDates = singleProductPage.singleProductPageReviewSubmissionDateElement;
        const singleProductPageReviewSubmissionDateCount = await singleProductPageReviewSubmissionDates.count();
        for (let i = 0; i < singleProductPageReviewSubmissionDateCount; i++) {
            await expect(singleProductPageReviewSubmissionDates.nth(i)).toBeVisible();
        }
        //assert the single product page review edit links are visible (as a list)
        const singleProductPageReviewEditLinks = singleProductPage.singleProductPageReviewEditLinkElement;
        const singleProductPageReviewEditLinkCount = await singleProductPageReviewEditLinks.count();
        for (let i = 0; i < singleProductPageReviewEditLinkCount; i++) {
            await expect(singleProductPageReviewEditLinks.nth(i)).toBeVisible();
        }
        //assert the single product page review delete links are visible (as a list)
        const singleProductPageReviewDeleteLinks = singleProductPage.singleProductPageReviewDeleteLinkElement;
        const singleProductPageReviewDeleteLinkCount = await singleProductPageReviewDeleteLinks.count();
        for (let i = 0; i < singleProductPageReviewDeleteLinkCount; i++) {
            await expect(singleProductPageReviewDeleteLinks.nth(i)).toBeVisible();
        }
        //assert the single product page review stars are visible (as a list)
        const singleProductPageReviewStars = singleProductPage.singleProductPageReviewStarElement;
        const singleProductPageReviewStarCount = await singleProductPageReviewStars.count();
        for (let i = 0; i < singleProductPageReviewStarCount; i++) {
            await expect(singleProductPageReviewStars.nth(i)).toBeVisible();
        }
        //assert the single product page review titles are visible (as a list)
        const singleProductPageReviewTitles = singleProductPage.singleProductPageReviewTitleElement;
        const singleProductPageReviewTitleCount = await singleProductPageReviewTitles.count();
        for (let i = 0; i < singleProductPageReviewTitleCount; i++) {
            await expect(singleProductPageReviewTitles.nth(i)).toBeVisible();
        }
        //assert the single product page review texts are visible (as a list)
        const singleProductPageReviewTexts = singleProductPage.singleProductPageReviewTextElement;
        const singleProductPageReviewTextCount = await singleProductPageReviewTexts.count();
        for (let i = 0; i < singleProductPageReviewTextCount; i++) {
            await expect(singleProductPageReviewTexts.nth(i)).toBeVisible();
        }
    }

    //single product page (you may also like section) web element assert test method
    async isSingleProductPageYouMayAlsoLikeWebElementVisible(page){
        const singleProductPage = new SingleProductPage(page);
        //you may also like section
        //assert the single product page you may also like section title is visible
        await expect(singleProductPage.singleProductPageYouMayLikeSectionTitle).toBeVisible();
        //assert the single product page you may also like scroll left button is visible
        await expect(singleProductPage.singleProductPageYouMayLikeScrollLeftBtn).toBeVisible();
        //assert the single product page you may also like scroll right button is visible
        await expect(singleProductPage.singleProductPageYouMayLikeScrollRightBtn).toBeVisible();
        //list elements
        //assert the single product page you may also like product cards are visible (as a list)
        const singleProductPageYouMayLikeProductCards = singleProductPage.singleProductPageYouMayLikeProductCardElement;
        const singleProductPageYouMayLikeProductCardCount = await singleProductPageYouMayLikeProductCards.count();
        for (let i = 0; i < singleProductPageYouMayLikeProductCardCount; i++) {
            await expect(singleProductPageYouMayLikeProductCards.nth(i)).toBeVisible();
        }
        //assert the single product page you may also like product images are visible (as a list)
        const singleProductPageYouMayLikeProductImgs = singleProductPage.singleProductPageYouMayLikeProductImgElement;
        const singleProductPageYouMayLikeProductImgCount = await singleProductPageYouMayLikeProductImgs.count();
        for (let i = 0; i < singleProductPageYouMayLikeProductImgCount; i++) {
            await expect(singleProductPageYouMayLikeProductImgs.nth(i)).toBeVisible();
        }
        //assert the single product page you may also like product names are visible (as a list)
        const singleProductPageYouMayLikeProductNames = singleProductPage.singleProductPageYouMayLikeProductNameElement;
        const singleProductPageYouMayLikeProductNameCount = await singleProductPageYouMayLikeProductNames.count();
        for (let i = 0; i < singleProductPageYouMayLikeProductNameCount; i++) {
            await expect(singleProductPageYouMayLikeProductNames.nth(i)).toBeVisible();
        }
        //assert the single product page you may also like product review stars are visible (as a list)
        const singleProductPageYouMayLikeProductReviewStars = singleProductPage.singleProductPageYouMayLikeProductReviewStarElement;
        const singleProductPageYouMayLikeProductReviewStarCount = await singleProductPageYouMayLikeProductReviewStars.count();
        for (let i = 0; i < singleProductPageYouMayLikeProductReviewStarCount; i++) {
            await expect(singleProductPageYouMayLikeProductReviewStars.nth(i)).toBeVisible();
        }
        //assert the single product page you may also like product review counts are visible (as a list)
        const singleProductPageYouMayLikeProductReviewCounts = singleProductPage.singleProductPageYouMayLikeProductReviewCountElement;
        const singleProductPageYouMayLikeProductReviewCountsCount = await singleProductPageYouMayLikeProductReviewCounts.count();
        for (let i = 0; i < singleProductPageYouMayLikeProductReviewCountsCount; i++) {
            await expect(singleProductPageYouMayLikeProductReviewCounts.nth(i)).toBeVisible();
        }
        //assert the single product page you may also like product unit prices are visible (as a list)
        const singleProductPageYouMayLikeProductUnitPrices = singleProductPage.singleProductPageYouMayLikeProductUnitPriceElement;
        const singleProductPageYouMayLikeProductUnitPriceCount = await singleProductPageYouMayLikeProductUnitPrices.count();
        for (let i = 0; i < singleProductPageYouMayLikeProductUnitPriceCount; i++) {
            await expect(singleProductPageYouMayLikeProductUnitPrices.nth(i)).toBeVisible();
        }
    }

}
export {SingleProductPageWebElementAsserts};