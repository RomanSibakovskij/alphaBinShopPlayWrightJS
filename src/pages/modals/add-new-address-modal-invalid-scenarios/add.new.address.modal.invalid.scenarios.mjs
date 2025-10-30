"use strict"

import {BasePage} from "../../utilities/base.page.mjs";
import {TestDataGenerator} from "../../utilities/test.data.generator.mjs";
import {Logger} from "../../utilities/logger.mjs";

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

        const testDataGenerator = new TestDataGenerator(page);

        //invalid user address input data - no singular input
        this._noAddressFullName = "";
        this._noAddressEmail = "";
        this._noAddressStreet = "";
        this._noAddressCity = "";
        this._noAddressState = "";
        this._noAddressCountry = "";
        this._noAddressPostCode = "";

        //invalid user address input data - too short singular input
        this._tooShortAddressFullName = "R S"; //3 chars
        this._tooShortAddressEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); // 1 char -> name, domain
        this._tooShortAddressStreet = "4 F"; //3 chars
        this._tooShortAddressCity = "X"; // 1 char
        this._tooShortAddressState = "W"; // 1 char
        this._tooShortAddressCountry = "C"; // 1 char
        this._tooShortAddressPostCode = 4536; // 4 digits

        //invalid user address input data - too long singular input
        this._tooLongAddressFullName = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg Rsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 201 chars
        this._tooLongAddressEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); // 100 chars -> name, domain
        this._tooLongAddressStreet = testDataGenerator.generateRandomAddress(94); // 100 chars
        this._tooLongAddressCity = "Fsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars
        this._tooLongAddressState = "Gsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars
        this._tooLongAddressCountry = "Ssdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; // 100 chars
        this._tooLongAddressPostCode = 564553; // 6 digits

        //invalid user address input data - invalid singular input format
        this._invalidAddressFullNameFormat = "@#$@#% #$%$%"; // special symbols only
        this._invalidAddressEmailFormat = "dfgdgfakemail.com"; // missing '@'
        this._invalidAddressStreetFormat = "@#$%$#^$%&"; // special symbols only
        this._invalidAddressCityFormat = "@$##$%^%"; // special symbols only
        this._invalidAddressStateFormat = "#%$$^"; // special symbols only
        this._invalidAddressCountryFormat = "#%$$&"; // special symbols only

    }

    //invalid new address data input methods - no singular input
    async inputNoNewAddressFullNameIntoFullNameInputField(){
        const noNewAddressFullName = this._noAddressFullName;
        Logger.info("No new user address full name: " + noNewAddressFullName);
        await this._addNewAddressModalFullNameInputField.fill(noNewAddressFullName);
    }
    async inputNoNewAddressEmailIntoEmailInputField(){
        const noNewAddressEmail = this._noAddressEmail;
        Logger.info("No new user address email: " + noNewAddressEmail);
        await this._addNewAddressModalEmailInputField.fill(noNewAddressEmail);
    }
    async inputNoNewAddressStreetIntoStreetInputField(){
        const noNewAddressStreet = this._noAddressStreet;
        Logger.info("No new user address street: " + noNewAddressStreet);
        await this._addNewAddressModalStreetInputField.fill(noNewAddressStreet);
    }
    async inputNoNewAddressCityIntoCityInputField(){
        const noNewAddressCity = this._noAddressCity;
        Logger.info("No new user address city: " + noNewAddressCity);
        await this._addNewAddressModalCityInputField.fill(noNewAddressCity);
    }
    async inputNoNewAddressStateIntoStateInputField(){
        const noNewAddressState = this._noAddressState;
        Logger.info("No new user address state: " + noNewAddressState);
        await this._addNewAddressModalStateInputField.fill(noNewAddressState);
    }
    async inputNoNewAddressCountryIntoCountryInputField(){
        const noNewAddressCountry = this._noAddressCountry;
        Logger.info("No new user address country: " + noNewAddressCountry);
        await this._addNewAddressModalCountryInputField.fill(noNewAddressCountry);
    }
    async inputNoNewAddressPostCodeIntoPostCodeInputField(){
        const noNewAddressPostCode = this._noAddressPostCode;
        Logger.info("No new user address post code: " + noNewAddressPostCode);
        await this._addNewAddressModalPostCodeInputField.fill(noNewAddressPostCode);
    }

    //invalid new address data input methods - too short singular input
    async inputTooShortNewAddressFullNameIntoFullNameInputField(){
        const tooShortNewAddressFullName = this._tooShortAddressFullName;
        Logger.info("Too short new user address full name: " + tooShortNewAddressFullName);
        await this._addNewAddressModalFullNameInputField.fill(tooShortNewAddressFullName);
    }
    async inputTooShortNewAddressEmailIntoEmailInputField(){
        const tooShortNewAddressEmail = this._tooShortAddressEmail;
        Logger.info("Too short new user address email: " + tooShortNewAddressEmail);
        await this._addNewAddressModalEmailInputField.fill(tooShortNewAddressEmail);
    }
    async inputTooShortNewAddressStreetIntoStreetInputField(){
        const tooShortNewAddressStreet = this._tooShortAddressStreet;
        Logger.info("Too short new user address street: " + tooShortNewAddressStreet);
        await this._addNewAddressModalStreetInputField.fill(tooShortNewAddressStreet);
    }
    async inputTooShortNewAddressCityIntoCityInputField(){
        const tooShortNewAddressCity = this._tooShortAddressCity;
        Logger.info("Too short new user address city: " + tooShortNewAddressCity);
        await this._addNewAddressModalCityInputField.fill(tooShortNewAddressCity);
    }
    async inputTooShortNewAddressStateIntoStateInputField(){
        const tooShortNewAddressState = this._tooShortAddressState;
        Logger.info("Too short new user address state: " + tooShortNewAddressState);
        await this._addNewAddressModalStateInputField.fill(tooShortNewAddressState);
    }
    async inputTooShortNewAddressCountryIntoCountryInputField(){
        const tooShortNewAddressCountry = this._tooShortAddressCountry;
        Logger.info("Too short new user address country: " + tooShortNewAddressCountry);
        await this._addNewAddressModalCountryInputField.fill(tooShortNewAddressCountry);
    }
    async inputTooShortNewAddressPostCodeIntoPostCodeInputField(){
        const tooShortNewAddressPostCode = this._tooShortAddressPostCode;
        Logger.info("Too short new user address post code: " + tooShortNewAddressPostCode);
        await this._addNewAddressModalPostCodeInputField.fill(String(tooShortNewAddressPostCode));
    }

    //invalid new address data input methods - too long singular input
    async inputTooLongNewAddressFullNameIntoFullNameInputField(){
        const tooLongNewAddressFullName = this._tooLongAddressFullName;
        Logger.info("Too long new user address full name: " + tooLongNewAddressFullName);
        await this._addNewAddressModalFullNameInputField.fill(tooLongNewAddressFullName);
    }
    async inputTooLongNewAddressEmailIntoEmailInputField(){
        const tooLongNewAddressEmail = this._tooLongAddressEmail;
        Logger.info("Too long new user address email: " + tooLongNewAddressEmail);
        await this._addNewAddressModalEmailInputField.fill(tooLongNewAddressEmail);
    }
    async inputTooLongNewAddressStreetIntoStreetInputField(){
        const tooLongNewAddressStreet = this._tooLongAddressStreet;
        Logger.info("Too long new user address street: " + tooLongNewAddressStreet);
        await this._addNewAddressModalStreetInputField.fill(tooLongNewAddressStreet);
    }
    async inputTooLongNewAddressCityIntoCityInputField(){
        const tooLongNewAddressCity = this._tooLongAddressCity;
        Logger.info("Too long new user address city: " + tooLongNewAddressCity);
        await this._addNewAddressModalCityInputField.fill(tooLongNewAddressCity);
    }
    async inputTooLongNewAddressStateIntoStateInputField(){
        const tooLongNewAddressState = this._tooLongAddressState;
        Logger.info("Too long new user address state: " + tooLongNewAddressState);
        await this._addNewAddressModalStateInputField.fill(tooLongNewAddressState);
    }
    async inputTooLongNewAddressCountryIntoCountryInputField(){
        const tooLongNewAddressCountry = this._tooLongAddressCountry;
        Logger.info("Too long new user address country: " + tooLongNewAddressCountry);
        await this._addNewAddressModalCountryInputField.fill(tooLongNewAddressCountry);
    }
    async inputTooLongNewAddressPostCodeIntoPostCodeInputField(){
        const tooLongNewAddressPostCode = this._tooLongAddressPostCode;
        Logger.info("Too long new user address post code: " + tooLongNewAddressPostCode);
        await this._addNewAddressModalPostCodeInputField.fill(String(tooLongNewAddressPostCode));
    }

    //invalid new address data input methods - invalid singular input
    async inputInvalidNewAddressFullNameFormatIntoFullNameInputField(){
        const invalidNewAddressFullNameFormat = this._invalidAddressFullNameFormat;
        Logger.info("Invalid new user address full name format: " + invalidNewAddressFullNameFormat);
        await this._addNewAddressModalFullNameInputField.fill(invalidNewAddressFullNameFormat);
    }
    async inputInvalidNewAddressEmailFormatIntoEmailInputField(){
        const invalidNewAddressEmailFormat = this._invalidAddressEmailFormat;
        Logger.info("Invalid new user address email format: " + invalidNewAddressEmailFormat);
        await this._addNewAddressModalEmailInputField.fill(invalidNewAddressEmailFormat);
    }
    async inputInvalidNewAddressStreetFormatIntoStreetInputField(){
        const invalidNewAddressStreetFormat = this._invalidAddressStreetFormat;
        Logger.info("Invalid new user address street format: " + invalidNewAddressStreetFormat);
        await this._addNewAddressModalStreetInputField.fill(invalidNewAddressStreetFormat);
    }
    async inputInvalidNewAddressCityFormatIntoCityInputField(){
        const invalidNewAddressCityFormat = this._invalidAddressCityFormat;
        Logger.info("Invalid new user address city format: " + invalidNewAddressCityFormat);
        await this._addNewAddressModalCityInputField.fill(invalidNewAddressCityFormat);
    }
    async inputInvalidNewAddressStateFormatIntoStateInputField(){
        const invalidNewAddressStateFormat = this._invalidAddressStateFormat;
        Logger.info("Invalid new user address state format: " + invalidNewAddressStateFormat);
        await this._addNewAddressModalStateInputField.fill(invalidNewAddressStateFormat);
    }
    async inputInvalidNewAddressCountryFormatIntoCountryInputField(){
        const invalidNewAddressCountryFormat = this._invalidAddressCountryFormat;
        Logger.info("Invalid new user address country format: " + invalidNewAddressCountryFormat);
        await this._addNewAddressModalCountryInputField.fill(invalidNewAddressCountryFormat);
    }

}
export {AddNewAddressModalInvalidScenarios};