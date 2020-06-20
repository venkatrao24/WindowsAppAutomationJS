import { Before, After, BeforeAll, AfterAll, Status} from 'cucumber';
import {webDriver} from "./driver";
import {driver} from 'selenium-appium';

Before(async function(scenario) {
    const scenarioName = await scenario.pickle.name;
    await console.log(`Scenario Name: ${scenarioName}`);
});

//screenshot on failure
After(async function (testCase) {
    await console.log(`Inside after scenario..`);
    await console.log(`testcase result: ${testCase.result.status}`);
    if(testCase.result.status === Status.FAILED){
        await driver.takeScreenshot().then(( buffer) => {
            return this.attach(buffer, 'image/png');
        });
    }
});

BeforeAll(async function () {

});

AfterAll( function() {
    console.log("Inside after all");
    // webDriver.quit();
})

