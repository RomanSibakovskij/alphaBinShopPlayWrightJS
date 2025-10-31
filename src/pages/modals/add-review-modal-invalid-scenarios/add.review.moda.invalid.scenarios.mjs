"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
import {TestDataGenerator} from "../../utilities/test.data.generator.mjs";
import {Logger} from "../../utilities/logger.mjs";

class AddReviewModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._addReviewModalYourNameInputField = page.locator("//input[@data-testid='review-form-name-input']");
        this._addReviewModalYourEmailInputField = page.locator("//input[@data-testid='review-form-email-input']");
        this._addReviewModalReviewTitleInputField = page.locator("//input[@data-testid='review-form-title-input']");
        this._addReviewModalOpinionTextarea = page.locator("//textarea[@data-testid='review-form-review-input']");

        const testDataGenerator = new TestDataGenerator(page);

        //invalid review input data - no singular input
        this._noReviewFullName = "";
        this._noReviewEmail = "";
        this._noReviewTitle = "";
        this._noReview = "";

        //invalid review input data - too short singular input
        this._tooShortReviewFullName = "R T"; //3 chars
        this._tooShortReviewEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name, domain
        this._tooShortReviewTitle = "D"; //1 char
        this._tooShortReview = "Csdsertyf"; //9 chars

        //invalid review input data - too long singular input
        this._tooLongReviewFullName = "Rsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg Tsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //201 chars
        this._tooLongReviewEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //100 chars -> name, domain

    }

    //invalid user (review) data input methods - no singular input
    async inputNoGuestFullNameIntoYourNameInputField(){
        const noGuestReviewFullName = this._noReviewFullName;
        Logger.info("No user (guest) review full name: " + noGuestReviewFullName);
        await this._addReviewModalYourNameInputField.fill(noGuestReviewFullName);
    }
    async inputNoGuestEmailIntoYourEmailInputField(){
        const noGuestReviewEmail = this._noReviewEmail;
        Logger.info("No user (guest) review email: " + noGuestReviewEmail);
        await this._addReviewModalYourEmailInputField.fill(noGuestReviewEmail);
    }
    async inputNoGuestReviewTitleIntoReviewTitleInputField(){
        const noGuestReviewTitle = this._noReviewTitle;
        Logger.info("No user (guest) review title: " + noGuestReviewTitle);
        await this._addReviewModalReviewTitleInputField.fill(noGuestReviewTitle);
    }
    async inputNoGuestReviewIntoReviewTextarea(){
        const noGuestReview = this._noReview;
        Logger.info("No user (guest) review: " + noGuestReview);
        await this._addReviewModalOpinionTextarea.fill(noGuestReview);
    }

    //invalid user (review) data input methods - too short singular input
    async inputTooShortGuestFullNameIntoYourNameInputField(){
        const tooShortGuestReviewFullName = this._tooShortReviewFullName;
        Logger.info("Too short user (guest) review full name: " + tooShortGuestReviewFullName);
        await this._addReviewModalYourNameInputField.fill(tooShortGuestReviewFullName);
    }
    async inputTooShortGuestEmailIntoYourEmailInputField(){
        const tooShortGuestReviewEmail = this._tooShortReviewEmail;
        Logger.info("Too short user (guest) review email: " + tooShortGuestReviewEmail);
        await this._addReviewModalYourEmailInputField.fill(tooShortGuestReviewEmail);
    }
    async inputTooShortGuestReviewTitleIntoReviewTitleInputField(){
        const tooShortGuestReviewTitle = this._tooShortReviewTitle;
        Logger.info("Too short user (guest) review title: " + tooShortGuestReviewTitle);
        await this._addReviewModalReviewTitleInputField.fill(tooShortGuestReviewTitle);
    }
    async inputTooShortGuestReviewIntoReviewTextarea(){
        const tooShortGuestReview = this._tooShortReview;
        Logger.info("Too short user (guest) review: " + tooShortGuestReview);
        await this._addReviewModalOpinionTextarea.fill(tooShortGuestReview);
    }

    //invalid user (review) data input methods - too long singular input
    async inputTooLongGuestFullNameIntoYourNameInputField(){
        const tooLongGuestReviewFullName = this._tooLongReviewFullName;
        Logger.info("Too long user (guest) review full name: " + tooLongGuestReviewFullName);
        await this._addReviewModalYourNameInputField.fill(tooLongGuestReviewFullName);
    }
    async inputTooLongGuestEmailIntoYourEmailInputField(){
        const tooLongGuestReviewEmail = this._tooLongReviewEmail;
        Logger.info("Too long user (guest) review email: " + tooLongGuestReviewEmail);
        await this._addReviewModalYourEmailInputField.fill(tooLongGuestReviewEmail);
    }

}
export {AddReviewModalInvalidScenarios};