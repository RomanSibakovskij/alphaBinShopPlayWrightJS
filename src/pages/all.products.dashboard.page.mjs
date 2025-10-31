"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class AllProductsDashboardPage extends BasePage{

    constructor(page) {
        super(page);

        //all products dashboard page web elements
        this._allProductsDashboardPageTitle = page.locator("//h1[@data-testid='all-products-title']");
        this._allProductsDashboardPageSearchBarInputField = page.locator("//input[@data-testid='all-products-search-input']");
        this._allProductsDashboardPageGridViewButton = page.locator("//button[@data-testid='all-products-view-switcher-grid']");
        this._allProductsDashboardPageListViewButton = page.locator("//button[@data-testid='all-products-view-switcher-list']");
        this._allProductsDashboardPageFiltersButton = page.locator("//button[@data-testid='all-products-filter-toggle']");
        this._allProductsDashboardPageProductCounter = page.locator("//p[@data-testid='all-products-results-count']");
        //filters dropdown section
        this._allProductsDashboardPageFiltersCategorySubtext = page.locator("//label[@data-testid='all-products-category-label']");
        this._allProductsDashboardPageFiltersCategoryDropdownMenu = page.locator("//select[@data-testid='all-products-category-select']");
        //list elements
        //this._allProductsDashboardPageFiltersCategoryOptionElements = page.locator("//select[@data-testid='all-products-category-select']/option"); // not currently used
        //singular elements
        this._allProductsDashboardPageFiltersCategoryPriceRange = page.locator("//label[@data-testid='all-products-price-range-label']");
        this._allProductsDashboardPageFiltersCategoryPriceRangeFromSliderBar = page.locator("//input[@data-testid='all-products-price-range-input-0']");
        this._allProductsDashboardPageFiltersCategoryPriceRangeToSliderBar = page.locator("//input[@data-testid='all-products-price-range-input-1']");
        this._allProductsDashboardPageFiltersCategoryResetFiltersBtn = page.locator("//button[@data-testid='all-products-reset-filters-button']");
        //product list
        this._allProductsDashboardPageProductCardElements = page.locator("//a[@class='relative block group ']");
        this._allProductsDashboardPageProductListCardElements = page.locator("//a[@class='relative block group flex items-stretch border border-gray-200 rounded-lg overflow-hidden']"); //product list view only locators
        this._allProductsDashboardPageProductImgElements = page.locator("//img[@class='h-[220px] w-full object-contain mb-4']");
        this._allProductsDashboardPageProductListImgElements = page.locator("//img[@class='h-full w-full object-contain']"); //product list view only locators
        this._allProductsDashboardPageProductAddToWishlistBtnElements = page.locator("//button[@data-testid='all-products-wishlist-button']"); //appear only after hovering over card
        this._allProductsDashboardPageProductAddToCartBtnElements = page.locator("//button[@data-testid='all-products-cart-button']"); //appear only after hovering over card
        this._allProductsDashboardPageProductListAddToWishlistBtnElements = page.locator("//div[@class='p-4 flex flex-col justify-center gap-3 border-l']/button[2]"); //product list view only locators
        this._allProductsDashboardPageProductListAddToCartBtnElements = page.locator("//div[@class='p-4 flex flex-col justify-center gap-3 border-l']/button[2]"); //product list view only locators
        this._allProductsDashboardPageProductNameElements = page.locator("//h2[@data-testid='all-products-header']");
        this._allProductsDashboardPageProductReviewStarElements = page.locator("//span[@class='anticon anticon-star']");
        this._allProductsDashboardPageProductReviewCountElements = page.locator("//span[@class='text-sm text-gray-500 ml-2']");
        this._allProductsDashboardPageProductUnitPriceElements = page.locator("//p[@data-testid='all-products-price']");

    }

    //click "List view" button method
    async clickListViewButton(){await this._allProductsDashboardPageListViewButton.click();}

    //click "Filters" button method
    async clickFiltersButton(){await this._allProductsDashboardPageFiltersButton.click();}

    //slider manipulator method
    async dragSlider(sliderLocator, targetPercentage) {
        const box = await sliderLocator.boundingBox();
        if (!box) throw new Error("Slider not visible");

        //calculate target position along the slider track
        const targetX = box.x + box.width * targetPercentage;
        const targetY = box.y + box.height / 2;

        //start dragging from current knob position (approx center of slider)
        const startX = box.x + box.width / 2;
        await this.page.mouse.move(startX, targetY);
        await this.page.mouse.down();
        await this.page.mouse.move(targetX, targetY, { steps: 10 });
        await this.page.mouse.up();
    }

    //set price from method (by set percentage)
    async setPriceRangeFrom(percentage) {
        await this.dragSlider(this._allProductsDashboardPageFiltersCategoryPriceRangeFromSliderBar, percentage);
    }

    //set price to method (by set percentage)
    async setPriceRangeTo(percentage) {
        await this.dragSlider(this._allProductsDashboardPageFiltersCategoryPriceRangeToSliderBar, percentage);
    }

    //click set product card method (while view is switched to list)
    async clickSetProductCardListMethod(index){await this._allProductsDashboardPageProductListCardElements.nth(index).click()}

    //all products dashboard product data getters
    async getAllProductsDashboardPageProductCount(){return await this._allProductsDashboardPageProductCounter.innerText();}
    //list elements
    async getAllProductsDashPageProductName() {
        const elements = await this._allProductsDashboardPageProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getAllProductsDashPageProductReviewCount() {
        const elements = await this._allProductsDashboardPageProductReviewCountElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getAllProductsDashPageProductUnitPrice() {
        const elements = await this._allProductsDashboardPageProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //all products dashboard text element getters
    async getAllProductsDashboardPageTitle(){return await this._allProductsDashboardPageTitle.innerText();}
    async getAllProductsDashboardPageFiltersBtnText(){
        const text = await this._allProductsDashboardPageFiltersButton.innerText();
        return text.replace(/\s+/g, ' ').trim(); //trims out newlines
    }
    //filters dropdown section
    async getAllProductsDashboardPageFiltersCategorySubtext(){return await this._allProductsDashboardPageFiltersCategorySubtext.innerText();}
    async getAllProductsDashboardPageFiltersCategoryPriceRange(){return await this._allProductsDashboardPageFiltersCategoryPriceRange.innerText();}
    async getAllProductsDashboardPageFiltersCategoryResetFiltersBtnText(){return await this._allProductsDashboardPageFiltersCategoryResetFiltersBtn.innerText();}

    //all products dashboard page web element getters
    get allProductsDashboardPageTitle(){return this._allProductsDashboardPageTitle;}
    get allProductsDashboardPageSearchBarInputField(){return this._allProductsDashboardPageSearchBarInputField;}
    get allProductsDashboardPageGridViewButton(){return this._allProductsDashboardPageGridViewButton;}
    get allProductsDashboardPageListViewButton(){return this._allProductsDashboardPageListViewButton;}
    get allProductsDashboardPageFiltersButton(){return this._allProductsDashboardPageFiltersButton;}
    get allProductsDashboardPageProductCounter(){return this._allProductsDashboardPageProductCounter;}
    //filters dropdown section
    get allProductsDashboardPageFiltersCategorySubtext(){return this._allProductsDashboardPageFiltersCategorySubtext;}
    get allProductsDashboardPageFiltersCategoryDropdownMenu(){return this._allProductsDashboardPageFiltersCategoryDropdownMenu;}
    get allProductsDashboardPageFiltersCategoryPriceRange(){return this._allProductsDashboardPageFiltersCategoryPriceRange;}
    get allProductsDashboardPageFiltersCategoryPriceRangeFromSliderBar(){return this._allProductsDashboardPageFiltersCategoryPriceRangeFromSliderBar;}
    get allProductsDashboardPageFiltersCategoryPriceRangeToSliderBar(){return this._allProductsDashboardPageFiltersCategoryPriceRangeToSliderBar;}
    get allProductsDashboardPageFiltersCategoryResetFiltersBtn(){return this._allProductsDashboardPageFiltersCategoryResetFiltersBtn;}
    //product list (grid view)
    get allProductsDashboardPageProductCardElement(){return this._allProductsDashboardPageProductCardElements;}
    get allProductsDashboardPageProductImgElement(){return this._allProductsDashboardPageProductImgElements;}
    //product table
    get allProductsDashboardPageProductNameElement(){return this._allProductsDashboardPageProductNameElements;}
    get allProductsDashboardPageProductReviewStarElement(){return this._allProductsDashboardPageProductReviewStarElements;}
    get allProductsDashboardPageProductReviewCountElement(){return this._allProductsDashboardPageProductReviewCountElements;}
    get allProductsDashboardPageProductUnitPriceElement(){return this._allProductsDashboardPageProductUnitPriceElements;}
    //product list (list view)
    get allProductsDashboardPageProductListCardElement(){return this._allProductsDashboardPageProductListCardElements;}
    get allProductsDashboardPageProductListImgElement(){return this._allProductsDashboardPageProductListImgElements;}
    get allProductsDashboardPageProductListAddToWishlistBtnElement(){return this._allProductsDashboardPageProductListAddToWishlistBtnElements;}
    get allProductsDashboardPageProductListAddToCartBtnElement(){return this._allProductsDashboardPageProductListAddToCartBtnElements;}

}
export {AllProductsDashboardPage};