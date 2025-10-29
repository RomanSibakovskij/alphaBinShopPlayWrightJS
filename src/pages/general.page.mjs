"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class GeneralPage extends BasePage{

    constructor(page) {
        super(page);

        //general page web elements
        //header
        this._headerHomePageLogoLink = page.locator("//div[@class='w-[128px] md:w-[150px] h-[62px] flex items-center cursor-pointer']/img");
        //navbar list elements
        this._headerNavbarLinkElements = page.locator("//ul[@class='flex justify-center items-center gap-8 font-medium text-[16px] leading-5 font-dmsans']/li");
        //singular elements
        this._headerWishlistIconButton = page.locator("//div[@class='flex items-center gap-2']/div[1]");
        this._headerShoppingCartIconButton = page.locator("//div[@class='flex items-center gap-2']/div[2]");
        this._headerAccountIconButton = page.locator("[data-testid='header-user-icon']"); //dubs as account icon button too after account creation
        //footer
        this._footerHomePageLogoLink = page.locator("//div[@class='py-10 px-6 md:px-12 bg-black text-white']//img");
        //useful links section
        this._footerUsefulLinksSectionTitle = page.locator("//div[@class='grid md:grid-cols-4 grid-cols-1 gap-8']/div[2]/h3");
        //list elements
        this._footerUsefulLinkElements = page.locator("//div[@class='grid md:grid-cols-4 grid-cols-1 gap-8']/div[2]/ul/li");
        //customer policy section
        this._footerCustomerPolicySectionTitle = page.locator("//div[@class='grid md:grid-cols-4 grid-cols-1 gap-8']/div[3]/h3");
        //list elements
        this._footerCustomerPolicyLinkElements = page.locator("//div[@class='grid md:grid-cols-4 grid-cols-1 gap-8']/div[3]/ul/li");
        //follow us section
        this._footerFollowUsSectionTitle = page.locator("//div[@class='grid md:grid-cols-4 grid-cols-1 gap-8']/div[4]/h3");
        //list elements
        this._footerSocialIconButtonElements = page.locator("//div[@class='grid md:grid-cols-4 grid-cols-1 gap-8']/div[4]//div[@class='cursor-pointer']");
        //lower footer
        //list elements
        this._lowerFooterLinkElements = page.locator("//div[@class='flex gap-4 mb-4 md:mb-0 text-sm text-gray-400']/span[@class='cursor-pointer hover:text-white']");
        //singular element
        this._lowerFooterCopyrightText = page.locator("//div[@class='text-sm text-gray-400']");

    }

    //click set header navbar link method
    async clickSetHeaderNavbarLink(index){await this._headerNavbarLinkElements.nth(index).click();}

    //click header "Account" icon button method
    async clickHeaderAccountIconBtn(){await this._headerAccountIconButton.click();}
    //click header "Shopping Cart" icon button method
    async clickHeaderShoppingCartIconBtn(){await this._headerShoppingCartIconButton.click();}
    //click header "Wishlist" icon button method
    async clickHeaderWishlistIconBtn(){await this._headerWishlistIconButton.click();}

    //general page text element getters
    //header (list elements)
    get headerNavbarLinkText(){return this._headerNavbarLinkElements.allInnerTexts()}
    //footer
    //useful links section
    get footerUsefulLinksSectionTitle(){return this._footerUsefulLinksSectionTitle.innerText()}
    //list elements
    get footerUsefulLinkText(){return this._footerUsefulLinkElements.allInnerTexts();}
    //customer policy section
    get footerCustomerPolicyLinksSectionTitle(){return this._footerCustomerPolicySectionTitle.innerText()}
    //list elements
    get footerCustomerPolicyLinkText(){return this._footerCustomerPolicyLinkElements.allInnerTexts();}
    //follow us section
    get footerFollowUsSectionTitle(){return this._footerFollowUsSectionTitle.innerText()}
    //lower footer
    //list elements
    get lowerFooterLinkText(){return this._lowerFooterLinkElements.allInnerTexts();}
    //singular element
    get lowerFooterCopyrightText(){return this._lowerFooterCopyrightText.innerText()}

    //general page web element getters
    get headerHomePageLogo(){return this._headerHomePageLogoLink;}
    //navbar list elements
    get headerNavbarLinkElement(){return this._headerNavbarLinkElements;}
    //singular elements
    get headerWishlistIconButton(){return this._headerWishlistIconButton;}
    get headerShoppingCartIconButton(){return this._headerShoppingCartIconButton;}
    get headerAccountIconButton(){return this._headerAccountIconButton;}
    //footer
    get footerHomePageLogoLink(){return this._footerHomePageLogoLink;}
    //useful links section
    get footerUsefulLinksSectionTitleElement(){return this._footerUsefulLinksSectionTitle;}
    //list elements
    get footerUsefulLinkElement(){return this._footerUsefulLinkElements;}
    //customer policy section
    get footerCustomerPolicySectionTitleElement(){return this._footerCustomerPolicySectionTitle;}
    //list elements
    get footerCustomerPolicyLinkElement(){return this._footerCustomerPolicyLinkElements;}
    //follow us section
    get footerFollowUsSectionTitleElement(){return this._footerFollowUsSectionTitle;}
    //list elements
    get footerSocialIconButtonElement(){return this._footerSocialIconButtonElements;}
    //lower footer
    //list elements
    get lowerFooterLinkElement(){return this._lowerFooterLinkElements;}
    //singular element
    get lowerFooterCopyrightTextElement(){return this._lowerFooterCopyrightText;}

}
export {GeneralPage};