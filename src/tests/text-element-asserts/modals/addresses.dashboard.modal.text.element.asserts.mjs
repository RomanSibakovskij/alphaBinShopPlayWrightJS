"use strict"

import {AddressesDashboardModal} from "../../../pages/modals/addresses.dashboard.modal.mjs";
import {expect} from "@playwright/test";

class AddressesDashboardModalTextElementAsserts {

    //addresses dashboard modal text element assert test method
    async isAddressesDashboardModalTextElementAsExpected(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        //assert addresses dashboard modal title is as expected
        const addressesDashModalTitle = await addressesDashboardModal.getAddressesDashboardModalTitle();
        expect(addressesDashModalTitle).toBe("My Addresses");
        //assert addresses dashboard modal add new address button text is as expected
        const addressesDashModalAddNewAddressBtnText = await addressesDashboardModal.getAddressesDashboardModalAddNewAddressBtnText();
        expect(addressesDashModalAddNewAddressBtnText).toBe("Add New Address");
    }

    //addresses dashboard modal (no address) text element assert test method
    async isAddressesDashboardModalNoAddressTextElementAsExpected(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        //assert addresses dashboard modal no address title is as expected
        const addressesDashModalNoAddressTitle = await addressesDashboardModal.getAddressesDashboardModalNoAddressTitle();
        await expect(addressesDashModalNoAddressTitle).toBe("No addresses found");
        //assert addresses dashboard modal no new address subtext is as expected
        const addressesDashModalNoNewAddressSubtext = await addressesDashboardModal.getAddressesDashboardModalNoAddressSubtxt();
        await expect(addressesDashModalNoNewAddressSubtext).toBe("You haven't added any addresses yet. Add an address to make checkout faster.");
        //assert addresses dashboard modal add first address button text is as expected
        const addressesDashModalAddFirstAddressBtnText = await addressesDashboardModal.getAddressesDashboardModalAddFirstAddressBtnText();
        await expect(addressesDashModalAddFirstAddressBtnText).toBe("Add Your First Address");
    }

    //addresses dashboard modal (delete address pop-up) text element assert test method
    async isAddressesDashboardModalDeletePopUpTextElementAsExpected(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        //assert addresses dashboard modal delete address pop-up title is as expected
        const addressesDashModalDeletePopUpTitle = await addressesDashboardModal.getDeleteAddressPopUpTitle();
        await expect(addressesDashModalDeletePopUpTitle).toBe("Delete Address");
        //assert addresses dashboard modal delete address pop-up subtext is as expected
        const addressesDashModalDeletePopUpSubtext = await addressesDashboardModal.getDeleteAddressPopUpSubtext();
        await expect(addressesDashModalDeletePopUpSubtext).toBe("Are you sure you want to delete this address? This action cannot be undone.");
        //assert addresses dashboard modal delete address pop-up cancel button text is as expected
        const addressesDashModalDeletePopUpCancelBtnText = await addressesDashboardModal.getDeleteAddressPopUpCancelBtnText();
        await expect(addressesDashModalDeletePopUpCancelBtnText).toBe("Cancel");
        //assert addresses dashboard modal delete address pop-up delete button text is as expected
        const addressesDashModalDeletePopUpDeleteBtnText = await addressesDashboardModal.getDeleteAddressPopUpDeleteBtnText();
        await expect(addressesDashModalDeletePopUpDeleteBtnText).toBe("Delete");
    }

}
export {AddressesDashboardModalTextElementAsserts};