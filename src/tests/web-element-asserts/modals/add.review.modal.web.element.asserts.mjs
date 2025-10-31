//@ts-check
"use strict"

import {AddReviewModal} from "../../../pages/modals/add.review.modal.mjs";
import {expect} from "@playwright/test";

class AddReviewModalWebElementAsserts{

    //add review modal web element assert test method
    async isAddReviewModalWebElementVisible(page){
        const addReviewModal = new AddReviewModal(page);
        //assert the add review modal back to reviews button is visible
        await expect(addReviewModal.addReviewModalBackToReviewsButton).toBeVisible();
        //input field
        //assert the add review modal your name subtext is visible
        await expect(addReviewModal.addReviewModalYourNameSubtext).toBeVisible();
        //assert the add review modal your name input field is visible
        await expect(addReviewModal.addReviewModalYourNameInputField).toBeVisible();
        //assert the add review modal your email subtext is visible
        await expect(addReviewModal.addReviewModalYourEmailSubtext).toBeVisible();
        //assert the add review modal your email input field is visible
        await expect(addReviewModal.addReviewModalYourEmailInputField).toBeVisible();
        //assert the add review modal give rating subtext is visible
        await expect(addReviewModal.addReviewModalGiveRatingSubtext).toBeVisible();
        //assert the home page categories images are visible (as a list)
        const addReviewModalReviewStars = addReviewModal.addReviewModalGiveRatingStarElement;
        const addReviewModalReviewStarCount = await addReviewModalReviewStars.count();
        for (let i = 0; i < addReviewModalReviewStarCount; i++) {
            await expect(addReviewModalReviewStars.nth(i)).toBeVisible();
        }
        //assert the add review modal review title subtext is visible
        await expect(addReviewModal.addReviewModalReviewTitleSubtext).toBeVisible();
        //assert the add review modal review title input field is visible
        await expect(addReviewModal.addReviewModalReviewTitleInputField).toBeVisible();
        //assert the add review modal opinion subtext is visible
        await expect(addReviewModal.addReviewModalOpinionSubtext).toBeVisible();
        //assert the add review modal opinion text area is visible
        await expect(addReviewModal.addReviewModalOpinionTextarea).toBeVisible();
        //assert the add review modal cancel button is visible
        await expect(addReviewModal.addReviewModalCancelButton).toBeVisible();
        //assert the add review modal submit button is visible
        await expect(addReviewModal.addReviewModalSubmitButton).toBeVisible();
    }

}
export {AddReviewModalWebElementAsserts};