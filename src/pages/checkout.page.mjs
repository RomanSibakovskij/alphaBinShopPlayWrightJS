"use strict"

import {BasePage} from "./utilities/base.page.mjs";
import {CreateAccountPage} from "./create.account.page.mjs";
import {AddNewAddressModal} from "./modals/add.new.address.modal.mjs";
import {TestDataGenerator} from "./utilities/test.data.generator.mjs";
import {Logger} from "./utilities/logger.mjs";

class CheckoutPage extends BasePage{

    constructor(page) {
        super(page);

        //checkout page web element
        this._backToCartButton = page.locator("//button[@data-testid='checkout-back-to-cart-button']");
        this._checkoutPageTitle = page.locator("//h1[@data-testid='checkout-title']");
        //shipping address section
        this._checkoutPageShipAddressSectionTitle = page.locator("//h2[@data-testid='checkout-shipping-address-title']");
        this._checkoutPageShipAddressData = page.locator("//div[@class='flex justify-between items-start']/div[@class='space-y-1']");
        this._checkoutPageShipAddressChangeLink = page.locator("//div[@class='flex justify-between items-start']/button[@data-testid='checkout-change-address-button']");
        //shipping address input form elements
        this._checkoutPageShipAddressFullNameSubtext = page.locator("//label[@data-testid='checkout-first-name-label']"); // viewed as "First Name"
        this._checkoutPageShipAddressFullNameInputField = page.locator("//input[@data-testid='checkout-first-name-input']");
        this._checkoutPageShipAddressEmailSubtext = page.locator("//label[@data-testid='checkout-email-label']");
        this._checkoutPageShipAddressEmailInputField = page.locator("//input[@data-testid='checkout-email-input']");
        this._checkoutPageShipAddressCitySubtext = page.locator("//label[@data-testid='checkout-city-label']");
        this._checkoutPageShipAddressCityInputField = page.locator("//input[@data-testid='checkout-city-input']");
        this._checkoutPageShipAddressStateSubtext = page.locator("//label[@data-testid='checkout-state-label']");
        this._checkoutPageShipAddressStateInputField = page.locator("//input[@data-testid='checkout-state-input']");
        this._checkoutPageShipAddressSubtext = page.locator("//label[@data-testid='checkout-street-label']");
        this._checkoutPageShipAddressInputField = page.locator("//input[@data-testid='checkout-street-input']");
        this._checkoutPageShipAddressPostCodeSubtext = page.locator("//label[@data-testid='checkout-zip-code-label']");
        this._checkoutPageShipAddressPostCodeInputField = page.locator("//input[@data-testid='checkout-zip-code-input']");
        this._checkoutPageShipAddressCountrySubtext = page.locator("//label[@data-testid='checkout-country-label']");
        this._checkoutPageShipAddressCountryInputField = page.locator("//input[@data-testid='checkout-country-input']");
        this._checkoutPageShipAddressCancelBtn = page.locator("//button[@data-testid='checkout-cancel-button']");
        this._checkoutPageShipAddressSaveAddressBtn = page.locator("//button[@data-testid='checkout-save-address-button']");
        //payment method
        this._checkoutPagePayMethodTitle = page.locator("//h2[@data-testid='checkout-payment-method-title']");
        //list elements
        this._checkoutPagePayMethodButtonElements = page.locator("//div[@class='flex flex-wrap gap-2 mb-6']/button");
        //credit/debit card section
        this._checkoutPagePayMethodWeAcceptSubtext = page.locator("//p[@class='text-sm font-medium text-gray-700 mr-4']");
        //list elements
        this._checkoutPagePayMethodCardIconElements = page.locator("//div[@class='flex space-x-4']/img");
        this._checkoutPagePayMethodRequiredTagElements = page.locator("//span[@class='text-red-500']");
        //singular elements
        this._checkoutPagePayMethodCardNumberSubtext = page.locator("//label[@data-testid='checkout-card-number-label']");
        this._checkoutPagePayMethodCardNumberHint = page.locator("//p[@data-testid='checkout-card-number-description']");
        this._checkoutPagePayMethodCardNumberInputField = page.locator("//input[@data-testid='checkout-card-number-input']");
        this._checkoutPagePayMethodCardholderSubtext = page.locator("//label[@data-testid='checkout-cardholder-name-label']");
        this._checkoutPagePayMethodCardholderInputField = page.locator("//input[@data-testid='checkout-cardholder-name-input']");
        this._checkoutPagePayMethodExpDateSubtext = page.locator("//label[@data-testid='checkout-expiration-date-label']");
        this._checkoutPagePayMethodExpDateMonthInputField = page.locator("//input[@data-testid='checkout-expiration-date-month-input']");
        this._checkoutPagePayMethodExpDateYearInputField = page.locator("//input[@data-testid='checkout-expiration-date-year-input']");
        this._checkoutPagePayMethodCVVSubtext = page.locator("//label[@data-testid='checkout-cvv-label']");
        this._checkoutPagePayMethodCVVInputField = page.locator("//input[@data-testid='checkout-cvv-input']");
        //net banking section
        this._checkoutPageNetBankingSectionSelectBankText = page.locator("//p[@data-testid='checkout-netbanking-description']");
        //list elements
        this._checkoutPageNetBankingBankBtnElements = page.locator("//div[@class='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4']/div");
        //singular elements
        this._checkoutPageNetBankingOtherBanksDropdownBtn = page.locator("//button[@data-testid='checkout-netbanking-other-banks-button']");
        //cash delivery section
        this._checkoutPageCashOnDeliveryIcon = page.locator("//span[@class='anticon anticon-dollar text-xl mr-3 text-green-600']");
        this._checkoutPageCashOnDeliveryTitle = page.locator("//p[@data-testid='checkout-cod-title']");
        this._checkoutPageCashOnDeliveryDesc = page.locator("//p[@data-testid='checkout-cod-description']");
        this._checkoutPageCashOnDeliveryShipAddressIcon = page.locator("//span[@class='anticon anticon-home text-gray-400 mt-1 mr-2']");
        this._checkoutPageCashOnDeliveryShipAddressData = page.locator("//div[@class='flex items-start']//div[@class='space-y-1']");
        this._checkoutPageCashOnDeliveryChangeShipAddressLink = page.locator("//div[@class='flex items-start justify-between']/button[@data-testid='checkout-change-address-button']");
        //order summary section
        this._checkoutPageOrderSummarySectionTitle = page.locator("//h2[@data-testid='checkout-order-summary-title']");
        //list elements
        this._checkoutPageProductImgElements = page.locator("//img[@class='w-16 h-16 object-contain rounded-md mr-4']");
        this._checkoutPageProductNameElements = page.locator("//h3[@data-testid='checkout-product-header']");
        this._checkoutPageProductQtyElements = page.locator("//p[@data-testid='checkout-product-quantity']");
        this._checkoutPageProductUnitPriceElements = page.locator("//p[@data-testid='checkout-product-price']");
        //singular elements
        this._checkoutPageOrderSubtotalSubtext = page.locator("//span[@data-testid='checkout-subtotal-label']");
        this._checkoutPageOrderSubtotalPrice = page.locator("//span[@data-testid='checkout-subtotal-value']");
        this._checkoutPageOrderShippingSubtext = page.locator("//span[@data-testid='checkout-shipping-label']");
        this._checkoutPageOrderShippingPrice = page.locator("//span[@data-testid='checkout-shipping-value']");
        this._checkoutPageOrderTotalSubtext = page.locator("//span[@data-testid='checkout-total-label']");
        this._checkoutPageOrderTotalPrice = page.locator("//span[@data-testid='checkout-total-value']");
        //buttons
        this._checkoutPagePlaceOrderButton = page.locator("//button[@data-testid='checkout-place-order-button']");
        this._checkoutPageContinueShoppingButton = page.locator("//button[@data-testid='checkout-continue-shopping-button']");
        //invalid singular input error message
        this._checkoutPageInvalidSingularInputErrorMsg = page.locator("//p[@class='text-red-500 text-xs mt-1']");
        //general invalid input error box element
        this._checkoutPageInputErrorBox = page.locator("//div[@id='_rht_toaster']");

        const testDataGenerator = new TestDataGenerator(page);
        const createAccountPage = new CreateAccountPage(page);
        const addNewAddressModal = new AddNewAddressModal(page);

        //valid checkout shipping address input data
        this._validCheckoutShipAddressFullName = createAccountPage.validUserFullName;
        this._validCheckoutShipAddressEmail = createAccountPage.validUserEmail;
        this._validCheckoutShipAddressCity = addNewAddressModal.validAddressCity;
        this._validCheckoutShipAddressState = addNewAddressModal.validAddressState;
        this._validCheckoutShipAddress = addNewAddressModal.validAddressStreet;
        this._validCheckoutShipAddressPostCode = addNewAddressModal.validAddressPostCode;
        this._validCheckoutShipAddressCountry = addNewAddressModal.validAddressCountry;

        //valid credit/debit card input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        const { month, year } = testDataGenerator.generateRandomExpiryDate();
        this._firstName = firstName;
        this._lastName = lastName;
        this._validCreditCardNumber = "4111111111111111"; //Visa test number
        this._validCreditCardName = this._firstName + " " + this._lastName; //change later to username
        this._validCreditCardExpMonth = month;
        this._validCreditCardExpYear = year;
        this._validCreditCardCVV = testDataGenerator.generateRandomCVV();

    }

    //checkout page valid shipping address data input methods
    async inputShipAddressFullNameIntoShipAddressFullNameInputField(){
        const shipAddressFullName = this._validCheckoutShipAddressFullName;
        Logger.info("Valid user shipping address full name: " + shipAddressFullName);
        await this._checkoutPageShipAddressFullNameInputField.fill(shipAddressFullName);
    }
    async inputShipAddressEmailIntoShipAddressEmailInputField(){
        const shipAddressEmail = this._validCheckoutShipAddressEmail;
        Logger.info("Valid user shipping address email: " + shipAddressEmail);
        await this._checkoutPageShipAddressEmailInputField.fill(shipAddressEmail);
    }
    async inputShipAddressCityIntoShipAddressCityInputField(){
        const shipAddressCity = this._validCheckoutShipAddressCity;
        Logger.info("Valid user shipping address city: " + shipAddressCity);
        await this._checkoutPageShipAddressCityInputField.fill(shipAddressCity);
    }
    async inputShipAddressStateIntoShipAddressStateInputField(){
        const shipAddressState = this._validCheckoutShipAddressState;
        Logger.info("Valid user shipping address state: " + shipAddressState);
        await this._checkoutPageShipAddressStateInputField.fill(shipAddressState);
    }
    async inputShipAddressIntoShipAddressInputField(){
        const shipAddress = this._validCheckoutShipAddress;
        Logger.info("Valid user shipping address: " + shipAddress);
        await this._checkoutPageShipAddressInputField.fill(shipAddress);
    }
    async inputShipAddressPostCodeIntoShipAddressPostCodeInputField(){
        const shipAddressPostCode = this._validCheckoutShipAddressPostCode;
        Logger.info("Valid user shipping address post code: " + shipAddressPostCode);
        await this._checkoutPageShipAddressPostCodeInputField.fill(shipAddressPostCode);
    }
    async inputShipAddressCountryIntoShipAddressCountryInputField(){
        const shipAddressCountry = this._validCheckoutShipAddressCountry;
        Logger.info("Valid user shipping address country: " + shipAddressCountry);
        await this._checkoutPageShipAddressCountryInputField.fill(shipAddressCountry);
    }

    //click "Change" shipping address link method
    async clickChangeShippingAddressLink(){await this._checkoutPageShipAddressChangeLink.click();}

    //click "Save address" button method
    async clickSaveAddressBtn(){await this._checkoutPageShipAddressSaveAddressBtn.click();}

    //checkout page valid credit/debit card data input methods
    async inputCreditCardNumberIntoCreditCardNumberInputField(){
        const creditCardNumber = this._validCreditCardNumber;
        Logger.info("Valid user credit card number: " + creditCardNumber);
        await this._checkoutPagePayMethodCardNumberInputField.fill(creditCardNumber);
    }
    async inputCreditCardNameIntoCreditCardNameInputField(){
        const creditCardName = this._validCreditCardName;
        Logger.info("Valid user credit card name: " + creditCardName);
        await this._checkoutPagePayMethodCardholderInputField.fill(creditCardName);
    }
    async inputCreditCardExpMonthIntoCreditCardExpMonthInputField(){
        const creditCardExpMonth = this._validCreditCardExpMonth;
        Logger.info("Valid user credit card expiration date month: " + creditCardExpMonth);
        await this._checkoutPagePayMethodExpDateMonthInputField.fill(creditCardExpMonth);
    }
    async inputCreditCardExpYearIntoCreditCardExpYearInputField(){
        const creditCardExpYear = this._validCreditCardExpYear;
        Logger.info("Valid user credit card expiration date year: " + creditCardExpYear);
        await this._checkoutPagePayMethodExpDateYearInputField.fill(creditCardExpYear);
    }
    async inputCreditCardCVVIntoCreditCardCVVInputField(){
        const creditCardCVV = this._validCreditCardCVV;
        Logger.info("Valid user credit card CVV: " + creditCardCVV);
        await this._checkoutPagePayMethodCVVInputField.fill(creditCardCVV);
    }

    //click set payment method button method
    async clickSetPayMethodButton(index){await this._checkoutPagePayMethodButtonElements.nth(index).click();}

    //click set net banking bank button method
    async clickSetNetBankingBankButton(index){await this._checkoutPageNetBankingBankBtnElements.nth(index).click();}

    //click "Place Order" button method
    async clickPlaceOrderButton(){await this._checkoutPagePlaceOrderButton.click();}

    //checkout page data getters
    //shipping address
    async getCheckoutPageShipAddress(){return await this._checkoutPageShipAddressData.innerText();}
    //cash delivery section
    async getCheckoutPageCashOnDeliveryShipAddress(){return await this._checkoutPageCashOnDeliveryShipAddressData.innerText();}
    //order summary section
    //product table
    async getCheckoutPageProductName() {
        const elements = await this._checkoutPageProductNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getCheckoutPageProductQty() {
        const elements = await this._checkoutPageProductQtyElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getCheckoutPageProductUnitPrice() {
        const elements = await this._checkoutPageProductUnitPriceElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //order summary
    async getCheckoutPageOrderSubtotalPrice(){return await this._checkoutPageOrderSubtotalPrice.innerText();}
    async getCheckoutPageOrderShippingPrice(){return await this._checkoutPageOrderShippingPrice.innerText();}
    async getCheckoutPageOrderTotalPrice(){return await this._checkoutPageOrderTotalPrice.innerText();}

    //checkout page text element getters
    async getBackToCartBtnText(){return await this._backToCartButton.innerText();}
    async getCheckoutPageTitle(){return await this._checkoutPageTitle.innerText();}
    //shipping address section
    async getCheckoutPageShipAddressSectionTitle(){return await this._checkoutPageShipAddressSectionTitle.innerText();}
    async getCheckoutPageShipAddressChangeLinkText(){return await this._checkoutPageShipAddressChangeLink.innerText();}
    //shipping address input form section
    async getCheckoutPageShipAddressFullNameSubtext(){return await this._checkoutPageShipAddressFullNameSubtext.innerText();}
    async getCheckoutPageShipAddressEmailSubtext(){return await this._checkoutPageShipAddressEmailSubtext.innerText();}
    async getCheckoutPageShipAddressCitySubtext(){return await this._checkoutPageShipAddressCitySubtext.innerText();}
    async getCheckoutPageShipAddressStateSubtext(){return await this._checkoutPageShipAddressStateSubtext.innerText();}
    async getCheckoutPageShipAddressSubtext(){return await this._checkoutPageShipAddressSubtext.innerText();}
    async getCheckoutPageShipAddressPostCodeSubtext(){return await this._checkoutPageShipAddressPostCodeSubtext.innerText();}
    async getCheckoutPageShipAddressCountrySubtext(){return await this._checkoutPageShipAddressCountrySubtext.innerText();}
    async getCheckoutPageShipAddressCancelBtnText(){return await this._checkoutPageShipAddressCancelBtn.innerText();}
    async getCheckoutPageShipAddressSaveAddressBtnText(){return await this._checkoutPageShipAddressSaveAddressBtn.innerText();}
    //payment method
    async getCheckoutPagePayMethodTitle(){return await this._checkoutPagePayMethodTitle.innerText();}
    //list elements
    async getCheckoutPagePayMethodBtnText() {
        const elements = await this._checkoutPagePayMethodButtonElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    //credit/debit card section
    async getCheckoutPagePayMethodWeAcceptSubtext(){return await this._checkoutPagePayMethodWeAcceptSubtext.innerText();}
    async getCheckoutPagePayMethodCardNumberSubtext(){return await this._checkoutPagePayMethodCardNumberSubtext.innerText();}
    async getCheckoutPagePayMethodCardholderSubtext(){return await this._checkoutPagePayMethodCardholderSubtext.innerText();}
    async getCheckoutPagePayMethodExpDateSubtext(){return await this._checkoutPagePayMethodExpDateSubtext.innerText();}
    async getCheckoutPagePayMethodCVVSubtext(){return await this._checkoutPagePayMethodCVVSubtext.innerText();}
    //net banking section
    async getCheckoutPageNetBankingSectionSelectBankText(){return await this._checkoutPageNetBankingSectionSelectBankText.innerText();}
    async getCheckoutPageNetBankingOtherBanksDropdownBtnText(){return await this._checkoutPageNetBankingOtherBanksDropdownBtn.innerText();}
    //cash delivery section
    async getCheckoutPageCashOnDeliveryTitle(){return await this._checkoutPageCashOnDeliveryTitle.innerText();}
    async getCheckoutPageCashOnDeliveryDesc(){return await this._checkoutPageCashOnDeliveryDesc.innerText();}
    async getCheckoutPageCashOnDeliveryChangeShipAddressLink(){return await this._checkoutPageCashOnDeliveryChangeShipAddressLink.innerText();}
    //order summary section
    async getCheckoutPageOrderSummarySectionTitle(){return await this._checkoutPageOrderSummarySectionTitle.innerText();}
    async getCheckoutPageOrderSubtotalSubtext(){return await this._checkoutPageOrderSubtotalSubtext.innerText();}
    async getCheckoutPageOrderShippingSubtext(){return await this._checkoutPageOrderShippingSubtext.innerText();}
    async getCheckoutPageOrderTotalSubtext(){return await this._checkoutPageOrderTotalSubtext.innerText();}
    //buttons
    async getCheckoutPagePlaceOrderButtonText(){return await this._checkoutPagePlaceOrderButton.innerText();}
    async getCheckoutPageContinueShoppingButtonText(){return await this._checkoutPageContinueShoppingButton.innerText();}

    //invalid singular input error message getter
    async getCheckoutPageInvalidSingularInputError(){return await this._checkoutPageInvalidSingularInputErrorMsg.innerText();}

    //input error box message getter
    async getCheckoutPageInputErrorBoxMsg(){return await this._checkoutPageInputErrorBox.innerText();}

    //checkout page web element getters
    get checkoutPageBackToCartButton(){return this._backToCartButton;}
    get checkoutPageTitle(){return this._checkoutPageTitle;}
    //shipping address section
    get checkoutPageShipAddressSectionTitle(){return this._checkoutPageShipAddressSectionTitle;}
    get checkoutPageShipAddressData(){return this._checkoutPageShipAddressData;}
    get checkoutPageShipAddressChangeLink(){return this._checkoutPageShipAddressChangeLink;}
    //shipping address input form section
    get checkoutPageShipAddressFullNameSubtext(){return this._checkoutPageShipAddressFullNameSubtext;}
    get checkoutPageShipAddressFullNameInputField(){return this._checkoutPageShipAddressFullNameInputField;}
    get checkoutPageShipAddressEmailSubtext(){return this._checkoutPageShipAddressEmailSubtext;}
    get checkoutPageShipAddressEmailInputField(){return this._checkoutPageShipAddressEmailInputField;}
    get checkoutPageShipAddressCitySubtext(){return this._checkoutPageShipAddressCitySubtext;}
    get checkoutPageShipAddressCityInputField(){return this._checkoutPageShipAddressCityInputField;}
    get checkoutPageShipAddressStateSubtext(){return this._checkoutPageShipAddressStateSubtext;}
    get checkoutPageShipAddressStateInputField(){return this._checkoutPageShipAddressStateInputField;}
    get checkoutPageShipAddressSubtext(){return this._checkoutPageShipAddressSubtext;}
    get checkoutPageShipAddressInputField(){return this._checkoutPageShipAddressInputField;}
    get checkoutPageShipAddressPostCodeSubtext(){return this._checkoutPageShipAddressPostCodeSubtext;}
    get checkoutPageShipAddressPostCodeInputField(){return this._checkoutPageShipAddressPostCodeInputField;}
    get checkoutPageShipAddressCountrySubtext(){return this._checkoutPageShipAddressCountrySubtext;}
    get checkoutPageShipAddressCountryInputField(){return this._checkoutPageShipAddressCountryInputField;}
    get checkoutPageShipAddressCancelBtn(){return this._checkoutPageShipAddressCancelBtn;}
    get checkoutPageShipAddressSaveAddressBtn(){return this._checkoutPageShipAddressSaveAddressBtn;}
    //payment method
    get checkoutPagePayMethodTitle(){return this._checkoutPagePayMethodTitle;}
    //list elements
    get checkoutPagePayMethodButtonElement(){return this._checkoutPagePayMethodButtonElements;}
    //credit/debit card section
    get checkoutPagePayMethodWeAcceptSubtext(){return this._checkoutPagePayMethodWeAcceptSubtext;}
    //list elements
    get checkoutPagePayMethodCardIconElement(){return this._checkoutPagePayMethodCardIconElements;}
    get checkoutPagePayMethodRequiredTagElement(){return this._checkoutPagePayMethodRequiredTagElements;}
    //singular elements
    get checkoutPagePayMethodCardNumberSubtext(){return this._checkoutPagePayMethodCardNumberSubtext;}
    get checkoutPagePayMethodCardNumberHint(){return this._checkoutPagePayMethodCardNumberHint;}
    get checkoutPagePayMethodCardNumberInputField(){return this._checkoutPagePayMethodCardNumberInputField;}
    get checkoutPagePayMethodCardholderSubtext(){return this._checkoutPagePayMethodCardholderSubtext;}
    get checkoutPagePayMethodCardholderInputField(){return this._checkoutPagePayMethodCardholderInputField;}
    get checkoutPagePayMethodExpDateSubtext(){return this._checkoutPagePayMethodExpDateSubtext;}
    get checkoutPagePayMethodExpDateMonthInputField(){return this._checkoutPagePayMethodExpDateMonthInputField;}
    get checkoutPagePayMethodExpDateYearInputField(){return this._checkoutPagePayMethodExpDateYearInputField;}
    get checkoutPagePayMethodCVVSubtext(){return this._checkoutPagePayMethodCVVSubtext;}
    get checkoutPagePayMethodCVVInputField(){return this._checkoutPagePayMethodCVVInputField;}
    //net banking section
    get checkoutPageNetBankingSectionSelectBankText(){return this._checkoutPageNetBankingSectionSelectBankText;}
    //list elements
    get checkoutPageNetBankingBankBtnElement(){return this._checkoutPageNetBankingBankBtnElements;}
    //singular elements
    get checkoutPageNetBankingOtherBanksDropdownBtn(){return this._checkoutPageNetBankingOtherBanksDropdownBtn;}
    //cash delivery section
    get checkoutPageCashOnDeliveryIcon(){return this._checkoutPageCashOnDeliveryIcon;}
    get checkoutPageCashOnDeliveryTitle(){return this._checkoutPageCashOnDeliveryTitle;}
    get checkoutPageCashOnDeliveryDesc(){return this._checkoutPageCashOnDeliveryDesc;}
    get checkoutPageCashOnDeliveryDeliveryShipAddressIcon(){return this._checkoutPageCashOnDeliveryShipAddressIcon;}
    get checkoutPageCashOnDeliveryDeliveryShipAddressData(){return this._checkoutPageCashOnDeliveryShipAddressData;}
    get checkoutPageCashOnDeliveryDeliveryChangeShipAddressLink(){return this._checkoutPageCashOnDeliveryChangeShipAddressLink;}
    //order summary section
    get checkoutPageOrderSummarySectionTitle(){return this._checkoutPageOrderSummarySectionTitle;}
    //list elements
    get checkoutPageProductImgElement(){return this._checkoutPageProductImgElements;}
    get checkoutPageProductNameElement(){return this._checkoutPageProductNameElements;}
    get checkoutPageProductQtyElement(){return this._checkoutPageProductQtyElements;}
    get checkoutPageProductUnitPriceElement(){return this._checkoutPageProductUnitPriceElements;}
    //singular elements
    get checkoutPageOrderSubtotalSubtext(){return this._checkoutPageOrderSubtotalSubtext;}
    get checkoutPageOrderSubtotalPrice(){return this._checkoutPageOrderSubtotalPrice;}
    get checkoutPageOrderShippingSubtext(){return this._checkoutPageOrderShippingSubtext;}
    get checkoutPageOrderShippingPrice(){return this._checkoutPageOrderShippingPrice;}
    get checkoutPageOrderTotalSubtext(){return this._checkoutPageOrderTotalSubtext;}
    get checkoutPageOrderTotalPrice(){return this._checkoutPageOrderTotalPrice;}
    //buttons
    get checkoutPagePlaceOrderButton(){return this._checkoutPagePlaceOrderButton;}
    get checkoutPageContinueShoppingButton(){return this._checkoutPageContinueShoppingButton;}

}
export {CheckoutPage};