"use strict"

import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {expect} from "@playwright/test";

class SingleProductPageTextElementAsserts {

    //single product page text element assert test method
    async isSingleProductPageTextElementAsExpected(page){
        const singleProductPage = new SingleProductPage(page);
        //assert the single product page product quantity subtext is as expected
        const singleProductPageQtySubtext = await singleProductPage.getSingleProductPageQuantitySubtext();
        expect(singleProductPageQtySubtext).toBe("Quantity");
        //assert the single product page product add to cart button text is as expected
        const singleProductPageAddToCartBtnText = await singleProductPage.getSingleProductPageProductAddToCartBtnText();
        expect(singleProductPageAddToCartBtnText).toBe("ADD TO CART");
        //assert the single product page product add to cart button text is as expected
        const singleProductPageBuyNowBtnText = await singleProductPage.getSingleProductPageProductBuyNowBtnText();
        expect(singleProductPageBuyNowBtnText).toBe("BUY NOW");
        //navbar elements
        //assert home page category names are as expected (as a list)
        const singleProductPageNavbarBtnTexts = await singleProductPage.getSingleProductPageNavbarBtnText();
        const expectedSingleProductPageNavbarBtnTexts = ["Description", "Additional information", "Reviews"];
        expect(singleProductPageNavbarBtnTexts).toEqual(expectedSingleProductPageNavbarBtnTexts);
        //you may also like section
        //assert the single product page product you may also like section title is as expected
        const singleProductPageYouMayLikeSectionTitle = await singleProductPage.getSingleProductPageYouMayLikeSectionTitle();
        expect(singleProductPageYouMayLikeSectionTitle).toBe("You may also like");
    }

    //single product page review section text element assert test method
    async isSingleProductPageReviewTextElementAsExpected(page){
        const singleProductPage = new SingleProductPage(page);
        //assert the single product page review edit link texts are as expected (as a list)
        const singleProductPageReviewEditLinkTexts = await singleProductPage.getSingleProductPageReviewEditLinkText();
        expect(singleProductPageReviewEditLinkTexts.length).toBeGreaterThan(0);
        singleProductPageReviewEditLinkTexts.forEach(text => {
            expect(text).toBe("Edit");
        });
        //assert the single product page review delete link texts are as expected (as a list)
        const singleProductPageReviewDeleteLinkTexts = await singleProductPage.getSingleProductPageReviewDeleteLinkText();
        expect(singleProductPageReviewDeleteLinkTexts.length).toBeGreaterThan(0);
        singleProductPageReviewDeleteLinkTexts.forEach(text => {
            expect(text).toBe("Delete");
        });
    }

}
export {SingleProductPageTextElementAsserts};