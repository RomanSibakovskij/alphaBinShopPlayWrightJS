"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class OrderDetailsPage extends BasePage{

    constructor(page) {
        super(page);

        //order details page web elements
        this._orderDetailsPageBackToHomeButton = page.locator("//button[@data-testid='back-to-home']");
        this._orderDetailsPageTitle = page.locator("//h1[@data-testid='order-details-title']");
        this._orderDetailsOrderIDNumber = page.locator("//span[@class='font-medium']");
        //order confirm section
        this._orderDetailsPageOrderConfirmTickIcon = page.locator("//img[@data-testid='order-placed-image']");
        this._orderDetailsPageOrderConfirmTitle = page.locator("//h2[@data-testid='order-placed-name']");
        this._orderDetailsPageOrderConfirmMessage = page.locator("//p[@data-testid='order-placed-message']");
        this._orderDetailsPageOrderDateIcon = page.locator("//span[@class='anticon anticon-clock-circle mr-2 text-gray-500']");
        this._orderDetailsPageOrderDate = page.locator("//span[@data-testid='order-placed-date']");
        //order information section
        this._orderDetailsPageOrderInfoSectionTitle = page.locator("//h3[@data-testid='order-information-title']");
        this._orderDetailsPageOrderInfoOrderConfirmMsgTitle = page.locator("//h3[@data-testid='order-confirmed-title']");
        this._orderDetailsPageOrderInfoOrderConfirmMsg = page.locator("//p[@data-testid='order-confirmed-message']");
        //shipping details section
        this._orderDetailsPageOrderInfoShipDetailsSectionTitle = page.locator("//h3[@data-testid='shipping-details-title']");
        this._orderDetailsPageOrderInfoShipDetailsEmailIcon = page.locator("//span[@class='anticon anticon-mail text-gray-400 mt-1 mr-3']");
        this._orderDetailsPageOrderInfoShipDetailsEmailSubtext = page.locator("//p[@data-testid='shipping-email-label']");
        this._orderDetailsPageOrderInfoShipDetailsEmail = page.locator("//p[@data-testid='shipping-email-value']");
        this._orderDetailsPageOrderInfoShipDetailsPayMethodIcon = page.locator("//span[@class='anticon anticon-credit-card text-gray-400 mt-1 mr-3']");
        this._orderDetailsPageOrderInfoShipDetailsPayMethodSubtext = page.locator("//p[@data-testid='payment-method-label']");
        this._orderDetailsPageOrderInfoShipDetailsPayMethod = page.locator("//div[@class='font-dmsans text-gray-900']");
        this._orderDetailsPageOrderInfoShipDetailsDeliveryAddressIcon = page.locator("//span[@class='anticon anticon-home text-gray-400 mt-1 mr-3']");
        this._orderDetailsPageOrderInfoShipDetailsDeliveryAddressSubtext = page.locator("//p[@data-testid='delivery-address-label']");
        this._orderDetailsPageOrderInfoShipDetailsDeliveryAddress = page.locator("//p[@data-testid='delivery-address-value']");
        this._orderDetailsPageOrderInfoContinueShoppingBtn = page.locator("//button[@data-testid='continue-shopping-button']");
        //order summary section
        this._orderDetailsPageOrderSummaryTitle = page.locator("//h3[@data-testid='order-summary-title']");
        //product table
        this._orderDetailsPageOrderProductImgElements = page.locator("//img[@class='w-20 h-20 object-cover rounded border border-gray-100']");
        this._orderDetailsPageOrderProductNameElements = page.locator("//p[@data-testid='order-item-name']");
        this._orderDetailsPageOrderProductQtyElements = page.locator("//p[@data-testid='order-item-quantity']");
        this._orderDetailsPageOrderProductPriceElements = page.locator("//p[@data-testid='order-item-price']");
        //summary
        this._orderDetailsPageOrderSummarySubtotalSubtext = page.locator("//p[@data-testid='subtotal-label']");
        this._orderDetailsPageOrderSummarySubtotalPrice = page.locator("//p[@data-testid='subtotal-value']");
        this._orderDetailsPageOrderSummaryShippingSubtext = page.locator("//p[@data-testid='shipping-label']");
        this._orderDetailsPageOrderSummaryShippingPrice = page.locator("//p[@data-testid='shipping-value']");
        this._orderDetailsPageOrderSummaryTotalSubtext = page.locator("//p[@data-testid='total-label']");
        this._orderDetailsPageOrderSummaryTotalPrice = page.locator("//p[@data-testid='total-value']");

    }

    //order details page order data getters
    async getOrderDetailsPageOrderIDNumber(){return await this._orderDetailsOrderIDNumber.innerText();}
    async getOrderDetailsPageOrderDate(){return await this._orderDetailsPageOrderDate.innerText();}
    //shipping details section
    async getOrderDetailsPageOrderInfoShipDetailsEmail(){return await this._orderDetailsPageOrderInfoShipDetailsEmail.innerText();}
    async getOrderDetailsPageOrderInfoShipDetailsPayMethod(){return await this._orderDetailsPageOrderInfoShipDetailsPayMethod.innerText();}
    async getOrderDetailsPageOrderInfoShipDetailsDeliveryAddress(){return await this._orderDetailsPageOrderInfoShipDetailsDeliveryAddress.innerText();}
    //product table (list elements)
    async getOrderDetailsPageProductName() {
        const elements = await this._orderDetailsPageOrderProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getOrderDetailsPageProductQty() {
        const elements = await this._orderDetailsPageOrderProductQtyElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getOrderDetailsPageProductPrice() {
        const elements = await this._orderDetailsPageOrderProductPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //summary
    async getOrderDetailsPageOrderSummarySubtotalPrice(){return await this._orderDetailsPageOrderSummarySubtotalPrice.innerText();}
    async getOrderDetailsPageOrderSummaryShippingPrice(){return await this._orderDetailsPageOrderSummaryShippingPrice.innerText();}
    async getOrderDetailsPageOrderSummaryTotalPrice(){return await this._orderDetailsPageOrderSummaryTotalPrice.innerText();}

    //order details page text element getters
    async getOrderDetailsPageBackToHomeBtnText(){return await this._orderDetailsPageBackToHomeButton.innerText();}
    async getOrderDetailsPageTitle(){return await this._orderDetailsPageTitle.innerText();}
    //order confirm section
    async getOrderDetailsPageOrderConfirmTitle(){
        const text = await this._orderDetailsPageOrderConfirmTitle.innerText();
        return text.split(',')[0].trim();
    }
    async getOrderDetailsPageOrderConfirmMessage(){return await this._orderDetailsPageOrderConfirmMessage.innerText();}
    //order information section
    async getOrderDetailsPageOrderInfoSectionTitle(){return await this._orderDetailsPageOrderInfoSectionTitle.innerText();}
    async getOrderDetailsPageOrderInfoOrderConfirmTitle(){return await this._orderDetailsPageOrderInfoOrderConfirmMsgTitle.innerText();}
    async getOrderDetailsPageOrderInfoOrderConfirmMsg(){return await this._orderDetailsPageOrderInfoOrderConfirmMsg.innerText();}
    //shipping details section
    async getOrderDetailsPageShippingDetailsSectionTitle(){return await this._orderDetailsPageOrderInfoShipDetailsSectionTitle.innerText();}
    async getOrderDetailsPageShippingDetailsEmailSubtext(){return await this._orderDetailsPageOrderInfoShipDetailsEmailSubtext.innerText();}
    async getOrderDetailsPageShippingDetailsPayMethodSubtext(){return await this._orderDetailsPageOrderInfoShipDetailsPayMethodSubtext.innerText();}
    async getOrderDetailsPageShippingDetailsDeliveryAddressSubtext(){return await this._orderDetailsPageOrderInfoShipDetailsDeliveryAddressSubtext.innerText();}
    async getOrderDetailsPageContinueShoppingBtnText(){return await this._orderDetailsPageOrderInfoContinueShoppingBtn.innerText();}
    //order summary section
    async getOrderDetailsPageOrderSummarySectionTitle(){return await this._orderDetailsPageOrderSummaryTitle.innerText();}
    //summary
    async getOrderDetailsPageOrderSummarySubtotalSubtext(){return await this._orderDetailsPageOrderSummarySubtotalSubtext.innerText();}
    async getOrderDetailsPageOrderSummaryShippingSubtext(){return await this._orderDetailsPageOrderSummaryShippingSubtext.innerText();}
    async getOrderDetailsPageOrderSummaryTotalSubtext(){return await this._orderDetailsPageOrderSummaryTotalSubtext.innerText();}

    //order details page web element getters
    get orderDetailsPageBackToHomeBtn(){return this._orderDetailsPageBackToHomeButton;}
    get orderDetailsPageTitle(){return this._orderDetailsPageTitle;}
    get orderDetailsOrderIDNumber(){return this._orderDetailsOrderIDNumber;}
    //order confirm section
    get orderDetailsPageOrderConfirmTickIcon(){return this._orderDetailsPageOrderConfirmTickIcon;}
    get orderDetailsPageOrderConfirmTitle(){return this._orderDetailsPageOrderConfirmTitle;}
    get orderDetailsPageOrderConfirmMessage(){return this._orderDetailsPageOrderConfirmMessage;}
    get orderDetailsPageOrderDateIcon(){return this._orderDetailsPageOrderDateIcon;}
    get orderDetailsPageOrderDate(){return this._orderDetailsPageOrderDate;}
    //order information section
    get orderDetailsPageOrderInfoSectionTitle(){return this._orderDetailsPageOrderInfoSectionTitle;}
    get orderDetailsPageOrderInfoOrderConfirmMsgTitle(){return this._orderDetailsPageOrderInfoOrderConfirmMsgTitle;}
    get orderDetailsPageOrderInfoOrderConfirmMsg(){return this._orderDetailsPageOrderInfoOrderConfirmMsg;}
    //shipping details section
    get orderDetailsPageOrderInfoShipDetailsSectionTitle(){return this._orderDetailsPageOrderInfoShipDetailsSectionTitle;}
    get orderDetailsPageOrderInfoShipDetailsEmailIcon(){return this._orderDetailsPageOrderInfoShipDetailsEmailIcon;}
    get orderDetailsPageOrderInfoShipDetailsEmailSubtext(){return this._orderDetailsPageOrderInfoShipDetailsEmailSubtext;}
    get orderDetailsPageOrderInfoShipDetailsEmail(){return this._orderDetailsPageOrderInfoShipDetailsEmail;}
    get orderDetailsPageOrderInfoShipDetailsPayMethodIcon(){return this._orderDetailsPageOrderInfoShipDetailsPayMethodIcon;}
    get orderDetailsPageOrderInfoShipDetailsPayMethodSubtext(){return this._orderDetailsPageOrderInfoShipDetailsPayMethodSubtext;}
    get orderDetailsPageOrderInfoShipDetailsPayMethod(){return this._orderDetailsPageOrderInfoShipDetailsPayMethod;}
    get orderDetailsPageOrderInfoShipDetailsDeliveryAddressIcon(){return this._orderDetailsPageOrderInfoShipDetailsDeliveryAddressIcon;}
    get orderDetailsPageOrderInfoShipDetailsDeliveryAddressSubtext(){return this._orderDetailsPageOrderInfoShipDetailsDeliveryAddressSubtext;}
    get orderDetailsPageOrderInfoShipDetailsDeliveryAddress(){return this._orderDetailsPageOrderInfoShipDetailsDeliveryAddress;}
    get orderDetailsPageOrderInfoContinueShoppingBtn(){return this._orderDetailsPageOrderInfoContinueShoppingBtn;}
    //order summary section
    get orderDetailsPageOrderSummaryTitle(){return this._orderDetailsPageOrderSummaryTitle;}
    //product table
    get orderDetailsPageOrderProductImgElement(){return this._orderDetailsPageOrderProductImgElements;}
    get orderDetailsPageOrderProductNameElement(){return this._orderDetailsPageOrderProductNameElements;}
    get orderDetailsPageOrderProductQtyElement(){return this._orderDetailsPageOrderProductQtyElements;}
    get orderDetailsPageOrderProductPriceElement(){return this._orderDetailsPageOrderProductPriceElements;}
    //summary
    get orderDetailsPageOrderSummarySubtotalSubtext(){return this._orderDetailsPageOrderSummarySubtotalSubtext;}
    get orderDetailsPageOrderSummarySubtotalPrice(){return this._orderDetailsPageOrderSummarySubtotalPrice;}
    get orderDetailsPageOrderSummaryShippingSubtext(){return this._orderDetailsPageOrderSummaryShippingSubtext;}
    get orderDetailsPageOrderSummaryShippingPrice(){return this._orderDetailsPageOrderSummaryShippingPrice;}
    get orderDetailsPageOrderSummaryTotalSubtext(){return this._orderDetailsPageOrderSummaryTotalSubtext;}
    get orderDetailsPageOrderSummaryTotalPrice(){return this._orderDetailsPageOrderSummaryTotalPrice;}

}
export {OrderDetailsPage};