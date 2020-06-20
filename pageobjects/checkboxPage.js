import { PageObject, By2 } from "selenium-appium";
import BasePage from '../pageobjects/basePage';
import {assert} from 'chai';

export default class CheckBoxPage extends BasePage {
  isPageLoaded() {
    return this.checkbox1Button.isDisplayed();
  }

   get checkbox1Button() { return this.byName('Two-state CheckBox'); }
   get control1Ooutput() { return this.byAccessibilityId('Control1Output');}

 
  async clickElement(fieldName, fieldType){
    let elementName = await this.getElementName(fieldName, fieldType);
    console.log(`checkbox page, element name: ${elementName}`);

      switch(fieldName){

        case "Checkbox1":
            await this[elementName].click();
            let textDisplayed = await this.waitForElementAndGetText(this.control1Ooutput);
            assert.equal(textDisplayed, 'You checked the box.');
            break;
        default:
            console.log(`Element not found in button page`);

      }
  }

}

