"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class AccountDashboardPage extends BasePage{

    constructor(page) {
        super(page);

        //account dashboard page web elements
        //aside elements
        this._accountDashPageUserIcon = page.locator("//div[@data-testid='user-profile-avatar']");
        this._accountDashPageUserFullName = page.locator("//h2[@data-testid='user-profile-name']");
        this._accountDashPageEmailIcon = page.locator("//span[@aria-label='mail']"); //it's an svg element embedded into a span
        this._accountDashPageUserEmail = page.locator("//span[@data-testid='user-profile-email-value']");
        //account navigation aside bar
        this._accountDashPageAsideAccountNavbarTitle = page.locator("//h3[@data-testid='account-navigation-title']");
        //list elements
        this._accountDashPageAsideAccountNavbarLinkElements = page.locator("//div[@data-testid='menu-item']");
        this._accountDashPageAsideAccountNavbarLinkIconElements = page.locator("//div[@data-testid='menu-item']//span[@role='img']");
        this._accountDashPageAsideAccountNavbarLinkNameElements = page.locator("//div[@data-testid='menu-item']//p[@data-testid='menu-item-label']");
        this._accountDashPageAsideAccountNavbarLinkDescElements = page.locator("//div[@data-testid='menu-item']//p[@data-testid='menu-item-description']");

    }

    //click set aside account navbar link method
    async clickSetAsideAccountNavbarLink(index){await this._accountDashPageAsideAccountNavbarLinkElements.nth(index).click();}

    //account dashboard page text element getters
    //aside elements
    async getAccountDashPageUserFullName(){return await this._accountDashPageUserFullName.innerText();}
    async getAccountDashPageUserEmail(){return await this._accountDashPageUserEmail.innerText();}
    //account navigation aside bar
    async getAccountDashPageAsideAccountNavbarTitle(){return await this._accountDashPageAsideAccountNavbarTitle.innerText();}
    //list elements
    async getAccountDashPageAsideAccountNavbarLinkName() {
        const elements = await this._accountDashPageAsideAccountNavbarLinkNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getAccountDashPageAsideAccountNavbarLinkDesc() {
        const elements = await this._accountDashPageAsideAccountNavbarLinkDescElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //account dashboard page web element getters
    //aside elements
    get accountDashPageUserIcon(){return this._accountDashPageUserIcon;}
    get accountDashPageUserFullName(){return this._accountDashPageUserFullName;}
    get accountDashPageEmailIcon(){return this._accountDashPageEmailIcon;}
    get accountDashPageUserEmail(){return this._accountDashPageUserEmail;}
    //account navigation aside bar
    get accountDashPageAsideAccountNavbarTitle(){return this._accountDashPageAsideAccountNavbarTitle;}
    //list elements
    get accountDashPageAsideAccountNavbarLinkIconElements(){return this._accountDashPageAsideAccountNavbarLinkIconElements;}
    get accountDashPageAsideAccountNavbarLinkNameElements(){return this._accountDashPageAsideAccountNavbarLinkNameElements;}
    get accountDashPageAsideAccountNavbarLinkDescElements(){return this._accountDashPageAsideAccountNavbarLinkDescElements;}

}
export {AccountDashboardPage};