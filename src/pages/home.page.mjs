"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class HomePage extends BasePage{

    constructor(page) {
        super(page);

        //home page web elements
        //welcome image section
        this._homePageWelcomeImage = page.locator("//section[1]/img[@class='absolute inset-0 w-full h-full object-cover']");
        this._homePageWelcomeTitle = page.locator("//section[1]//h1[@data-testid='hero-title']");
        this._homePageWelcomeSubtext = page.locator("//section[1]//p[@class='mt-5 text-[12px] md:text-[18px] lg:text-[18px] sm:mx-[50px] md:mx-[200px] font-dmsans leading-[21.78px] text-white']");
        this._homePageWelcomeShopNowButton = page.locator("//section[1]//button[@data-testid='hero-shop-now']");
        //categories section (list elements)
        this._homePageCategoriesImgElements = page.locator("//section[2]//img[@class='object-cover h-[342px] xl:w-[695px] rounded-[5px] transition ease-in-out delay-300 hover:-translate-x-1 hover:scale-110 duration-700 w-full']");
        this._homePageCategoriesNameElements = page.locator("//section[2]//h1[@class='font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[38.73px]']");
        this._homePageCategoriesDescriptionElements = page.locator("//section[2]//p");
        this._homePageCategoriesExploreMoreLinkElements = page.locator("//section[2]//a");
        //featured products section
        this._homePageFeaturedProductsSectionTitle = page.locator("//h1[@data-testId='featured-products-title']");
        this._homePageFeaturedProductsScrollLeftBtn = page.locator("//section[3]//span[@class='anticon anticon-left w-[39px] h-[39px] p-[12px] cursor-pointer']");
        this._homePageFeaturedProductsScrollRightBtn = page.locator("//section[3]//span[@class='anticon anticon-right w-[39px] h-[39px] p-[12px] cursor-pointer']");
        //list elements
        this._homePageFeaturedProductImgElements = page.locator("//section[3]//img[@data-testid='feature-card-image']");
        this._homePageFeaturedProductNameElements = page.locator("//section[3]//h1[@data-testid='feature-card-header']");
        this._homePageFeaturedProductAddToWishlistBtnElements = page.locator("//section[3]//button[@data-testid='wishlist-button']"); //appears after hover over product card
        this._homePageFeaturedProductAddToCartBtnElements = page.locator("//section[3]//button[@data-testid='cart-button']/span[@role='img']"); //appears after hover over product card
        this._homePageFeaturedProductReviewStarElements = page.locator("//section[3]//div[@data-testid='feature-card-rating']/span");
        this._homePageFeaturedProductReviewCountElements = page.locator("//section[3]//p[@data-testid='feature-card-review-count']");
        this._homePageFeaturedProductPriceElements = page.locator("//section[3]//p[@data-testid='feature-card-price']");
        //laptop discount images section
        this._homePageLaptopDiscountImage = page.locator("//section[4]//div[@class='relative md:mr-4']//img[@class='object-cover h-[210px] rounded-[5px] w-full']");
        this._homePageLaptopDiscountSubtext = page.locator("//section[4]//div[@class='relative md:mr-4']//h1[@data-testid='offer-title-1']");
        this._homePageLaptopDiscountShopNowButton = page.locator("//section[4]//div[@class='relative md:mr-4']//button[@data-testid='offer-shop-now-1']");
        //price drop images section
        this._homePagePriceDropImage = page.locator("//section[4]//div[@class='relative md:ml-4']//img[@class='object-cover h-[210px] rounded-[5px] w-full']");
        this._homePagePriceDropSubtext = page.locator("//section[4]//div[@class='relative md:ml-4']//h1[@data-testid='offer-title-2']");
        this._homePagePriceDropShopNowButton = page.locator("//section[4]//div[@class='relative md:ml-4']//button[@data-testid='offer-shop-now-2']");
        //new arrivals products section
        this._homePageNewArrivalsProductsSectionTitle = page.locator("//section[5]//h1[@data-testid='new-arrivals-title']");
        this._homePageNewArrivalsProductsScrollLeftBtn = page.locator("//section[5]//span[@class='anticon anticon-left w-[39px] h-[39px] p-[12px] cursor-pointer']");
        this._homePageNewArrivalsProductsScrollRightBtn = page.locator("//section[5]//span[@class='anticon anticon-right w-[39px] h-[39px] p-[12px] cursor-pointer']");
        //list elements
        this._homePageNewArrivalsProductImgElements = page.locator("//section[5]//img[@data-testid='feature-card-image']");
        this._homePageNewArrivalsProductNameElements = page.locator("//section[5]//h1[@data-testid='feature-card-header']");
        this._homePageNewArrivalsProductAddToWishlistBtnElements = page.locator("//section[5]//button[@data-testid='wishlist-button']"); //appears after hover over product card
        this._homePageNewArrivalsProductAddToCartBtnElements = page.locator("//section[5]//button[@data-testid='cart-button']"); //appears after hover over product card
        this._homePageNewArrivalsProductReviewStarElements = page.locator("//section[5]//div[@data-testid='feature-card-rating']/span");
        this._homePageNewArrivalsProductReviewCountElements = page.locator("//section[5]//p[@data-testid='feature-card-review-count']");
        this._homePageNewArrivalsProductPriceElements = page.locator("//section[5]//p[@data-testid='feature-card-price']");
        //category products section
        this._homePageCategoryProductsSectionTitle = page.locator("//section[6]//h1[@data-testid='category-products-title']");
        this._homePageCategoryProductsScrollLeftBtn = page.locator("//section[6]//span[@class='anticon anticon-left w-[39px] h-[39px] p-[12px] cursor-pointer']");
        this._homePageCategoryProductsScrollRightBtn = page.locator("//section[6]//span[@class='anticon anticon-right w-[39px] h-[39px] p-[12px] cursor-pointer']");
        //list elements
        this._homePageCategoryProductImgsElements = page.locator("//section[6]//div[@class='slick-track']//img[@data-testid='category-card-image']");
        this._homePageCategoryProductNamesElements = page.locator("//section[6]//div[@class='slick-track']//div[@data-testid='category-card-name']");
        //subscribe section
        this._homePageSubscribeSectionImage = page.locator("//section[7]//img[@class='object-cover h-[260px] w-full']");
        this._homePageSubscribeSectionTitle = page.locator("//section[7]//h1[@data-testid='subscribe-title']");
        this._homePageSubscribeEmailInputField = page.locator("//section[7]//input[@data-testid='email-input']");
        this._homePageSubscribeButton = page.locator("//section[7]//button[@data-testid='subscribe-button']");

    }

    //click featured product scroll left button method
    async clickFeaturedProductScrollLeftBtn(){await this._homePageFeaturedProductsScrollLeftBtn.click();}

    //click new arrivals product scroll right button method
    async clickNewArrivalsProductScrollRightBtn(){await this._homePageNewArrivalsProductsScrollRightBtn.click();}

    //click set featured product "Add to Cart" button method
    async clickAddSetFeaturedProductToCartBtn(index){
        const addToCartBtn = this._homePageFeaturedProductAddToCartBtnElements.nth(index);
        //wait for the button to be attached in the DOM
        await addToCartBtn.waitFor({ state: 'attached' });
        //click via JavaScript executor (common click causes a glitch loop, hover doesn't work)
        await addToCartBtn.evaluate(button => button.click());
    }

    //click set featured product "Add to Wishlist" button method
    async clickAddSetFeaturedProductToWishlistBtn(index){
        const addToWishlistBtn = this._homePageFeaturedProductAddToWishlistBtnElements.nth(index);
        //wait for the button to be attached in the DOM
        await addToWishlistBtn.waitFor({ state: 'attached' });
        //click via JavaScript executor (common click causes a glitch loop, hover doesn't work)
        await addToWishlistBtn.evaluate(button => button.click());
    }

    //click set new arrivals product "Add to Cart" button method
    async clickAddSetNewArrivalsProductToCartBtn(index){
        const addToCartBtn = this._homePageNewArrivalsProductAddToCartBtnElements.nth(index);
        //wait for the button to be attached in the DOM
        await addToCartBtn.waitFor({ state: 'attached' });
        //click via JavaScript executor (common click causes a glitch loop, hover doesn't work)
        await addToCartBtn.evaluate(button => button.click());
    }

    //home page product data getters
    //featured products section
    //list elements
    async getHomePageFeaturedProductName() {
        const elements = await this._homePageFeaturedProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getHomePageFeaturedProductReviewCount(){
        const elements = await this._homePageFeaturedProductReviewCountElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getHomePageFeaturedProductPrice(){
        const elements = await this._homePageFeaturedProductPriceElements.all();
        return Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //new arrivals products section
    async getHomePageNewArrivalsProductName(){
        const elements = await this._homePageNewArrivalsProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getHomePageNewArrivalsProductReviewCount(){
        const elements = await this._homePageNewArrivalsProductReviewCountElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getHomePageNewArrivalsProductPrice(){
        const elements = await this._homePageNewArrivalsProductPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //home page text element getters
    //welcome image section
    async getHomePageWelcomeTitle(){return this._homePageWelcomeTitle.innerText();}
    async getHomePageWelcomeSubtext(){return this._homePageWelcomeSubtext.innerText();}
    async getHomePageWelcomeShopNowButtonText(){return this._homePageWelcomeShopNowButton.innerText();}
    //categories section (list elements)
    async getHomePageCategoryName(){
        const elements = await this._homePageCategoriesNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getHomePageCategoryDescription(){
        const elements = await this._homePageCategoriesDescriptionElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getHomePageCategoryExploreMoreLinkText(){
        const elements = await this._homePageCategoriesExploreMoreLinkElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //featured products section
    async getHomePageFeaturedProductsSectionTitle(){return await this._homePageFeaturedProductsSectionTitle.innerText();}
    //laptop discount image section
    async getHomePageLaptopDiscountSubtext(){return this._homePageLaptopDiscountSubtext.innerText();}
    async getHomePageLaptopDiscountShopNowButtonText(){return this._homePageLaptopDiscountShopNowButton.innerText();}
    //price drop image section
    async getHomePagePriceDropSubtext(){return await this._homePagePriceDropSubtext.innerText();}
    async getHomePagePriceDropShopNowButtonText(){return await this._homePagePriceDropShopNowButton.innerText();}
    //new arrivals products section
    async getHomePageNewArrivalsProductsSectionTitle(){return await this._homePageNewArrivalsProductsSectionTitle.innerText();}
    //list elements
    //category products section
    async getHomePageCategoryProductsSectionTitle(){return await this._homePageCategoryProductsSectionTitle.innerText();}
    //list elements
    async getHomePageCategoryProductName(){
        const elements = await this._homePageCategoryProductNamesElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //subscribe image section
    async getHomePageSubscribeSectionTitle(){return await this._homePageSubscribeSectionTitle.innerText();}
    async getHomePageSubscribeButtonText(){return await this._homePageSubscribeButton.innerText();}

    //home page web element getters
    //welcome image section
    get homePageWelcomeImage(){return this._homePageWelcomeImage;}
    get homePageWelcomeTitle(){return this._homePageWelcomeTitle;}
    get homePageWelcomeSubtext(){return this._homePageWelcomeSubtext;}
    get homePageWelcomeShopNowButton(){return this._homePageWelcomeShopNowButton;}
    //categories section (list elements)
    get homePageCategoriesImgElement(){return this._homePageCategoriesImgElements;}
    get homePageCategoriesNameElement(){return this._homePageCategoriesNameElements;}
    get homePageCategoriesDescriptionElement(){return this._homePageCategoriesDescriptionElements;}
    get homePageCategoriesExploreMoreLinkElement(){return this._homePageCategoriesExploreMoreLinkElements;}
    //featured products section
    get homePageFeaturedProductsSectionTitle(){return this._homePageFeaturedProductsSectionTitle;}
    get homePageFeaturedProductsScrollLeftBtn(){return this._homePageFeaturedProductsScrollLeftBtn;}
    get homePageFeaturedProductsScrollRightBtn(){return this._homePageFeaturedProductsScrollRightBtn;}
    //list elements
    get homePageFeaturedProductImgElement(){return this._homePageFeaturedProductImgElements;}
    get homePageFeaturedProductNameElement(){return this._homePageFeaturedProductNameElements;}
    get homePageFeaturedProductReviewStarElement(){return this._homePageFeaturedProductReviewStarElements;}
    get homePageFeaturedProductReviewCountElement(){return this._homePageFeaturedProductReviewCountElements;}
    get homePageFeaturedProductPriceElement(){return this._homePageFeaturedProductPriceElements;}
    //laptop discount images section
    get homePageLaptopDiscountImage(){return this._homePageLaptopDiscountImage;}
    get homePageLaptopDiscountSubtext(){return this._homePageLaptopDiscountSubtext;}
    get homePageLaptopDiscountShopNowButton(){return this._homePageLaptopDiscountShopNowButton;}
    //price drop images section
    get homePagePriceDropImage(){return this._homePagePriceDropImage;}
    get homePagePriceDropSubtext(){return this._homePagePriceDropSubtext;}
    get homePagePriceDropShopNowButton(){return this._homePagePriceDropShopNowButton;}
    //new arrivals products section
    get homePageNewArrivalsProductsSectionTitle(){return this._homePageNewArrivalsProductsSectionTitle;}
    get homePageNewArrivalsProductsScrollLeftBtn(){return this._homePageNewArrivalsProductsScrollLeftBtn;}
    get homePageNewArrivalsProductsScrollRightBtn(){return this._homePageNewArrivalsProductsScrollRightBtn;}
    //list elements
    get homePageNewArrivalsProductImgElement(){return this._homePageNewArrivalsProductImgElements;}
    get homePageNewArrivalsProductNameElement(){return this._homePageNewArrivalsProductNameElements;}
    get homePageNewArrivalsProductReviewStarElement(){return this._homePageNewArrivalsProductReviewStarElements;}
    get homePageNewArrivalsProductReviewCountElement(){return this._homePageNewArrivalsProductReviewCountElements;}
    get homePageNewArrivalsProductPriceElement(){return this._homePageNewArrivalsProductPriceElements;}
    //category products section
    get homePageCategoryProductsSectionTitle(){return this._homePageCategoryProductsSectionTitle;}
    get homePageCategoryProductsScrollLeftBtn(){return this._homePageCategoryProductsScrollLeftBtn;}
    get homePageCategoryProductsScrollRightBtn(){return this._homePageCategoryProductsScrollRightBtn;}
    //list elements
    get homePageCategoryProductImgElement(){return this._homePageCategoryProductImgsElements;}
    get homePageCategoryProductNameElement(){return this._homePageCategoryProductNamesElements;}
    //subscribe section
    get homePageSubscribeSectionImage(){return this._homePageSubscribeSectionImage;}
    get homePageSubscribeSectionTitle(){return this._homePageSubscribeSectionTitle;}
    get homePageSubscribeEmailInputField(){return this._homePageSubscribeEmailInputField;}
    get homePageSubscribeButton(){return this._homePageSubscribeButton;}

}
export {HomePage};