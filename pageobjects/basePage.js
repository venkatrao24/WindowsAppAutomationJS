import {PageObject, By2, driver, WebDriver2, windowsAppDriverCapabilities} from 'selenium-appium';
import {until} from 'selenium-webdriver'
import {assert} from 'chai';

export default class basePage extends PageObject{
    constructor(){
        super();
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async validateElementAvailable(element) {
        try {
            await element;
            return true;
        } catch (error) {
            return false;
        }
    }

     //https://github.com/react-native-windows/selenium-appium/blob/master/example/__tests__/Driver2.test.ts
     async connectAppDriver(hex) {
        console.log(`Hex received to connect to App using appDriver: ${hex}`);
        const currentAppCapabilities =
            {
                "browserName": '',
                "appTopLevelWindow": hex.trim(),
                "platformName": "Windows",
                "deviceName": "WindowsPC",
                "newCommandTimeout": "120000"
            };
        const appDriver = await new Builder()
            .usingServer("http://localhost:4723/wd/hub")
            .withCapabilities(currentApppCapabilities)
            .build();
        await driver.startWithWebDriver(appDriver);
        return driver;
    }

    async waitForElementAndGetText(element){
        await this.driver.wait(until.elementIsVisible(element));
        return element.getText();
    }

    async waitForElementVisibleAndClick(element){
        await this.driver.wait(until.elementIsVisible(element), 30000);
        await element.click();
    }

    async waitForElementLocatedAndClick(element){
        await this.driver.wait(until.elementLocated(element), 30000);
        await element.click();
    }

    async waitForElementVisibleClickAndEnterValue(element, value){
        await this.driver.wait(until.elementIsVisible(element),30000, "Element is not visible...");
        await element.click();
        await element.sendKeys(value);
    }

    byAccessibilityId(id) {
        return this.driver.findElement(By2.nativeAccessibilityId(id));
    }

    byName(name) {
        return this.driver.findElement(By2.nativeName(name));
    }

    async getElementName(fieldName, fieldType){
        const elementName = await this.getCamelCase(fieldName) + await this.capitalize(fieldType);
        return elementName;
    }

    async getCamelCase(str){
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    async capitalize (str) {
     return str.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join('');
    }
}