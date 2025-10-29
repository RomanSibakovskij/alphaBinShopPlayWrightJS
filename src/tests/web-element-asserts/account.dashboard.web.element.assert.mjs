"use strict"

import {AccountDashboardPage} from "../../pages/account.dashboard.page.mjs";
import {expect} from "@playwright/test";

class AccountDashboardPageWebElementAssert{

    //account dashboard page web element assert test method
    async isAccountDashboardPageWebElementVisible(page){
        const accountDashboardPage = new AccountDashboardPage(page);
        //aside elements
        //assert the account dashboard page user icon is visible
        await expect(accountDashboardPage.accountDashPageUserIcon).toBeVisible();
        //assert the account dashboard page user full name is visible
        await expect(accountDashboardPage.accountDashPageUserFullName).toBeVisible();
        //assert the account dashboard page email icon is visible
        await expect(accountDashboardPage.accountDashPageEmailIcon).toBeVisible();
        //assert the account dashboard page user email is visible
        await expect(accountDashboardPage.accountDashPageUserEmail).toBeVisible();
        //account navigation aside bar
        //assert the account dashboard page aside account navbar title is visible
        await expect(accountDashboardPage.accountDashPageAsideAccountNavbarTitle).toBeVisible();
        //list elements
        //assert the account dashboard page aside account navbar link icons are visible (as a list)
        const accountDashPageAsideAccountNavbarLinkIcons = accountDashboardPage.accountDashPageAsideAccountNavbarLinkIconElements;
        const accountDashPageAsideAccountNavbarLinkIconCount = await accountDashPageAsideAccountNavbarLinkIcons.count();
        for (let i = 0; i < accountDashPageAsideAccountNavbarLinkIconCount; i++) {
            await expect(accountDashPageAsideAccountNavbarLinkIcons.nth(i)).toBeVisible();
        }
        //assert the account dashboard page aside account navbar link names are visible (as a list)
        const accountDashPageAsideAccountNavbarLinkNames = accountDashboardPage.accountDashPageAsideAccountNavbarLinkNameElements;
        const accountDashPageAsideAccountNavbarLinkNameCount = await accountDashPageAsideAccountNavbarLinkNames.count();
        for (let i = 0; i < accountDashPageAsideAccountNavbarLinkNameCount; i++) {
            await expect(accountDashPageAsideAccountNavbarLinkNames.nth(i)).toBeVisible();
        }
        //assert the account dashboard page aside account navbar link descriptions are visible (as a list)
        const accountDashPageAsideAccountNavbarLinkDescriptions = accountDashboardPage.accountDashPageAsideAccountNavbarLinkDescElements;
        const accountDashPageAsideAccountNavbarLinkDescCount = await accountDashPageAsideAccountNavbarLinkDescriptions.count();
        for (let i = 0; i < accountDashPageAsideAccountNavbarLinkDescCount; i++) {
            await expect(accountDashPageAsideAccountNavbarLinkDescriptions.nth(i)).toBeVisible();
        }

    }

}
export {AccountDashboardPageWebElementAssert};