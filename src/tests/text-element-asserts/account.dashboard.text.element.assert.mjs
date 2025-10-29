"use strict"

import {AccountDashboardPage} from "../../pages/account.dashboard.page.mjs";
import {expect} from "@playwright/test";

class AccountDashboardPageTextElementAssert{

    //account dashboard page text element assert test method
    async isAccountDashPageTextElementAsExpected(page){
        const accountDashboardPage = new AccountDashboardPage(page);
        //aside elements
        //assert the account dashboard page aside account navbar title is as expected
        const accountDashPageAsideAccountNavbarTitle = await accountDashboardPage.getAccountDashPageAsideAccountNavbarTitle();
        expect(accountDashPageAsideAccountNavbarTitle).toBe("Account Navigation");
        //list elements
        //assert the account dashboard page aside account navbar link names are as expected (as a list)
        const accountDashPageAsideAccountNavbarLinkNames = await accountDashboardPage.getAccountDashPageAsideAccountNavbarLinkName();
        const expectedAccountDashPageAsideAccountNavbarLinkNames = ["My Profile", "My Orders", "Addresses", "Log Out"];
        expect(accountDashPageAsideAccountNavbarLinkNames).toEqual(expectedAccountDashPageAsideAccountNavbarLinkNames);
        //assert the account dashboard page aside account navbar link descriptions are as expected (as a list)
        const accountDashPageAsideAccountNavbarLinkDescriptions = await accountDashboardPage.getAccountDashPageAsideAccountNavbarLinkDesc();
        const expectedAccountDashPageAsideAccountNavbarLinkDescriptions = ["Manage your personal information", "Track and manage your orders", "Manage your shipping addresses", "Sign out of your account"];
        expect(accountDashPageAsideAccountNavbarLinkDescriptions).toEqual(expectedAccountDashPageAsideAccountNavbarLinkDescriptions);
    }

}
export {AccountDashboardPageTextElementAssert};