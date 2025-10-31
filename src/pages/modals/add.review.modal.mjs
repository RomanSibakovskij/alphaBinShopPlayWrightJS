"use strict"

import {BasePage} from "../utilities/base.page.mjs";
import {TestDataGenerator} from "../utilities/test.data.generator.mjs";
import {Logger} from "../utilities/logger.mjs";

class AddReviewModal extends BasePage{

    constructor(page) {
        super(page);

        //add review modal web elements
        this._addReviewModalBackToReviewsBtn = page.locator("//button[@data-testid='write-review-button']");
        //input field
        this._addReviewModalYourNameSubtext = page.locator("//label[@data-testid='review-form-name-label']");
        this._addReviewModalYourNameInputField = page.locator("//input[@data-testid='review-form-name-input']");
        this._addReviewModalYourEmailSubtext = page.locator("//label[@data-testid='review-form-email-label']");
        this._addReviewModalYourEmailInputField = page.locator("//input[@data-testid='review-form-email-input']");
        this._addReviewModalGiveRatingSubtext = page.locator("//label[@data-testid='review-form-rating-label']");
        //list elements
        this._addReviewModalGiveRatingStarElements = page.locator("//div[@class='flex gap-2']/span");
        //singular elements
        this._addReviewModalReviewTitleSubtext = page.locator("//label[@data-testid='review-form-title-label']");
        this._addReviewModalReviewTitleInputField = page.locator("//input[@data-testid='review-form-title-input']");
        this._addReviewModalOpinionSubtext = page.locator("//label[@data-testid='review-form-review-label']");
        this._addReviewModalOpinionTextarea = page.locator("//textarea[@data-testid='review-form-review-input']");
        this._addReviewModalCancelButton = page.locator("//button[@data-testid='review-form-cancel-button']");
        this._addReviewModalSubmitButton = page.locator("//button[@data-testid='review-form-submit-button']");
        //invalid singular input error message
        this._addReviewModalInvalidSingularInputErrorMsg = page.locator("//p[@class='text-red-500 text-xs']");
        //empty section elements
        this._addReviewModalWriteReviewButton = page.locator("//button[@data-testid='write-review-button']");
        this._addReviewModalNoReviewMessage = page.locator("//p[@data-testid='no-reviews-message']");

        const testDataGenerator = new TestDataGenerator(page);

        //valid review input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._guestFirstName = firstName;
        this._guestLastName = lastName;
        this._guestReviewFullName = this._guestFirstName + " " + this._guestLastName;
        this._guestReviewEmail = testDataGenerator.generateRandomEmailAddress(8);
        this._guestReviewTitle = testDataGenerator.generateRandomCommentTitle();
        this._guestReview = testDataGenerator.generateRandomComment();

    }

    //valid guest user (review) data input methods
    async inputGuestFullNameIntoYourNameInputField(){
        const guestReviewFullName = this._guestReviewFullName;
        Logger.info("Valid user (guest) review full name: " + guestReviewFullName);
        await this._addReviewModalYourNameInputField.fill(guestReviewFullName);
    }
    async inputGuestEmailIntoYourEmailInputField(){
        const guestReviewEmail = this._guestReviewEmail;
        Logger.info("Valid user (guest) review email: " + guestReviewEmail);
        await this._addReviewModalYourEmailInputField.fill(guestReviewEmail);
    }
    async inputGuestReviewTitleIntoReviewTitleInputField(){
        const guestReviewTitle = this._guestReviewTitle;
        Logger.info("Valid user (guest) review title: " + guestReviewTitle);
        await this._addReviewModalReviewTitleInputField.fill(guestReviewTitle);
    }
    async inputGuestReviewIntoReviewTextarea(){
        const guestReview = this._guestReview;
        Logger.info("Valid user (guest) review: " + guestReview);
        await this._addReviewModalOpinionTextarea.fill(guestReview);
    }

    //click set review stars method
    async clickSetReviewStars(index){await this._addReviewModalGiveRatingStarElements.nth(index).click();}

    //click "Write a Review" button method
    async clickWriteReviewButton(){await this._addReviewModalWriteReviewButton.click();}

    //click "Submit" button method
    async clickSubmitButton(){await this._addReviewModalSubmitButton.click();}

    //add review modal text element getters
    async getAddReviewModalBackToReviewsBtnText(){return await this._addReviewModalBackToReviewsBtn.innerText();}
    //input field
    async getAddReviewModalYourNameSubtext(){return await this._addReviewModalYourNameSubtext.innerText();}
    async getAddReviewModalYourEmailSubtext(){return await this._addReviewModalYourEmailSubtext.innerText();}
    async getAddReviewModalGiveRatingSubtext(){return await this._addReviewModalGiveRatingSubtext.innerText();}
    async getAddReviewModalReviewTitleSubtext(){return await this._addReviewModalReviewTitleSubtext.innerText();}
    async getAddReviewModalOpinionSubtext(){return await this._addReviewModalOpinionSubtext.innerText();}
    async getAddReviewModalCancelBtnText(){return await this._addReviewModalCancelButton.innerText();}
    async getAddReviewModalSubmitBtnText(){return await this._addReviewModalSubmitButton.innerText();}
    //empty section elements
    async getAddReviewModalWriteReviewBtnText(){return await this._addReviewModalWriteReviewButton.innerText();}
    async getAddReviewModalNoReviewsMessage(){return await this._addReviewModalNoReviewMessage.innerText();}

    //invalid singular input error message getter
    async getAddReviewInvalidSingularInputErrorMsg(){return await this._addReviewModalInvalidSingularInputErrorMsg.innerText();}

    //add review modal web element getters
    get addReviewModalBackToReviewsButton(){return this._addReviewModalBackToReviewsBtn;}
    //input field
    get addReviewModalYourNameSubtext(){return this._addReviewModalYourNameSubtext;}
    get addReviewModalYourNameInputField(){return this._addReviewModalYourNameInputField;}
    get addReviewModalYourEmailSubtext(){return this._addReviewModalYourEmailSubtext;}
    get addReviewModalYourEmailInputField(){return this._addReviewModalYourEmailInputField;}
    get addReviewModalGiveRatingSubtext(){return this._addReviewModalGiveRatingSubtext;}
    //list elements
    get addReviewModalGiveRatingStarElement(){return this._addReviewModalGiveRatingStarElements;}
    //singular elements
    get addReviewModalReviewTitleSubtext(){return this._addReviewModalReviewTitleSubtext;}
    get addReviewModalReviewTitleInputField(){return this._addReviewModalReviewTitleInputField;}
    get addReviewModalOpinionSubtext(){return this._addReviewModalOpinionSubtext;}
    get addReviewModalOpinionTextarea(){return this._addReviewModalOpinionTextarea;}
    get addReviewModalCancelButton(){return this._addReviewModalCancelButton;}
    get addReviewModalSubmitButton(){return this._addReviewModalSubmitButton;}
    //empty section
    get addReviewModalWriteReviewButton(){return this._addReviewModalWriteReviewButton;}
    get addReviewModalNoReviewsMessage(){return this._addReviewModalNoReviewMessage;}

}
export {AddReviewModal};