// @ts-check
"use strict"

import {PasswordModal} from "../../../pages/modals/password.modal.mjs";
import {expect} from "@playwright/test";

class PasswordModalWebElementAssert{

    //password web element assert test method
    async isPasswordModalWebElementVisible(page){
        const passwordModal = new PasswordModal(page);
        //assert the password modal icon is visible
        await expect(passwordModal.passwordModalIcon).toBeVisible();
        //assert the password modal title is visible
        await expect(passwordModal.passwordModalTitle).toBeVisible();
        //assert the password modal description is visible
        await expect(passwordModal.passwordModalDesc).toBeVisible();
        //input form
        //assert the password modal new password subtext is visible
        await expect(passwordModal.passwordModalNewPasswordSubtext).toBeVisible();
        //assert the password modal new password input field is visible
        await expect(passwordModal.passwordModalNewPasswordInputField).toBeVisible();
        //assert the password modal confirm password subtext is visible
        await expect(passwordModal.passwordModalConfirmPasswordSubtext).toBeVisible();
        //assert the password modal confirm password input field is visible
        await expect(passwordModal.passwordModalConfirmPasswordInputField).toBeVisible();
        //list elements
        //assert the password modal required tags are visible (as a list)
        const passwordModalRequiredTags = passwordModal.passwordModalRequiredTagElement;
        const passwordModalRequiredTagCount = await passwordModalRequiredTags.count();
        for (let i = 0; i < passwordModalRequiredTagCount; i++) {
            await expect(passwordModalRequiredTags.nth(i)).toBeVisible();
        }
        //password requirements section
        //assert the password modal password requirements icon is visible
        await expect(passwordModal.passwordModalPasswordRequirementsIcon).toBeVisible();
        //assert the password modal password requirements title is visible
        await expect(passwordModal.passwordModalPasswordRequirementsTitle).toBeVisible();
        //list elements
        //assert the password modal requirements bubbles are visible (as a list)
        const passwordModalPasswordRequirementBubbles = passwordModal.passwordModalPasswordRequirementsBubbleElement;
        const passwordModalPasswordRequirementBubbleCount = await passwordModalPasswordRequirementBubbles.count();
        for (let i = 0; i < passwordModalPasswordRequirementBubbleCount; i++) {
            await expect(passwordModalPasswordRequirementBubbles.nth(i)).toBeVisible();
        }
        //assert the password modal requirements are visible (as a list)
        const passwordModalPasswordRequirements = passwordModal.passwordModalPasswordRequirementListElement;
        const passwordModalPasswordRequirementCount = await passwordModalPasswordRequirements.count();
        for (let i = 0; i < passwordModalPasswordRequirementCount; i++) {
            await expect(passwordModalPasswordRequirements.nth(i)).toBeVisible();
        }
        //button
        //assert the password modal update password button is visible
        await expect(passwordModal.passwordModalUpdatePasswordButton).toBeVisible();
    }

}
export {PasswordModalWebElementAssert};