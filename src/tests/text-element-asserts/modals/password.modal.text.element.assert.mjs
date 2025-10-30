"use strict"

import {PasswordModal} from "../../../pages/modals/password.modal.mjs";
import {expect} from "@playwright/test";

class PasswordModalTextElementAssert{

    //password modal text element assert test method
    async isPasswordModalTextElementAsExpected(page){
        const passwordModal = new PasswordModal(page);
        //assert password modal title is as expected
        const passwordModalTitle = await passwordModal.getPasswordModalTitle();
        expect(passwordModalTitle).toBe("Password & Security");
        //assert password modal description is as expected
        const passwordModalDesc = await passwordModal.getPasswordModalDesc();
        expect(passwordModalDesc).toBe("Update your password and manage security settings");
        //input form
        //assert password modal new password subtext is as expected
        const passwordModalNewPasswordSubtext = await passwordModal.getPasswordModalNewPasswordSubtext();
        expect(passwordModalNewPasswordSubtext).toBe("New Password *");
        //assert password modal confirm password subtext is as expected
        const passwordModalConfirmPasswordSubtext = await passwordModal.getPasswordModalConfirmPasswordSubtext();
        expect(passwordModalConfirmPasswordSubtext).toBe("Confirm Password *");
        //password requirements section
        //assert password modal password requirements title is as expected
        const passwordModalPasswordRequirementsTitle = await passwordModal.getPasswordModalPasswordRequirementsTitle();
        expect(passwordModalPasswordRequirementsTitle).toBe("Password Requirements");
        //list elements
        //assert password modal password requirements are as expected (as a list)
        const passwordModalPasswordRequirements = await passwordModal.getPasswordModalPasswordRequirement();
        const expectedPasswordModalPasswordRequirements = ["Minimum 8 characters", "At least one uppercase letter", "At least one number", "At least one special character"];
        expect(passwordModalPasswordRequirements).toEqual(expectedPasswordModalPasswordRequirements);
        //button
        //assert password modal update password button text is as expected
        const passwordModalUpdatePasswordBtnText = await passwordModal.getPasswordModalUpdatePasswordBtnText();
        expect(passwordModalUpdatePasswordBtnText).toBe("Update Password");
    }

}
export {PasswordModalTextElementAssert};