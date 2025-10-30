"use strict"

import {BasePage} from "../utilities/base.page.mjs";

class AddressesDashboardModal extends BasePage{

    constructor(page) {
        super(page);

        //addresses dashboard modal web elements
        this._addressesDashModalIcon = page.locator("//span[@class='anticon anticon-home mr-2']");
        this._addressesDashModalTitle = page.locator("//h2[@data-testid='my-addresses-title']");
        this._addressesDashModalAddNewAddressButton = page.locator("//button[@data-testid='add-new-address-button']");
        //addresses dashboard section (no addresses)
        this._addressesDashModalAddressIcon = page.locator("//span[@class='anticon anticon-environment']");
        this._addressesDashModalNoAddressTitle = page.locator("//h3[@data-testid='no-addresses-found-title']");
        this._addressesDashModalNoAddressSubtext = page.locator("//p[@data-testid='no-addresses-found-description']");
        this._addressesDashModalAddFirstAddressButton = page.locator("//button[@data-testid='add-your-first-address-button']");
        //addresses dashboard section (list elements)
        this._addressesDashModalAddressFullNameElements = page.locator("//h3[@data-testid='address-name']");
        this._addressesDashModalEditAddressBtnElements = page.locator("//button[@data-testid='edit-address-button']");
        this._addressesDashModalDeleteAddressBtnElements = page.locator("//button[@data-testid='delete-address-button']");
        this._addressesDashModalAddressIconElements = page.locator("//p[@data-testid='address-details']/span[@role='img']");
        this._addressesDashModalAddressDataElements = page.locator("//p[@data-testid='address-details']/span[2]");
        this._addressesDashModalAddressEmailElements = page.locator("//p[@class='text-gray-500 text-sm']");

    }

    //click "Add New Address" button method
    async clickAddNewAddressButton(){await this._addressesDashModalAddNewAddressButton.click();}

    //click set "Edit Address" button method
    async clickSetEditAddressButton(index){await this._addressesDashModalEditAddressBtnElements.nth(index).click();}

    //addresses dashboard address data element getters
    async getAddressesDashboardModalAddressFullName(){
        const elements = await this._addressesDashModalAddressFullNameElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getAddressesDashboardModalAddressData(){
        const elements = await this._addressesDashModalAddressDataElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }
    async getAddressesDashboardModalAddressEmail(){
        const elements = await this._addressesDashModalAddressEmailElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //addresses dashboard modal text element getters
    async getAddressesDashboardModalTitle(){return await this._addressesDashModalTitle.innerText();}
    async getAddressesDashboardModalAddNewAddressBtnText(){return await this._addressesDashModalAddNewAddressButton.innerText();}
    async getAddressesDashboardModalNoAddressTitle(){return await this._addressesDashModalNoAddressTitle.innerText();}
    async getAddressesDashboardModalNoAddressSubtxt(){return await this._addressesDashModalNoAddressSubtext.innerText();}
    async getAddressesDashboardModalAddFirstAddressBtnText(){return await this._addressesDashModalAddFirstAddressButton.innerText();}

    //addresses dashboard modal web element getters
    get addressesDashboardModalIcon(){return this._addressesDashModalIcon;}
    get addressesDashboardModalTitle(){return this._addressesDashModalTitle;}
    get addressesDashboardModalAddNewAddressButton(){return this._addressesDashModalAddNewAddressButton;}
    //address dashboard section (no address)
    get addressesDashboardModalAddressIcon(){return this._addressesDashModalAddressIcon;}
    get addressesDashboardModalNoAddressTitle(){return this._addressesDashModalNoAddressTitle;}
    get addressesDashboardModalNoAddressSubtext(){return this._addressesDashModalNoAddressSubtext;}
    get addressesDashboardModalAddFirstAddressButton(){return this._addressesDashModalAddFirstAddressButton;}
    //addresses dashboard section (list elements)
    get addressesDashboardModalAddressFullNameElement(){return this._addressesDashModalAddressFullNameElements;}
    get addressesDashboardModalEditAddressBtnElement(){return this._addressesDashModalEditAddressBtnElements;}
    get addressesDashboardModalDeleteAddressBtnElement(){return this._addressesDashModalDeleteAddressBtnElements;}
    get addressesDashboardModalAddressIconElement(){return this._addressesDashModalAddressIconElements;}
    get addressesDashboardModalAddressDataElement(){return this._addressesDashModalAddressDataElements;}
    get addressesDashboardModalAddressEmailElement(){return this._addressesDashModalAddressEmailElements;}

}
export {AddressesDashboardModal};