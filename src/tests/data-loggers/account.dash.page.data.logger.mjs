"use strict"

import {AccountDashboardPage} from "../../pages/account.dashboard.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class AccountDashPageDataLogger{

    //account dashboard page user data logger method
    async logAccountDashPageUserData(page){
        const accountDashboardPage = new AccountDashboardPage(page);
        console.log("Account dashboard page displayed user data(aside bar): " + "\n");

        Logger.info("Account dashboard displayed full user name: " + await accountDashboardPage.getAccountDashPageUserFullName());
        Logger.info("Account dashboard displayed user email: " + await accountDashboardPage.getAccountDashPageUserEmail() + "\n");

    }

}
export {AccountDashPageDataLogger};