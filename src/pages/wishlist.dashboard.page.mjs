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
        this._wishlistDashPageProductUpperAddToCartBtnElements = page.locator("//button[@title='Add to cart']"); //appear only after hover over card
        this._wishlistDashPageProductReviewStarElements = page.locator("//div[@data-testid='wishlist-rating']/span");
        this._wishlistDashPageProductReviewCountElements = page.locator("//span[@data-testid='wishlist-review-count']");
        this._wishlistDashPageProductUnitPriceElements = page.locator("//span[@data-testid='wishlist-product-price']");
        this._wishlistDashPageProductAddToCartBtnElements = page.locator("//button[@class='px-3 py-1 rounded-md text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors']");

    }

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

}
export {WishlistDashboardPage};