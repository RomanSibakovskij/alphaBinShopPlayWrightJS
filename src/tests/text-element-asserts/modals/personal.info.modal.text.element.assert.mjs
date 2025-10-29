"use strict"

import {PersonalInfoModal} from "../../../pages/modals/personal.info.modal.mjs";
import {expect} from "@playwright/test";

class PersonalInfoModalTextElementAssert{

    //personal info modal text element assert test method
    async isPersonalInfoModalTextElementAsExpected(page){
        const personalInfoModal = new PersonalInfoModal(page);
        //assert the personal info modal title is as expected
        const personalInfoModalTitle = await personalInfoModal.getPersonalInfoModalTitle();
        expect(personalInfoModalTitle).toBe("My Profile");
        //assert the personal info modal personal details button text is as expected
        const personalInfoModalPersonalDetailsBtnText = await personalInfoModal.getPersonalInfoModalPersonalDetailsBtnText();
        expect(personalInfoModalPersonalDetailsBtnText).toBe("Personal Details");
        //assert the personal info modal security button text is as expected
        const personalInfoModalSecurityBtnText = await personalInfoModal.getPersonalInfoModalSecurityBtnText();
        expect(personalInfoModalSecurityBtnText).toBe("Security");
        //personal information section
        //assert the personal info modal personal information section title is as expected
        const personalInfoModalPersonalInfoSectionTitle = await personalInfoModal.getPersonalInfoModalPersonalinfoSectionTitle();
        expect(personalInfoModalPersonalInfoSectionTitle).toBe("Personal Information");
        //assert the personal info modal personal information section description is as expected
        const personalInfoModalPersonalInfoSectionDesc = await personalInfoModal.getPersonalInfoModalPersonalinfoSectionDesc();
        expect(personalInfoModalPersonalInfoSectionDesc).toBe("Update your personal details and contact information");
        //input form
        //assert the personal info modal first name subtext is as expected
        const personalInfoModalFirstNameSubtext = await personalInfoModal.getPersonalInfoModalFirstNameSubtext();
        expect(personalInfoModalFirstNameSubtext).toBe("First Name *");
        //assert the personal info modal last name subtext is as expected
        const personalInfoModalLastNameSubtext = await personalInfoModal.getPersonalInfoModalLastNameSubtext();
        expect(personalInfoModalLastNameSubtext).toBe("Last Name *");
        //assert the personal info modal email subtext is as expected
        const personalInfoModalEmailSubtext = await personalInfoModal.getPersonalInfoModalEmailSubtext();
        expect(personalInfoModalEmailSubtext).toBe("Email Address");
        //assert the personal info modal email hint is as expected
        const personalInfoModalEmailHint = await personalInfoModal.getPersonalInfoModalEmailHint();
        expect(personalInfoModalEmailHint).toBe("Email cannot be changed");
        //assert the personal info modal phone subtext is as expected
        const personalInfoModalPhoneSubtext = await personalInfoModal.getPersonalInfoModalPhoneSubtext();
        expect(personalInfoModalPhoneSubtext).toBe("Contact Number");
        //assert the personal info modal phone length hint is as expected
        const personalInfoModalPhoneLengthHint = await personalInfoModal.getPersonalInfoModalPhoneLengthHint();
        expect(personalInfoModalPhoneLengthHint).toBe("Enter a 10-digit phone number");
        //button
        //assert the personal info modal save changes button text is as expected
        const personalInfoModalSaveChangesBtnText = await personalInfoModal.getPersonalInfoModalSaveChangesBtnText();
        expect(personalInfoModalSaveChangesBtnText).toBe("Save Changes");
    }

}
export {PersonalInfoModalTextElementAssert};