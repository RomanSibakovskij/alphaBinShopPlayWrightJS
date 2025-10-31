"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class SingleProductPage extends BasePage{

    constructor(page) {
        super(page);

        //single product page web elements
        this._singleProductPageTitle = page.locator("//h1[@data-testid='product-name']");
        this._singleProductPageDescription = page.locator("//p[@data-testid='product-description']");
        this._singleProductPageReviewStarBlock = page.locator("//div[@data-testid='product-rating']");
        this._singleProductPageReviewCount = page.locator("//p[@data-testid='product-review-count']");
        this._singleProductPageUnitPrice = page.locator("//p[@data-testid='product-price']");
        this._singleProductPageMainProductImage = page.locator("//img[@data-testid='product-image']");
        this._singleProductPageQuantitySubtext = page.locator("//p[@data-testid='quantity-label']");
        this._singleProductPageProductQtyDecreaseButton = page.locator("//span[@class='anticon anticon-minus']");
        this._singleProductPageProductQtyCounter = page.locator("//div[@data-testid='quantity-value']");
        this._singleProductPageProductQtyIncreaseButton = page.locator("//span[@class='anticon anticon-plus']");
        this._singleProductPageProductAddToCartButton = page.locator("//button[@data-testid='add-to-cart-button']");
        this._singleProductPageProductBuyNowButton = page.locator("//button[@data-testid='buy-now-button']");
        //list elements
        this._singleProductPageProductImgElements = page.locator("//img[@data-testid='product-variant-image']");
        this._singleProductPageLowerProductImgElements = page.locator("//img[@data-testid='product-view-image']");
        //navbar elements
        this._singleProductPageNavbarButtonElements = page.locator("//div[@class='flex mb-4 border-b border-gray-200 ']/button");
        //description section
        this._singleProductPageProductDescription = page.locator("//div[@data-testid='description-content']");
        //additional information section
        this._singleProductPageAdditionalInformationData = page.locator("//div[@class='p-4 bg-white ']");
        //reviews section
        //this._singleProductPageWriteReviewButton = page.locator("//button[@data-testid='write-review-button']"); //not currently used
        //this._singleProductPageNoReviewsMessage = page.locator("//div[@class='p-4 ']");
        //list elements
        this._singleProductPageReviewNameElements = page.locator("//p[@data-testid='review-name']");
        this._singleProductPageReviewSubmissionDateElements = page.locator("//span[@data-testid='review-date']");
        this._singleProductPageReviewEditLinkElements = page.locator("//button[@data-testid='edit-review-button']");
        this._singleProductPageReviewDeleteLinkElements = page.locator("//button[@data-testid='delete-review-button']");
        this._singleProductPageReviewStarElements = page.locator("//div[@class='flex mb-2']/span");
        this._singleProductPageReviewTitleElements = page.locator("//h3[@data-testid='review-title']");
        this._singleProductPageReviewTextElements = page.locator("//p[@data-testid='review-content']");

        //you may also like section
        this._singleProductPageYouMayLikeSectionTitle = page.locator("//h1[@data-testid='you-may-also-like-title']");
        this._singleProductPageYouMayLikeScrollLeftBtn = page.locator("//span[@class='anticon anticon-left w-[39px] h-[39px] p-[12px] cursor-pointer']");
        this._singleProductPageYouMayLikeScrollRightBtn = page.locator("//span[@class='anticon anticon-right w-[39px] h-[39px] p-[12px] cursor-pointer']");
        //list elements
        this._singleProductPageYouMayLikeProductCardElements = page.locator("//div[@class='w-[320px] flex justify-center items-center group rounded-[5px] mt-[20px] mx-auto hover:cursor-pointer relative']/a");
        this._singleProductPageYouMayLikeProductImgElements = page.locator("//img[@data-testid='feature-card-image']");
        this._singleProductPageYouMayLikeProductNameElements = page.locator("//h1[@data-testid='feature-card-header']");
        this._singleProductPageYouMayLikeProductReviewStarElements = page.locator("//div[@data-testid='feature-card-rating']/span");
        this._singleProductPageYouMayLikeProductReviewCountElements = page.locator("//p[@data-testid='feature-card-review-count']");
        this._singleProductPageYouMayLikeProductUnitPriceElements = page.locator("//p[@data-testid='feature-card-price']");

    }

    //click set navbar button method
    async clickSetNavbarButton(index){await this._singleProductPageNavbarButtonElements.nth(index).click();}

    //click product quantity increase button method (to click a set button multiple times)
    async clickProductQtyIncreaseButton(count = 1) {
        const productQtyIncreaseBtn = this._singleProductPageProductQtyIncreaseButton;
        for (let i = 0; i < count; i++) {
            await productQtyIncreaseBtn.click();
        }
    }

    //click set "Edit review" link method
    async clickSetEditReviewLink(index){
        const setEditReviewLink = this._singleProductPageReviewEditLinkElements.nth(index);
        //wait for the link to be attached in the DOM
        await setEditReviewLink.waitFor({ state: 'attached' });
        //click via JavaScript executor (common click causes a glitch loop, hover doesn't work)
        await setEditReviewLink.evaluate(button => button.click());
    }

    //click set "Delete review" link method
    async clickSetDeleteReviewLink(index){
        const setDeleteReviewLink = this._singleProductPageReviewDeleteLinkElements.nth(index);
        //wait for the link to be attached in the DOM
        await setDeleteReviewLink.waitFor({ state: 'attached' });
        //click via JavaScript executor (common click causes a glitch loop, hover doesn't work)
        await setDeleteReviewLink.evaluate(button => button.click());
    }

    //click "Add to Cart" button method
    async clickAddToCartButton(){await this._singleProductPageProductAddToCartButton.click();}

    //single product page product data getters
    async getSingleProductPageTitle(){return await this._singleProductPageTitle.innerText();}
    async getSingleProductPageDescription(){return await this._singleProductPageDescription.innerText();}
    async getSingleProductPageReviewCount(){return await this._singleProductPageReviewCount.innerText();}
    async getSingleProductPageUnitPrice(){return await this._singleProductPageUnitPrice.innerText();}
    async getSingleProductPageProductQtyCounter(){return await this._singleProductPageProductQtyCounter.innerText();}
    //description section
    async getSingleProductPageExtDescription(){return await this._singleProductPageProductDescription.innerText();}
    //additional information section
    async getSingleProductPageAdditionalInfoData(){return await this._singleProductPageAdditionalInformationData.innerText();}
    //you may also like section (list elements)
    async getSingleProductPageYouMayLikeProductName(){
        const elements = await this._singleProductPageYouMayLikeProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageYouMayLikeProductReviewCount(){
        const elements = await this._singleProductPageYouMayLikeProductReviewCountElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageYouMayLikeProductUnitPrice(){
        const elements = await this._singleProductPageYouMayLikeProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //single product page text element getters
    async getSingleProductPageQuantitySubtext(){return await this._singleProductPageQuantitySubtext.innerText();}
    async getSingleProductPageProductAddToCartBtnText(){return await this._singleProductPageProductAddToCartButton.innerText();}
    async getSingleProductPageProductBuyNowBtnText(){return await this._singleProductPageProductBuyNowButton.innerText();}
    //navbar elements
    async getSingleProductPageNavbarBtnText(){
        const elements = await this._singleProductPageNavbarButtonElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //you may also like section
    async getSingleProductPageYouMayLikeSectionTitle(){return await this._singleProductPageYouMayLikeSectionTitle.innerText();}
    //reviews section
    async getSingleProductPageReviewName(){
        const elements = await this._singleProductPageReviewNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageReviewSubmissionDate(){
        const elements = await this._singleProductPageReviewSubmissionDateElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageReviewEditLinkText(){
        const elements = await this._singleProductPageReviewEditLinkElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageReviewDeleteLinkText(){
        const elements = await this._singleProductPageReviewDeleteLinkElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageReviewTitle(){
        const elements = await this._singleProductPageReviewTitleElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getSingleProductPageReviewText(){
        const elements = await this._singleProductPageReviewTextElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //single product page web element getters
    get singleProductPageTitle(){return this._singleProductPageTitle;}
    get singleProductPageDescription(){return this._singleProductPageDescription;}
    get singleProductPageReviewStarBlock(){return this._singleProductPageReviewStarBlock;}
    get singleProductPageReviewCount(){return this._singleProductPageReviewCount;}
    get singleProductPageUnitPrice(){return this._singleProductPageUnitPrice;}
    get singleProductPageMainProductImage(){return this._singleProductPageMainProductImage;}
    get singleProductPageQuantitySubtext(){return this._singleProductPageQuantitySubtext;}
    get singleProductPageProductQtyDecreaseButton(){return this._singleProductPageProductQtyDecreaseButton;}
    get singleProductPageProductQtyCounter(){return this._singleProductPageProductQtyCounter;}
    get singleProductPageProductQtyIncreaseButton(){return this._singleProductPageProductQtyIncreaseButton;}
    get singleProductPageProductAddToCartButton(){return this._singleProductPageProductAddToCartButton;}
    get singleProductPageProductBuyNowButton(){return this._singleProductPageProductBuyNowButton;}
    //list elements
    get singleProductPageProductImgElements(){return this._singleProductPageProductImgElements;}
    get singleProductPageLowerProductImgElements(){return this._singleProductPageLowerProductImgElements;}
    //navbar elements
    get singleProductPageNavbarButtonElements(){return this._singleProductPageNavbarButtonElements;}
    //description section
    get singleProductPageProductDescription(){return this._singleProductPageProductDescription;}
    //additional information data
    get singleProductPageAdditionalInformationData(){return this._singleProductPageAdditionalInformationData;}
    //you may also like section
    get singleProductPageYouMayLikeSectionTitle(){return this._singleProductPageYouMayLikeSectionTitle;}
    get singleProductPageYouMayLikeScrollLeftBtn(){return this._singleProductPageYouMayLikeScrollLeftBtn;}
    get singleProductPageYouMayLikeScrollRightBtn(){return this._singleProductPageYouMayLikeScrollRightBtn;}
    //list elements
    get singleProductPageYouMayLikeProductCardElement(){return this._singleProductPageYouMayLikeProductCardElements;}
    get singleProductPageYouMayLikeProductImgElement(){return this._singleProductPageYouMayLikeProductImgElements;}
    get singleProductPageYouMayLikeProductNameElement(){return this._singleProductPageYouMayLikeProductNameElements;}
    get singleProductPageYouMayLikeProductReviewStarElement(){return this._singleProductPageYouMayLikeProductReviewStarElements;}
    get singleProductPageYouMayLikeProductReviewCountElement(){return this._singleProductPageYouMayLikeProductReviewCountElements;}
    get singleProductPageYouMayLikeProductUnitPriceElement(){return this._singleProductPageYouMayLikeProductUnitPriceElements;}
    //reviews section
    get singleProductPageReviewNameElement(){return this._singleProductPageReviewNameElements;}
    get singleProductPageReviewSubmissionDateElement(){return this._singleProductPageReviewSubmissionDateElements;}
    get singleProductPageReviewEditLinkElement(){return this._singleProductPageReviewEditLinkElements;}
    get singleProductPageReviewDeleteLinkElement(){return this._singleProductPageReviewDeleteLinkElements;}
    get singleProductPageReviewStarElement(){return this._singleProductPageReviewStarElements;}
    get singleProductPageReviewTitleElement(){return this._singleProductPageReviewTitleElements;}
    get singleProductPageReviewTextElement(){return this._singleProductPageReviewTextElements;}

}
export {SingleProductPage};