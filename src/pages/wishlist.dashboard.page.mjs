"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class WishlistDashboardPage extends BasePage{

    constructor(page) {
        super(page);

        //wishlist dashboard page web elements
        this._wishlistDashPageReturnBackButton = page.locator("//button[@data-testid='wishlist-back-button']");
        this._wishlistDashPageTitle = page.locator("//h1[@data-testid='wishlist-title']");
        this._wishlistDashPageItemCounter = page.locator("//span[@data-testid='wishlist-item-count']");
        this._wishlistDashPageContinueShoppingBtn = page.locator("//button[@data-testid='wishlist-continue-shopping-button']");
        this._wishlistDashPageViewCartBtn = page.locator("//button[@data-testid='wishlist-view-cart-button']");
        //list elements
        this._wishlistDashPageProductImgElements = page.locator("//img[@data-testid='wishlist-product-image']");
        this._wishlistDashPageProductNameElements = page.locator("//h3[@data-testid='wishlist-product-name']");
        this._wishlistDashPageProductRemoveFromWishlistBtnElements = page.locator("//button[@data-testid='wishlist-remove-button']"); //appear only after hover over card
        //this._wishlistDashPageProductUpperAddToCartBtnElements = page.locator("//button[@title='Add to cart']"); //appear only after hover over card, not currently used
        this._wishlistDashPageProductReviewStarElements = page.locator("//div[@data-testid='wishlist-rating']/span");
        this._wishlistDashPageProductReviewCountElements = page.locator("//span[@data-testid='wishlist-review-count']");
        this._wishlistDashPageProductUnitPriceElements = page.locator("//span[@data-testid='wishlist-product-price']");
        this._wishlistDashPageProductAddToCartBtnElements = page.locator("//button[@class='px-3 py-1 rounded-md text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors']");
        //empty wishlist elements
        this._wishlistDashPageEmptyWishlistIcon = page.locator("//span[@class='anticon anticon-heart']");
        this._wishlistDashPageEmptyWishlistMessageOne = page.locator("//h2[@data-testid='wishlist-empty-title']");
        this._wishlistDashPageEmptyWishlistMessageTwo = page.locator("//p[@data-testid='wishlist-empty-description']");
        this._wishlistDashPageEmptyWishlistShopNowButton = page.locator("//button[@data-testid='wishlist-shop-now-button']");

    }

    //click set product remove from wishlist button method
    async clickSetRemoveProductFromWishlistBtn(index){
        const removeFromWishlistBtn = this._wishlistDashPageProductRemoveFromWishlistBtnElements.nth(index);
        //wait for the button to be attached in the DOM
        await removeFromWishlistBtn.waitFor({ state: 'attached' });
        //click via JavaScript executor (common click causes a glitch loop, hover doesn't work)
        await removeFromWishlistBtn.evaluate(button => button.click());
    }

    //click set "Add to Cart" button method
    async clickSetAddToCartButton(index){await this._wishlistDashPageProductAddToCartBtnElements.nth(index).click();}

    //click "View Cart" button method
    async clickViewCartButton(){await this._wishlistDashPageViewCartBtn.click();}

    //wishlist dashboard page product data getters
    //list elements
    async getWishlistDashPageProductName() {
        const elements = await this._wishlistDashPageProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getWishlistDashPageProductReviewCount() {
        const elements = await this._wishlistDashPageProductReviewCountElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getWishlistDashPageProductUnitPrice() {
        const elements = await this._wishlistDashPageProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //wishlist dashboard page text element getters
    async getWishlistDashPageTitle(){return await this._wishlistDashPageTitle.innerText();}
    //list elements
    async getWishlistDashPageAddToCartBtnText() {
        const elements = await this._wishlistDashPageProductAddToCartBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //singular elements
    async getWishlistDashPageContinueShoppingBtnText(){return await this._wishlistDashPageContinueShoppingBtn.innerText();}
    async getWishlistDashPageViewCartBtnText(){
        const rawText = await this._wishlistDashPageViewCartBtn.innerText();
        return rawText.replace(/\(\d+\)/, "").trim(); //removes count from button
    }
    //empty wishlist elements
    async getWishlistDashPageEmptyWishlistMessageOne (){return await this._wishlistDashPageEmptyWishlistMessageOne .innerText();}
    async getWishlistDashPageEmptyWishlistMessageTwo (){return await this._wishlistDashPageEmptyWishlistMessageTwo .innerText();}
    async getWishlistDashPageEmptyWishlistShopNowBtnText (){return await this._wishlistDashPageEmptyWishlistShopNowButton .innerText();}

    //wishlist dashboard page web element getters
    get wishlistDashPageReturnBackButton(){return this._wishlistDashPageReturnBackButton;}
    get wishlistDashPageTitle(){return this._wishlistDashPageTitle;}
    get wishlistDashPageItemCounter(){return this._wishlistDashPageItemCounter;}
    get wishlistDashPageContinueShoppingBtn(){return this._wishlistDashPageContinueShoppingBtn;}
    get wishlistDashPageViewCartBtn(){return this._wishlistDashPageViewCartBtn;}
    //list elements
    get wishlistDashPageProductImgElement(){return this._wishlistDashPageProductImgElements;}
    get wishlistDashPageProductNameElement(){return this._wishlistDashPageProductNameElements;}
    get wishlistDashPageProductReviewStarElement(){return this._wishlistDashPageProductReviewStarElements;}
    get wishlistDashPageProductReviewCountElement(){return this._wishlistDashPageProductReviewCountElements;}
    get wishlistDashPageProductUnitPriceElement(){return this._wishlistDashPageProductUnitPriceElements;}
    get wishlistDashPageProductAddToCartBtnElement(){return this._wishlistDashPageProductAddToCartBtnElements;}
    //empty wishlist elements
    get wishlistDashPageEmptyWishlistIcon(){return this._wishlistDashPageEmptyWishlistIcon;}
    get wishlistDashPageEmptyWishlistMessageOne(){return this._wishlistDashPageEmptyWishlistMessageOne;}
    get wishlistDashPageEmptyWishlistMessageTwo(){return this._wishlistDashPageEmptyWishlistMessageTwo;}
    get wishlistDashPageEmptyWishlistShopNowBtnText(){return this._wishlistDashPageEmptyWishlistShopNowButton;}

}
export {WishlistDashboardPage};