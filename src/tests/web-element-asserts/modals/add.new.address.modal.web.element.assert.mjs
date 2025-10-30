//@ts-check
"use strict"

import {AddNewAddressModal} from "../../../pages/modals/add.new.address.modal.mjs";
import {expect} from "@playwright/test";

class AddNewAddressModalWebElementAssert{

    //add new address modal web element assert test method
    async isAddNewAddressModalWebElementVisible(page){
        const addNewAddressModal = new AddNewAddressModal(page);
        //assert the add new address modal title is visible
        await expect(addNewAddressModal.addNewAddressModalTitle).toBeVisible();
        //assert the add new address modal cancel button is visible
        await expect(addNewAddressModal.addNewAddressModalCancelButton).toBeVisible();
        //assert the add new address modal save address button is visible
        await expect(addNewAddressModal.addNewAddressModalSaveAddressButton).toBeVisible();
        //input form
        //assert the add new address modal full name subtext is visible
        await expect(addNewAddressModal.addNewAddressModalFullNameSubtext).toBeVisible();
        //assert the add new address modal full name input field is visible
        await expect(addNewAddressModal.addNewAddressModalFullNameInputField).toBeVisible();
        //assert the add new address modal email subtext is visible
        await expect(addNewAddressModal.addNewAddressModalEmailSubtext).toBeVisible();
        //assert the add new address modal email input field is visible
        await expect(addNewAddressModal.addNewAddressModalEmailInputField).toBeVisible();
        //assert the add new address modal street subtext is visible
        await expect(addNewAddressModal.addNewAddressModalStreetSubtext).toBeVisible();
        //assert the add new address modal street input field is visible
        await expect(addNewAddressModal.addNewAddressModalStreetInputField).toBeVisible();
        //assert the add new address modal city subtext is visible
        await expect(addNewAddressModal.addNewAddressModalCitySubtext).toBeVisible();
        //assert the add new address modal city input field is visible
        await expect(addNewAddressModal.addNewAddressModalCityInputField).toBeVisible();
        //assert the add new address modal state subtext is visible
        await expect(addNewAddressModal.addNewAddressModalStateSubtext).toBeVisible();
        //assert the add new address modal state input field is visible
        await expect(addNewAddressModal.addNewAddressModalStateInputField).toBeVisible();
        //assert the add new address modal country subtext is visible
        await expect(addNewAddressModal.addNewAddressModalCountrySubtext).toBeVisible();
        //assert the add new address modal country input field is visible
        await expect(addNewAddressModal.addNewAddressModalCountryInputField).toBeVisible();
        //assert the add new address modal post code subtext is visible
        await expect(addNewAddressModal.addNewAddressModalPostCodeSubtext).toBeVisible();
        //assert the add new address modal post code input field is visible
        await expect(addNewAddressModal.addNewAddressModalPostCodeInputField).toBeVisible();
        //list elements
        //assert the password modal required tags are visible (as a list)
        const addNewAddressModalRequiredTags = addNewAddressModal.addNewAddressModalRequiredTagElement;
        const addNewAddressModalRequiredTagCount = await addNewAddressModalRequiredTags.count();
        for (let i = 0; i < addNewAddressModalRequiredTagCount; i++) {
            await expect(addNewAddressModalRequiredTags.nth(i)).toBeVisible();
        }
        //singular elements
        //assert the add new address modal information icon is visible
        await expect(addNewAddressModal.addNewAddressModalInformationIcon).toBeVisible();
        //assert the add new address modal required tag text is visible
        await expect(addNewAddressModal.addNewAddressModalRequiredTagInfoText).toBeVisible();
    }

}
export {AddNewAddressModalWebElementAssert};