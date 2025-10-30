"use strict"

import {AddNewAddressModal} from "../../../pages/modals/add.new.address.modal.mjs";
import {expect} from "@playwright/test";
import {Logger} from "../../../pages/utilities/logger.mjs";

class AddNewAddressModalTextElementAsserts{

    //add new address modal (specific web element) text element assert test method
    async isAddNewAddressModalUpperElementTextAsExpected(page){
        const addNewAddressModal = new AddNewAddressModal(page);
        //assert the add new address modal title is as expected
        const addNewAddressModalTitle = await addNewAddressModal.getAddNewAddressModalTitle();
        expect(addNewAddressModalTitle).toBe("Add New Address");
        //assert the add new address save address button text is as expected
        const addNewAddressModalSaveAddressBtnText = await addNewAddressModal.getAddNewAddressModalSaveAddressBtnText();
        expect(addNewAddressModalSaveAddressBtnText).toBe("Save Address");
    }

    //update address modal (specific web element) text element assert test method (only these elements differ from add new address modal0
    async isUpdateAddressModalUpperElementTextAsExpected(page){
        const addNewAddressModal = new AddNewAddressModal(page);
        //assert the update address modal title is as expected
        const updateAddressModalTitle = await addNewAddressModal.getAddNewAddressModalTitle();
        expect(updateAddressModalTitle).toBe("Update Address");
        //assert the update address save address button text is as expected
        const updateAddressModalSaveAddressBtnText = await addNewAddressModal.getAddNewAddressModalSaveAddressBtnText();
        expect(updateAddressModalSaveAddressBtnText).toBe("Update Address");
    }

    //add new address modal text element assert test method (update address modal page has the exact same elements)
    async isAddNewAddressModalTextAsExpected(page){
        const addNewAddressModal = new AddNewAddressModal(page);
        //assert the add new address cancel button text is as expected
        const addNewAddressModalCancelBtnText = await addNewAddressModal.getAddNewAddressModalCancelBtnText();
        await expect(addNewAddressModalCancelBtnText).toBe("Cancel");
        //input form
        //assert the add new address full name subtext is as expected
        const addNewAddressModalFullNameSubtext = await addNewAddressModal.getAddNewAddressModalFullNameSubtext();
        //log the misspelling issue (as it's present visually)
        (addNewAddressModalFullNameSubtext === ("Full Name *")) ? Logger.info("The spelling of the add new address modal full name subtext is correct") : Logger.warn(`The spelling of the add new address modal full name subtext isn't correct: ${addNewAddressModalFullNameSubtext} `);
        await expect(addNewAddressModalFullNameSubtext).toBe("First Name *"); //misspelling issue
        //assert the add new address email subtext is as expected
        const addNewAddressModalEmailSubtext = await addNewAddressModal.getAddNewAddressModalEmailSubtext();
        await expect(addNewAddressModalEmailSubtext).toBe("Email *");
        //assert the add new address street subtext is as expected
        const addNewAddressModalStreetSubtext = await addNewAddressModal.getAddNewAddressModalStreetSubtext();
        await expect(addNewAddressModalStreetSubtext).toBe("Street Address *");
        //assert the add new address city subtext is as expected
        const addNewAddressModalCitySubtext = await addNewAddressModal.getAddNewAddressModalCitySubtext();
        await expect(addNewAddressModalCitySubtext).toBe("City *");
        //assert the add new address state subtext is as expected
        const addNewAddressModalStateSubtext = await addNewAddressModal.getAddNewAddressModalStateSubtext();
        await expect(addNewAddressModalStateSubtext).toBe("State *");
        //assert the add new address country subtext is as expected
        const addNewAddressModalCountrySubtext = await addNewAddressModal.getAddNewAddressModalCountrySubtext();
        await expect(addNewAddressModalCountrySubtext).toBe("Country");
        //assert the add new address post code subtext is as expected
        const addNewAddressModalPostCodeSubtext = await addNewAddressModal.getAddNewAddressModalPostCodeSubtext();
        await expect(addNewAddressModalPostCodeSubtext).toBe("ZIP Code *");
        //assert the add new address required tag info text is as expected
        const addNewAddressModalRequiredTagInfoText = await addNewAddressModal.getAddNewAddressModalRequiredTagInfoText();
        await expect(addNewAddressModalRequiredTagInfoText).toBe("Fields marked with\n" + "*\n" + "are required");
    }

}
export {AddNewAddressModalTextElementAsserts};