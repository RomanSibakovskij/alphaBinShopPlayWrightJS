"use strict"

import {AddressesDashboardModal} from "../../../pages/modals/addresses.dashboard.modal.mjs";
import {Logger} from "../../../pages/utilities/logger.mjs";

class AddressesDashboardModalDataLogger{

    //addresses dashboard modal data logger method
    async logAddressDashModalAddressData(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        console.log("Addresses dashboard modal displayed user address(es) data: " + "\n")

        Logger.info("Displayed address(es) user full name(s): " + await addressesDashboardModal.getAddressesDashboardModalAddressFullName());
        Logger.info("Displayed address(es) user address(es): " + await addressesDashboardModal.getAddressesDashboardModalAddressData());
        Logger.info("Displayed address(es) user email(s): " + await addressesDashboardModal.getAddressesDashboardModalAddressEmail() + "\n");

    }

}
export {AddressesDashboardModalDataLogger};