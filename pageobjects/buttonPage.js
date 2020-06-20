import { PageObject, By2 } from "selenium-appium";
import BasePage from "./basePage";
import {assert} from 'chai';

export default class ButtonPage extends BasePage {
  isPageLoaded() {
    return this.button1Button.isDisplayed();
  }

get button1Button() { return this.byAccessibilityId('Button1'); }
get control1Ooutput() { return this.byAccessibilityId('Control1Output');}

  clickButton1() {
      return this.button1Button.click();      
  }

  getControl1Output() {
      return this.control1Ooutput.getText();
  }

  async clickElement(fieldName, fieldType){
    let elementName = await this.getElementName(fieldName, fieldType);

      switch(fieldName){

        case "Button1":
            await this[elementName].click();
            let textDisplayed = await this.waitForElementAndGetText(this.control1Ooutput);
            assert.equal(textDisplayed, 'You clicked: Button1');
            break;
        default:
            console.log(`Element not found in button page`);

      }
  }
}

