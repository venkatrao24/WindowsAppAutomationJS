import BasePage from './basePage';
export default class bhomePage extends BasePage{
    constructor(){
        super();
    }
    isPageLoaded() {
        return this.basicInputButton.isDisplayed();
      }
    get basicInputButton() { return this.byName('Basic Input'); }
    
      // gotoBasicInputPage() {
      //   return this.basicInputButton.click();
      // } 

      async clickElement(fieldName, fieldType){
        let elementName = await this.getElementName(fieldName, fieldType);
        await this[elementName].click();
      }
}