import {setWorldConstructor}  from 'cucumber';
import {webDriver, appDriver} from "./driver";
import BasePage from "../../pageObjects/basePage";

const webdriver = require("selenium-webdriver");
import {Config} from "selenium-appium";

class CustomWorld {
    constructor({ attach, parameters }) {
        this.attach = attach;
        this.parameters = parameters;
        // this.appDriver = appDriver;
        // this.webDriver = webDriver;
        // this.basePage = new BasePage();
        // this.waitClickEnterValue = this.basePage.waitClickEnterValue;
        // this.waitForElementAvailable = this.basePage.waitForElementAvailable;
        // this.connectAppDriver = this.basePage.connectAppDriver;
        // this.delay = this.basePage.delay;
        // this.validateElementAvailable = this.basePage.validateElementAvailable;
        // global.POB = '';
        // global.ENV = '';
        // global.insuredFields = new Object();
        // global.applicationFields = new Object();
        Config.setWaitForTimeout(30000);
        Config.setWaitForPageTimeout(60000);
    }
}

setWorldConstructor(CustomWorld)

