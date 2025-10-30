"use strict"

import {BasePage} from "../../utilities/base.page.mjs";

class AddNewAddressModalInvalidScenarios extends BasePage{

    constructor(page) {
        super(page);

        //relevant web elements
        this._addNewAddressModalFullNameInputField = page.locator("//input[@data-testid='first-name-input']");
        this._addNewAddressModalEmailInputField = page.locator("//input[@data-testid='email-input']");
        this._addNewAddressModalStreetInputField = page.locator("//input[@data-testid='street-address-input']");
        this._addNewAddressModalCityInputField = page.locator("//input[@data-testid='city-input']");
        this._addNewAddressModalStateInputField = page.locator("//input[@data-testid='state-input']");
        this._addNewAddressModalCountryInputField = page.locator("//input[@data-testid='country-input']");
        this._addNewAddressModalPostCodeInputField = page.locator("//input[@data-testid='zip-code-input']");

    }

    

}
export {AddNewAddressModalInvalidScenarios};