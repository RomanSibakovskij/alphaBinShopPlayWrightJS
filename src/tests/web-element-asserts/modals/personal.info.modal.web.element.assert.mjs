// @ts-check
"use strict"

import {PersonalInfoModal} from "../../../pages/modals/personal.info.modal.mjs";
import {expect} from "@playwright/test";

class PersonalInfoModalWebElementAssert{

    //personal info modal web element assert test method
    async isPersonalInfoModalWebElementVisible(page){
        const personalInfoModal = new PersonalInfoModal(page);
        //assert the personal info modal my account icon is visible
        await expect(personalInfoModal.personalInfoModalMyAccountIcon).toBeVisible();
        //assert the personal info modal title is visible
        await expect(personalInfoModal.personalInfoModalTitle).toBeVisible();
        //assert the personal info modal personal details button is visible
        await expect(personalInfoModal.personalInfoModalPersonalDetailsButton).toBeVisible();
        //assert the personal info modal security button is visible
        await expect(personalInfoModal.personalInfoModalSecurityButton).toBeVisible();
        //personal information section
        //assert the personal info modal personal information section icon is visible
        await expect(personalInfoModal.personalInfoModalPersonalInfoSectionIcon).toBeVisible();
        //assert the personal info modal personal information section title is visible
        await expect(personalInfoModal.personalInfoModalPersonalInfoSectionTitle).toBeVisible();
        //assert the personal info modal personal information section desc is visible
        await expect(personalInfoModal.personalInfoModalPersonalInfoSectionDesc).toBeVisible();
        //input form
        //assert the personal info modal first name subtext is visible
        await expect(personalInfoModal.personalInfoModalFirstNameSubtext).toBeVisible();
        //assert the personal info modal first name input field is visible
        await expect(personalInfoModal.personalInfoModalFirstNameInputField).toBeVisible();
        //assert the personal info modal last name subtext is visible
        await expect(personalInfoModal.personalInfoModalLastNameSubtext).toBeVisible();
        //assert the personal info modal last name input field is visible
        await expect(personalInfoModal.personalInfoModalLastNameInputField).toBeVisible();
        //assert the personal info modal email subtext is visible
        await expect(personalInfoModal.personalInfoModalEmailSubtext).toBeVisible();
        //assert the personal info modal email name input field is visible
        await expect(personalInfoModal.personalInfoModalEmailInputField).toBeVisible();
        //assert the personal info modal email hint is visible
        await expect(personalInfoModal.personalInfoModalEmailHint).toBeVisible();
        //assert the personal info modal phone subtext is visible
        await expect(personalInfoModal.personalInfoModalPhoneSubtext).toBeVisible();
        //assert the personal info modal phone input field is visible
        await expect(personalInfoModal.personalInfoModalPhoneInputField).toBeVisible();
        //assert the personal info modal phone length hint is visible
        await expect(personalInfoModal.personalInfoModalPhoneLengthHint).toBeVisible();
        //list elements
        //assert the account dashboard page aside account navbar link icons are visible (as a list)
        const personalInfoModalRequiredTags = personalInfoModal.personalInfoModalRequiredTagElement;
        const personalInfoModalRequiredTagCount = await personalInfoModalRequiredTags.count();
        for (let i = 0; i < personalInfoModalRequiredTagCount; i++) {
            await expect(personalInfoModalRequiredTags.nth(i)).toBeVisible();
        }
        //button
        //assert the personal info modal save changes button is visible
        await expect(personalInfoModal.personalInfoSaveChangesButton).toBeVisible();
    }

}
export {PersonalInfoModalWebElementAssert};