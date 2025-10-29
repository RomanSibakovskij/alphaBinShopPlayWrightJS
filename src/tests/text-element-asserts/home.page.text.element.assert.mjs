"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";

class HomePageTextElementAssert {

    //home page text element assert test method
    async isHomePageTextElementAsExpected(page){
        const homePage = new HomePage(page);
        //welcome image section
        //assert home page welcome image section title is as expected
        const homePageWelcomeSectionTitle = await homePage.getHomePageWelcomeTitle();
        expect(homePageWelcomeSectionTitle).toBe("Demo E-commerce Testing Store");
        //assert home page welcome image section subtext is as expected
        const homePageWelcomeSectionSubtext = await homePage.getHomePageWelcomeSubtext();
        expect(homePageWelcomeSectionSubtext).toBe("Embark on an electronic journey. Dive into our shop now!");
        //assert home page welcome image shop now button text is as expected
        const homePageWelcomeSectionShopNowBtnText = await homePage.getHomePageWelcomeShopNowButtonText();
        expect(homePageWelcomeSectionShopNowBtnText).toBe("Shop Now");
        //categories section (list elements)
        //assert home page category names are as expected (as a list)
        const homePageCategoryNames = await homePage.getHomePageCategoryName();
        const expectedHomePageCategoryNames = ["Audio & Camera", "Appliances", "Gadgets", "PC & Laptops"];
        expect(homePageCategoryNames).toEqual(expectedHomePageCategoryNames);
        //assert home page category descriptions are as expected (as a list)
        const homePageCategoryDescriptions = await homePage.getHomePageCategoryDescription();
        const expectedHomePageCategoryDescriptions = ["Unlock reliability and unmatched video, Audio and photo quality.", "Explore advance tech for enhanced workspace productivity", "Get your hands on the newest groundbreaking innovation", "Potent PCs & laptops optimized for gaming & development purposes."];
        expect(homePageCategoryDescriptions).toEqual(expectedHomePageCategoryDescriptions);
        //assert home page category explore more link texts are as expected (as a list)
        const homePageCategoryExploreMoreLinkTexts = await homePage.getHomePageCategoryExploreMoreLinkText();
        expect(homePageCategoryExploreMoreLinkTexts.length).toBeGreaterThan(0);
        homePageCategoryExploreMoreLinkTexts.forEach(text => {
            expect(text).toBe("Explore More");
        });
        //featured products section
        //assert home page featured products section title is as expected
        const homePageFeaturedProductsSectionTitle = await homePage.getHomePageFeaturedProductsSectionTitle();
        //log the misspelling issue (as it's present visually)
        (homePageFeaturedProductsSectionTitle === ("Featured Products")) ? Logger.info("The spelling of the home page featured products section title is correct") : Logger.warn(`The spelling of the home page featured products section title isn't correct: ${homePageFeaturedProductsSectionTitle} `);
        expect(homePageFeaturedProductsSectionTitle).toBe("Feature Product"); //misspelling issue
        //laptop discount image section
        //assert home page laptop discount image subtext is as expected
        const homePageLaptopDiscountSubtext = await homePage.getHomePageLaptopDiscountSubtext();
        expect(homePageLaptopDiscountSubtext).toBe("Enjoy an Exclusive 20% Off on Laptops");
        //assert home page laptop discount shop now button text is as expected
        const homePageLaptopDiscountShopNowBtnText = await homePage.getHomePageLaptopDiscountShopNowButtonText();
        expect(homePageLaptopDiscountShopNowBtnText).toBe("Shop Now");
        //price drop image section
        //assert home page price drop image subtext is as expected
        const homePagePriceDropSubtext = await homePage.getHomePagePriceDropSubtext();
        expect(homePagePriceDropSubtext).toBe("Watch the Price Drop by a Whopping 20%!");
        //assert home page price drop image shop now button text is as expected
        const homePagePriceDropShopNowBtnText = await homePage.getHomePagePriceDropShopNowButtonText();
        expect(homePagePriceDropShopNowBtnText).toBe("Shop Now");
        //new arrivals products section
        //assert home page new arrivals products section title is as expected
        const homePageNewArrivalsProductsSectionTitle = await homePage.getHomePageNewArrivalsProductsSectionTitle();
        expect(homePageNewArrivalsProductsSectionTitle).toBe("New Arrivals");
        //category products section
        //assert home page category products section title is as expected
        const homePageCategoryProductsSectionTitle = await homePage.getHomePageCategoryProductsSectionTitle();
        //log the misspelling issue (as it's present visually)
        (homePageCategoryProductsSectionTitle === ("Category Products")) ? Logger.info("The spelling of the home page category products section title is correct") : Logger.warn(`The spelling of the home page category products section title isn't correct: ${homePageCategoryProductsSectionTitle} `);
        expect(homePageCategoryProductsSectionTitle).toBe("Category Product") //misspelling issue
        //assert home page category product names are as expected (as a list)
        const expectedHomePageCategoryProductNames = ["Smartphones", "Laptops", "Speakers", "Home Appliances", "Gaming Laptops"];
        const rawCategories = await homePage.getHomePageCategoryProductName();
        const homePageCategoryProductNames = expectedHomePageCategoryProductNames.filter(
            c => rawCategories.includes(c)
        );
        expect(homePageCategoryProductNames).toEqual(expectedHomePageCategoryProductNames);
        //subscribe image section
        //assert home page subscribe image section title is as expected
        const homePageSubscribeSectionTitle = await homePage.getHomePageSubscribeSectionTitle();
        expect(homePageSubscribeSectionTitle).toBe("Subscribe to receive the latest updates on our products!");
        //assert home page subscribe button text is as expected
        const homePageSubscribeButtonText = await homePage.getHomePageSubscribeButtonText();
        expect(homePageSubscribeButtonText).toBe("Subscribe");
    }

}
export {HomePageTextElementAssert};