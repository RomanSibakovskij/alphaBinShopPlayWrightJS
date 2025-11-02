"use strict"

import {MyOrdersModal} from "../../../pages/modals/my.orders.modal.mjs";
import {expect} from "@playwright/test";

class MyOrdersModalTextElementAsserts {

    //my orders modal text element assert test method
    async isMyOrdersModalTextElementAsExpected(page){
        const myOrdersModal = new MyOrdersModal(page);
        //assert the my orders modal title is as expected
        const myOrdersModalTitle = await myOrdersModal.getMyOrderModalTitle();
        expect(myOrdersModalTitle).toBe("My Orders");
        //list elements
        //assert the my orders modal view buttons texts are as expected (as a list)
        const myOrdersModalViewBtnTexts = await myOrdersModal.getMyOrderModalOrderProductViewBtnText();
        expect(myOrdersModalViewBtnTexts.length).toBeGreaterThan(0);
        myOrdersModalViewBtnTexts.forEach(text => {
            expect(text).toBe("View");
        });
        //assert the my orders modal cancel buttons texts are as expected (as a list)
        const myOrdersModalCancelBtnTexts = await myOrdersModal.getMyOrderModalOrderProductCancelBtnText();
        expect(myOrdersModalCancelBtnTexts.length).toBeGreaterThan(0);
        myOrdersModalCancelBtnTexts.forEach(text => {
            expect(text).toBe("Cancel");
        });
    }

    //my orders modal (cancel pop-up) text element assert test method
    async isMyOrdersModalCancelPopUpTextElementAsExpected(page){
        const myOrdersModal = new MyOrdersModal(page);
        //assert the my orders modal cancel pop-up title is as expected
        const myOrdersModalPopUpTitle = await myOrdersModal.getMyOrderModalPopUpTitle();
        expect(myOrdersModalPopUpTitle).toBe("Cancel Order");
        //assert the my orders modal cancel pop-up description is as expected
        const myOrdersModalPopUpDesc = await myOrdersModal.getMyOrderModalPopUpDesc();
        expect(myOrdersModalPopUpDesc).toBe("Are you sure you want to cancel this order? This action cannot be undone.");
        //assert the my orders modal cancel pop-up abort button text is as expected
        const myOrdersModalPopUpAbortBtnText = await myOrdersModal.getMyOrderModalPopUpAbortBtnText();
        expect(myOrdersModalPopUpAbortBtnText).toBe("No, Keep Order");
        //assert the my orders modal cancel pop-up cancel order button text is as expected
        const myOrdersModalPopUpCancelBtnText = await myOrdersModal.getMyOrderModalPopUpCancelOrderBtnText();
        expect(myOrdersModalPopUpCancelBtnText).toBe("Yes, Cancel Order");
    }

    //my orders modal (empty) text element assert test method
    async isEmptyMyOrdersModalTextElementAsExpected(page){
        const myOrdersModal = new MyOrdersModal(page);
        //assert the my orders empty modal title is as expected
        const myOrdersEmptyModalTitle = await myOrdersModal.getMyOrderEmptyModalTitle();
        expect(myOrdersEmptyModalTitle).toBe("No orders found");
        //assert the my orders empty modal description is as expected
        const myOrdersEmptyModalDesc = await myOrdersModal.getMyOrderEmptyModalDesc();
        expect(myOrdersEmptyModalDesc).toBe("You haven't placed any orders yet. Start shopping to see your orders here.");
        //assert the my orders empty modal start shopping button text is as expected
        const myOrdersEmptyModalStartShoppingBtnText = await myOrdersModal.getMyOrderEmptyModalStartShoppingBtnText();
        expect(myOrdersEmptyModalStartShoppingBtnText).toBe("Start Shopping");
    }

}
export {MyOrdersModalTextElementAsserts};