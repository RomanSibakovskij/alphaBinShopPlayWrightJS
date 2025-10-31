"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
import {Logger} from "../../utilities/logger.mjs";

class AddReviewModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._addReviewModalYourNameInputField = page.locator("//input[@data-testid='review-form-name-input']");
        this._addReviewModalYourEmailInputField = page.locator("//input[@data-testid='review-form-email-input']");
        this._addReviewModalReviewTitleInputField = page.locator("//input[@data-testid='review-form-title-input']");
        this._addReviewModalOpinionTextarea = page.locator("//textarea[@data-testid='review-form-review-input']");

        //invalid review input data - no singular input
        this._noReviewFullName = "";

    }

    //invalid user (review) data input methods - no singular input
    async inputNoGuestFullNameIntoYourNameInputField(){
        const noGuestReviewFullName = this._noReviewFullName;
        Logger.info("No user (guest) review full name: " + noGuestReviewFullName);
        await this._addReviewModalYourNameInputField.fill(noGuestReviewFullName);
    }

}
export {AddReviewModalInvalidScenarios};