"use strict"

import {GeneralPage} from "../../pages/general.page.mjs"
import {expect} from "@playwright/test";

class GeneralPageWebElementAssert{

    //general page web element assert test method (elements that all pages share)
    async isGeneralPageWebElementVisible(page){
        const generalPage = new GeneralPage(page);
        //header
        //assert header home page logo (with embedded link) is visible
        await expect(generalPage.headerHomePageLogo).toBeVisible();
        //list elements
        //assert header navbar links are visible (as a list)
        const headerNavbarLinks = generalPage.headerNavbarLinkElement;
        const headerNavbarLinkCount = await headerNavbarLinks.count();
        for (let i = 0; i < headerNavbarLinkCount; i++) {
            await expect(headerNavbarLinks.nth(i)).toBeVisible();
        }
        //singular elements
        //assert header wishlist icon button is visible
        await expect(generalPage.headerWishlistIconButton).toBeVisible();
        //assert header shopping cart icon button is visible
        await expect(generalPage.headerShoppingCartIconButton).toBeVisible();
        //assert header account icon button is visible
        await expect(generalPage.headerAccountIconButton).toBeVisible();
        //footer
        //assert footer home page logo (with embedded link) is visible;
        await expect(generalPage.footerHomePageLogoLink).toBeVisible();
        //useful links section
        //assert footer useful links section title is visible
        await expect(generalPage.footerUsefulLinksSectionTitleElement).toBeVisible();
        //list elements
        //assert footer useful links are visible (as a list)
        const footerUsefulLinks = await generalPage.footerUsefulLinkElement;
        const footerUsefulLinkCount = await footerUsefulLinks.count();
        for (let i = 0; i < footerUsefulLinkCount; i++) {
            await expect(footerUsefulLinks.nth(i)).toBeVisible();
        }
        //customer policy section
        //assert footer customer policy section title is visible
        await expect(generalPage.footerCustomerPolicySectionTitleElement).toBeVisible();
        //list elements
        //assert footer useful links are visible (as a list)
        const footerCustomerPolicyLinks = await generalPage.footerCustomerPolicyLinkElement;
        const footerCustomerPolicyLinkCount = await footerCustomerPolicyLinks.count();
        for (let i = 0; i < footerCustomerPolicyLinkCount; i++) {
            await expect(footerCustomerPolicyLinks.nth(i)).toBeVisible();
        }
        //follow us section
        //assert footer follow us section title is visible
        await expect(generalPage.footerFollowUsSectionTitleElement).toBeVisible();
        //list elements
        //assert footer social icon buttons are visible (as a list)
        const footerSocialIconButtons = await generalPage.footerSocialIconButtonElement;
        const footerSocialIconButtonsCount = await footerSocialIconButtons.count();
        for (let i = 0; i < footerSocialIconButtonsCount; i++) {
            await expect(footerSocialIconButtons.nth(i)).toBeVisible();
        }
        //lower footer
        //list elements
        //assert lower footer links are visible (as a list)
        const lowerFooterLinks = await generalPage.lowerFooterLinkElement;
        const lowerFooterLinkCount = await lowerFooterLinks.count();
        for (let i = 0; i < lowerFooterLinkCount; i++) {
            await expect(lowerFooterLinks.nth(i)).toBeVisible();
        }
        //assert lower footer copyright text is visible
        await expect(generalPage.lowerFooterCopyrightTextElement).toBeVisible();
    }

}
export {GeneralPageWebElementAssert};