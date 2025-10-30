"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class AddNewAddressModal extends BasePage{

    constructor(page) {
        super(page);

        //add new address modal web elements
        this._addNewAddressModalTitle = page.locator("//h2[@class='text-xl font-bold']"); //update address is the same element but different text
        this._addNewAddressModalCancelButton = page.locator("//button[@data-testid='cancel-address-button']");
        this._addNewAddressModalSaveAddressButton = page.locator("//button[@data-testid='save-address-button']"); //update address is the same button but with different text
        //input form
        this._addNewAddressModalFullNameSubtext = page.locator("//label[@data-testid='first-name-label']"); //it's named as "First Name"
        this._addNewAddressModalFullNameInputField = page.locator("//input[@data-testid='first-name-input']");
        this._addNewAddressModalEmailSubtext = page.locator("//label[@data-testid='email-label']");
        this._addNewAddressModalEmailInputField = page.locator("//input[@data-testid='email-input']");
        this._addNewAddressModalStreetSubtext = page.locator("//label[@data-testid='street-address-label']");
        this._addNewAddressModalStreetInputField = page.locator("//input[@data-testid='street-address-input']");
        this._addNewAddressModalCitySubtext = page.locator("//label[@data-testid='city-label']");
        this._addNewAddressModalCityInputField = page.locator("//input[@data-testid='city-input']");
        this._addNewAddressModalStateSubtext = page.locator("//label[@data-testid='state-label']");
        this._addNewAddressModalStateInputField = page.locator("//input[@data-testid='state-input']");
        this._addNewAddressModalCountrySubtext = page.locator("//label[@data-testid='country-label']");
        this._addNewAddressModalCountryInputField = page.locator("//input[@data-testid='country-input']");
        this._addNewAddressModalPostCodeSubtext = page.locator("//label[@data-testid='zip-code-label']");
        this._addNewAddressModalPostCodeInputField = page.locator("//input[@data-testid='zip-code-input']");
        //list elements
        this._addNewAddressModalRequiredTagElements = page.locator("//span[@class='text-red-500']");
        //singular elements
        this._addNewAddressModalInformationIcon = page.locator("//span[@class='anticon anticon-exclamation-circle mr-2']"); //update page has the same element
        this._addNewAddressModalRequiredTagInfoText = page.locator("//p[@data-testid='required-fields-message']"); //update page has the same element
        //invalid singular input error message
        this._addNewAddressModalInvalidSingularInputError = page.locator("//p[@class='mt-1 text-sm text-red-500']");
        //invalid credentials error box
        this._addNewAddressModalInvalidCredentialsErrorMsg = page.locator("//div[@id='_rht_toaster']");

    }

    //add new address modal text element getters
    async getAddNewAddressModalTitle(){return await this._addNewAddressModalTitle.innerText();}
    async getAddNewAddressModalCancelBtnText(){return await this._addNewAddressModalCancelButton.innerText();}
    async getAddNewAddressModalSaveAddressBtnText(){return await this._addNewAddressModalSaveAddressButton.innerText();}
    //input form
    async getAddNewAddressModalFullNameSubtext(){return await this._addNewAddressModalFullNameSubtext.innerText();}
    async getAddNewAddressModalEmailSubtext(){return await this._addNewAddressModalEmailSubtext.innerText();}
    async getAddNewAddressModalStreetSubtext(){return await this._addNewAddressModalStreetSubtext.innerText();}
    async getAddNewAddressModalCitySubtext(){return await this._addNewAddressModalCitySubtext.innerText();}
    async getAddNewAddressModalStateSubtext(){return await this._addNewAddressModalStateSubtext.innerText();}
    async getAddNewAddressModalCountrySubtext(){return await this._addNewAddressModalCountrySubtext.innerText();}
    async getAddNewAddressModalPostCodeSubtext(){return await this._addNewAddressModalPostCodeSubtext.innerText();}
    async getAddNewAddressModalRequiredTagInfoText(){return await this._addNewAddressModalRequiredTagInfoText.innerText();}

    //invalid singular input error message getter
    async getAddNewAddressModalInvalidSingularInputErrorMsg(){return await this._addNewAddressModalInvalidSingularInputError.innerText();}
    //invalid credentials error message getter
    async getAddNewAddressModalInvalidCredentialsInputErrorMsg(){return await this._addNewAddressModalInvalidCredentialsErrorMsg.innerText();}

    //add new address modal web element getters
    get addNewAddressModalTitle(){return this._addNewAddressModalTitle;}
    get addNewAddressModalCancelButton(){return this._addNewAddressModalCancelButton;}
    get addNewAddressModalSaveAddressButton(){return this._addNewAddressModalSaveAddressButton;}
    //input form
    get addNewAddressModalFullNameSubtext(){return this._addNewAddressModalFullNameSubtext;}
    get addNewAddressModalFullNameInputField(){return this._addNewAddressModalFullNameInputField;}
    get addNewAddressModalEmailSubtext(){return this._addNewAddressModalEmailSubtext;}
    get addNewAddressModalEmailInputField(){return this._addNewAddressModalEmailInputField;}
    get addNewAddressModalStreetSubtext(){return this._addNewAddressModalStreetSubtext;}
    get addNewAddressModalStreetInputField(){return this._addNewAddressModalStreetInputField;}
    get addNewAddressModalCitySubtext(){return this._addNewAddressModalCitySubtext;}
    get addNewAddressModalCityInputField(){return this._addNewAddressModalCityInputField;}
    get addNewAddressModalStateSubtext(){return this._addNewAddressModalStateSubtext;}
    get addNewAddressModalStateInputField(){return this._addNewAddressModalStateInputField;}
    get addNewAddressModalCountrySubtext(){return this._addNewAddressModalCountrySubtext;}
    get addNewAddressModalCountryInputField(){return this._addNewAddressModalCountryInputField;}
    get addNewAddressModalPostCodeSubtext(){return this._addNewAddressModalPostCodeSubtext;}
    get addNewAddressModalPostCodeInputField(){return this._addNewAddressModalPostCodeInputField;}
    //list elements
    get addNewAddressModalRequiredTagElement(){return this._addNewAddressModalRequiredTagElements;}
    //singular elements
    get addNewAddressModalInformationIcon(){return this._addNewAddressModalInformationIcon;}
    get addNewAddressModalRequiredTagInfoText(){return this._addNewAddressModalRequiredTagInfoText;}

}
export {AddNewAddressModal}