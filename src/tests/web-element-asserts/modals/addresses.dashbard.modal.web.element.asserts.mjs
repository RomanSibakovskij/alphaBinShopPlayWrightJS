// @ts-check
"use strict"

import {AddressesDashboardModal} from "../../../pages/modals/addresses.dashboard.modal.mjs";
import {expect} from "@playwright/test";

class AddressesDashboardModalWebElementAsserts {

    //addresses dashboard modal (no addresses) web element assert test method
    async isAddressesDashboardNoAddressWebElementVisible(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        //assert addresses dashboard modal icon is visible
        await expect(addressesDashboardModal.addressesDashboardModalIcon).toBeVisible();
        //assert addresses dashboard modal title is visible
        await expect(addressesDashboardModal.addressesDashboardModalTitle).toBeVisible();
        //assert addresses dashboard modal add new address button is visible
        await expect(addressesDashboardModal.addressesDashboardModalAddNewAddressButton).toBeVisible();
        //addresses dashboard section
        //assert addresses dashboard modal address icon is visible
        await expect(addressesDashboardModal.addressesDashboardModalAddressIcon).toBeVisible();
        //assert addresses dashboard modal no address title is visible
        await expect(addressesDashboardModal.addressesDashboardModalNoAddressTitle).toBeVisible();
        //assert addresses dashboard modal no address subtext is visible
        await expect(addressesDashboardModal.addressesDashboardModalNoAddressSubtext).toBeVisible();
        //assert addresses dashboard modal add first address button is visible
        await expect(addressesDashboardModal.addressesDashboardModalAddFirstAddressButton).toBeVisible();
    }

    //addresses dashboard modal web element assert test method
    async isAddressesDashboardModalWebElementVisible(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        //assert addresses dashboard modal icon is visible
        await expect(addressesDashboardModal.addressesDashboardModalIcon).toBeVisible();
        //assert addresses dashboard modal title is visible
        await expect(addressesDashboardModal.addressesDashboardModalTitle).toBeVisible();
        //assert addresses dashboard modal add new address button is visible
        await expect(addressesDashboardModal.addressesDashboardModalAddNewAddressButton).toBeVisible();
        //addresses dashboard section (list elements)
        //assert addresses dashboard modal address full names are visible (as a list)
        const addressesDashModalAddressFullNames = addressesDashboardModal.addressesDashboardModalAddressFullNameElement;
        const addressesDashModalAddressFullNameCount = await addressesDashModalAddressFullNames.count();
        for (let i = 0; i < addressesDashModalAddressFullNameCount; i++) {
            await expect(addressesDashModalAddressFullNames.nth(i)).toBeVisible();
        }
        //assert addresses dashboard modal edit address buttons are visible (as a list)
        const addressesDashModalEditAddressButtons = addressesDashboardModal.addressesDashboardModalEditAddressBtnElement;
        const addressesDashModalEditAddressButtonCount = await addressesDashModalEditAddressButtons.count();
        for (let i = 0; i < addressesDashModalEditAddressButtonCount; i++) {
            await expect(addressesDashModalEditAddressButtons.nth(i)).toBeVisible();
        }
        //assert addresses dashboard modal delete address buttons are visible (as a list)
        const addressesDashModalDeleteAddressButtons = addressesDashboardModal.addressesDashboardModalDeleteAddressBtnElement;
        const addressesDashModalDeleteAddressButtonCount = await addressesDashModalDeleteAddressButtons.count();
        for (let i = 0; i < addressesDashModalDeleteAddressButtonCount; i++) {
            await expect(addressesDashModalDeleteAddressButtons.nth(i)).toBeVisible();
        }
        //assert addresses dashboard modal address icons are visible (as a list)
        const addressesDashModalAddressIcons = addressesDashboardModal.addressesDashboardModalAddressIconElement;
        const addressesDashModalAddressIconCount = await addressesDashModalAddressIcons.count();
        for (let i = 0; i < addressesDashModalAddressIconCount; i++) {
            await expect(addressesDashModalAddressIcons.nth(i)).toBeVisible();
        }
        //assert addresses dashboard modal address data elements are visible (as a list)
        const addressesDashModalAddressDataElements = addressesDashboardModal.addressesDashboardModalAddressDataElement;
        const addressesDashModalAddressDataElementCount = await addressesDashModalAddressDataElements.count();
        for (let i = 0; i < addressesDashModalAddressDataElementCount; i++) {
            await expect(addressesDashModalAddressDataElements.nth(i)).toBeVisible();
        }
        //assert addresses dashboard modal address emails are visible (as a list)
        const addressesDashModalAddressEmails = addressesDashboardModal.addressesDashboardModalAddressEmailElement;
        const addressesDashModalAddressEmailCount = await addressesDashModalAddressEmails.count();
        for (let i = 0; i < addressesDashModalAddressEmailCount; i++) {
            await expect(addressesDashModalAddressEmails.nth(i)).toBeVisible();
        }
    }

    //addresses dashboard modal (delete address pop-up) web element assert test method
    async isAddressesDashboardDeletePopUpWebElementVisible(page){
        const addressesDashboardModal = new AddressesDashboardModal(page);
        //assert addresses dashboard modal delete address pop-up title is visible
        await expect(addressesDashboardModal.deleteAddressPopUpTitle).toBeVisible();
        //assert addresses dashboard modal delete address pop-up subtext is visible
        await expect(addressesDashboardModal.deleteAddressPopUpSubtext).toBeVisible();
        //assert addresses dashboard modal delete address pop-up cancel button is visible
        await expect(addressesDashboardModal.deleteAddressPopUpCancelButton).toBeVisible();
        //assert addresses dashboard modal delete address pop-up delete button is visible
        await expect(addressesDashboardModal.deleteAddressPopUpDeleteButton).toBeVisible();
    }

}
export {AddressesDashboardModalWebElementAsserts};