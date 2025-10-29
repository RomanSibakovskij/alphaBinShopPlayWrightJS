"use strict"

import {GeneralPage} from "../../pages/general.page.mjs"
import {expect} from "@playwright/test";
import {Logger} from "../../pages/utilities/logger.mjs";

class GeneralPageTextElementAssert{

    //general page text element assert test method (elements that all pages have)
    async isGeneralPageTextElementAsExpected(page){
        const generalPage = new GeneralPage(page);
        //header
        //list elements
        //assert header navbar link texts are as expected (as a list)
        const headerNavbarLinks = await generalPage.headerNavbarLinkText;
        const expectedNavbarLinkTexts = ["Home", "About Us", "Contact Us", "All Products"];
        expect(headerNavbarLinks).toEqual(expectedNavbarLinkTexts);
        //footer
        //useful links section
        //assert footer useful links section title is as expected
        const footerUsefulLinksSectionTitle = await generalPage.footerUsefulLinksSectionTitle;
        expect(footerUsefulLinksSectionTitle).toBe("USEFUL LINKS");
        //list elements
        //assert footer useful link texts are as expected (as a list)
        const footerUsefulLinkTexts = await generalPage.footerUsefulLinkText;
        const expectedFooterUsefulLinkTexts = ["Home", "About Us", "Contact Us", "All Products"];
        expect(footerUsefulLinkTexts).toEqual(expectedFooterUsefulLinkTexts);
        //customer policy section
        //assert footer useful links section title is as expected
        const footerCustomerPolicySectionTitle = await generalPage.footerCustomerPolicyLinksSectionTitle;
        //log the misspelling issue (as it's present visually)
        (footerCustomerPolicySectionTitle === ("CUSTOMER POLICY")) ? Logger.info("The spelling of the footer customer policy section title is correct") : Logger.warn(`The spelling of the footer customer policy section title isn't correct: ${footerCustomerPolicySectionTitle} `);
        expect(footerCustomerPolicySectionTitle).toBe("COSTUMER POLICY"); //misspelling issue
        //list elements
        //assert footer useful link texts are as expected (as a list)
        const footerCustomerPolicyLinkTexts = await generalPage.footerCustomerPolicyLinkText;
        const expectedFooterCustomerPolicyLinkTexts = ["Shipping Policy", "Return Policy", "Cancellation", "FAQ"];
        expect(footerCustomerPolicyLinkTexts).toEqual(expectedFooterCustomerPolicyLinkTexts);
        //follow us section
        //assert footer follow us section title is as expected
        const footerFollowUsSectionTitle = await generalPage.footerFollowUsSectionTitle;
        expect(footerFollowUsSectionTitle).toBe("FOLLOW US");
        //lower footer
        //list elements
        //assert lower footer link texts are as expected (as a list)
        const lowerFooterLinkTexts = await generalPage.lowerFooterLinkText;
        const expectedLowerFooterLinkTexts = ["Privacy Policy", "GDPR Policy", "T&C"];
        expect(lowerFooterLinkTexts).toEqual(expectedLowerFooterLinkTexts);
        //singular elements
        //assert lower footer copyright text is as expected
        const lowerFooterCopyrightText = await generalPage.lowerFooterCopyrightText;
        expect(lowerFooterCopyrightText).toBe("© 2025 Alphabin Technology Consulting");
    }

}
export {GeneralPageTextElementAssert};