//This is for launching IE
export const webdriver = require("selenium-webdriver");
export const browserCapabilities = webdriver.Capabilities.chrome();
// export const webDriver = new webdriver.Builder().withCapabilities(browserCapabilities).build();
// const chrome = require('selenium-webdriver/chrome');
// const chromedriver = require('chromedriver');

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
// export const browserCapabilities = webdriver.Capabilities.ie();

// browserCapabilities.set("ignoreZoomSetting", true);
// export const webDriver = new webdriver.Builder().forBrowser('internet explorer').build();

// export const webDriver = new webdriver.Builder().forBrowser('chrome').build();


//This is for winappdriver
import {Builder} from "selenium-webdriver";
import capabilities from '../../config/capabilities';
// export const appDriver =  new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(capabilities.xaml).build();

