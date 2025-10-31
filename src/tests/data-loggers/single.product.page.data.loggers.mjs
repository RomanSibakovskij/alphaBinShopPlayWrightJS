"use strict"

import {SingleProductPage} from "../../pages/single.product.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class SingleProductPageDataLoggers{

    //single product page product data logger method
    async logSingleProductPageProductData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page displayed product data: " + "\n");

        Logger.info("Single product page displayed product name: " + await singleProductPage.getSingleProductPageTitle());
        Logger.info("Single product page displayed product description: " + await singleProductPage.getSingleProductPageDescription());
        Logger.info("Single product page displayed product review count: " + await singleProductPage.getSingleProductPageReviewCount());
        Logger.info("Single product page displayed product unit price: " + await singleProductPage.getSingleProductPageUnitPrice());
        Logger.info("Single product page displayed product quantity: " + await singleProductPage.getSingleProductPageProductQtyCounter() + "\n");

    }

    //single product page product description section data logger method
    async logSingleProductPageProductDescriptionData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page displayed product description section data: " + "\n");

        Logger.info("Single product page displayed product extended description: " + await singleProductPage.getSingleProductPageExtDescription() + "\n");

    }

    //single product page additional information logger method
    async logSingleProductPageAdditionalInfoData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page displayed product additional information data: " + "\n");

        Logger.info("Single product page displayed product additional information data: " + await singleProductPage.getSingleProductPageAdditionalInfoData() + "\n");

    }

    //single product page product (you may also like) data logger method
    async logSingleProductPageYouMayAlsoLikeProductData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page you may also like displayed product data: " + "\n");

        Logger.info("Single product page you may also like displayed product name(s): " + await singleProductPage.getSingleProductPageYouMayLikeProductName());
        Logger.info("Single product page you may also like displayed product review count(s): " + await singleProductPage.getSingleProductPageYouMayLikeProductReviewCount());
        Logger.info("Single product page you may also like displayed product unit price(s): " + await singleProductPage.getSingleProductPageYouMayLikeProductUnitPrice() + "\n");

    }

    //single product page review section data logger method (when reviews are present)
    async logSingleProductPageReviewData(page){
        const singleProductPage = new SingleProductPage(page);
        console.log("Single product page displayed product review data: " + "\n");

        Logger.info("Single product page displayed product review author name(s): " + await singleProductPage.getSingleProductPageReviewName());
        Logger.info("Single product page displayed product review submission date(s): " + await singleProductPage.getSingleProductPageReviewSubmissionDate());
        Logger.info("Single product page displayed product review title(s): " + await singleProductPage.getSingleProductPageReviewTitle());
        Logger.info("Single product page displayed product review text(s): " + await singleProductPage.getSingleProductPageReviewText());

    }

}
export {SingleProductPageDataLoggers};