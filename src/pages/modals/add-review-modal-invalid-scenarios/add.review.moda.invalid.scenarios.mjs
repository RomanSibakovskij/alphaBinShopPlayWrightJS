"use strict"

import {BasePage} from "../../utilities/base.page.mjs";

class AddReviewModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._addReviewModalYourNameInputField = page.locator("//input[@data-testid='review-form-name-input']");
        this._addReviewModalYourEmailInputField = page.locator("//input[@data-testid='review-form-email-input']");
        this._addReviewModalReviewTitleInputField = page.locator("//input[@data-testid='review-form-title-input']");
        this._addReviewModalOpinionTextarea = page.locator("//textarea[@data-testid='review-form-review-input']");

    }

}
export {AddReviewModalInvalidScenarios};