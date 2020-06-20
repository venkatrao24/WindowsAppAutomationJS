import { PageObject, By2 } from "selenium-appium";
import basePage from './basePage';

export default class BasicInputPage extends basePage {
  isPageLoaded() {
    return this.checkBoxButton.isDisplayed();
  }

get checkboxButton() { return this.byName('CheckBox'); }
get buttonButton() { return this.byName('Button'); }

  async clickElement(fieldName, fieldType){
    let elementName = await this.getElementName(fieldName, fieldType);
    await this[elementName].click();
  }

}