"use strict"

import {AddReviewModal} from "../../../pages/modals/add.review.modal.mjs";
import {expect} from "@playwright/test";

class AddReviewModalTextElementAsserts{

    //add review modal text element assert test method
    async isAddReviewModalTextElementAsExpected(page){
        const addReviewModal = new AddReviewModal(page);
        //assert the add review modal back to reviews button text is as expected
        const addReviewModalBackToReviewsBtnText = await addReviewModal.getAddReviewModalBackToReviewsBtnText();
        expect(addReviewModalBackToReviewsBtnText).toBe("Back to Reviews");
        //input form
        //assert the add review modal your name subtext is as expected
        const addReviewModalYourNameSubtext = await addReviewModal.getAddReviewModalYourNameSubtext();
        expect(addReviewModalYourNameSubtext).toBe("Your Name");
        //assert the add review modal your email subtext is as expected
        const addReviewModalYourEmailSubtext = await addReviewModal.getAddReviewModalYourEmailSubtext();
        expect(addReviewModalYourEmailSubtext).toBe("Your Email");
        //assert the add review modal give rating subtext is as expected
        const addReviewModalGiveRatingSubtext = await addReviewModal.getAddReviewModalGiveRatingSubtext();
        expect(addReviewModalGiveRatingSubtext).toBe("Give Rating:");
        //assert the add review modal review title subtext is as expected
        const addReviewModalReviewTitleSubtext = await addReviewModal.getAddReviewModalReviewTitleSubtext();
        expect(addReviewModalReviewTitleSubtext).toBe("Review Title");
        //assert the add review modal opinion subtext is as expected
        const addReviewModalOpinionSubtext = await addReviewModal.getAddReviewModalOpinionSubtext();
        expect(addReviewModalOpinionSubtext).toBe("Give us your opinion");
        //assert the add review modal cancel button text is as expected
        const addReviewModalCancelBtnText = await addReviewModal.getAddReviewModalCancelBtnText();
        expect(addReviewModalCancelBtnText).toBe("Cancel");
        //assert the add review modal submit button text is as expected
        const addReviewModalSubmitBtnText = await addReviewModal.getAddReviewModalSubmitBtnText();
        expect(addReviewModalSubmitBtnText).toBe("Submit");
    }

}
export {AddReviewModalTextElementAsserts};