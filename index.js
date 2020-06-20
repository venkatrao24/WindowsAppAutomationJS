const reporter = require('cucumber-html-reporter');
const versionString = require('child_process').execSync('ver').toString().trim();

const options = {
 theme: 'bootstrap',
 jsonFile: 'testresults/out.json',
 output: 'testresults/cucumber_report.html',
 reportSuiteAsScenarios: true,
 ignoreBadJsonFile: true,
 scenarioTimestamp: true,
 launchReport: false,
 displayDuration: true,
 metadata: {
 "Test Environment": 'AppUIBasics',
 "Browser": "IE",
 "Platform": versionString,
 "Executed": "Remote",
 "Jenkins Build Number": process.env.BUILD_NUMBER,
 "Jenkins Job Name": process.env.JOB_NAME,
 "Jenkins Build URL": process.env.BUILD_URL
 }
};

reporter.generate(options);