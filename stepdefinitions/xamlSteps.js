import {Given, When, Then} from 'cucumber';
import Capabilities from '../config/capabilities';
import {driver, windowsAppDriverCapabilities} from 'selenium-appium';
import PageMapper from '../pageobjects/pageMapper';

const capabilites = windowsAppDriverCapabilities(Capabilities.xaml.appId);


Given('I launch the application', async function () {
    console.log(`The application is launched`);
    await driver.startWithCapabilities(capabilites); 
  });

Given('I click {string} {string} in the {string} page', async function(fieldName, fieldType, pageName){

    // await PageMapper[pageName].waitForPageLoaded();
    await PageMapper[pageName].clickElement(fieldName, fieldType);

});