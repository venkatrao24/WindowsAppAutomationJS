const shell = require('shelljs');

const fs = require('fs');
const winAppDriverProcess = shell.exec('C:\\tools\\WinAppDriver\\Winappdriver.exe 127.0.0.1 4723/wd/hub', { silent: true, async: true});
let logStream = fs.createWriteStream('testresults/winappdriver.txt');
    winAppDriverProcess.stdout.pipe(logStream);
    winAppDriverProcess.stderr.pipe(logStream);
    // c.on('close', function(code){
    //     console.log(`winappdriver.exe process exited with code: ${code}`)
    // });
const generateReport = (code, stdout, stderr) => {
    // console.log('Exit code:', code);
    // console.log('Program output:', stdout);
    // console.log('Program stderr:', stderr);
    shell.exec(`node index.js`, killApplication);
};

// shell.exec('cucumber-js  --world-parameters \"{\\\"POB\\\": \\\"' + shell.env.POB + '\\\", \\\"ENV\\\": \\\"' + shell.env.ENV + '\\\"}\"' +
//     ' features/' + shell.env.POB + '_Smoke.feature --require features/**/*.js --require-module @babel/register --require-module @babel/polyfill -f json:testresults/out.json ' +
//     ' -f progress --tags @'+shell.env.SCENARIO_NAME+' --unhandled-rejections=strict")', generateReport) ;

shell.exec('cucumber-js features/XAML.feature --require stepdefinitions/**/*.js --require-module @babel/register --require-module @babel/polyfill -f json:testresults/out.json -f progress --tags @xaml --unhandled-rejections=strict', generateReport) ;

const killApplication = (err, stdout, stderr) => {
    if (err) {  throw err  }
    // console.log('stdout', stdout);
    // console.log('stderr', err);
    const processName = `AppUIBasics.exe`;
    shell.exec(`taskkill /im ${processName} /t /F`, killWinAppDriver);
};

const killWinAppDriver = (err, stdout, stderr) => {
    if (err) {   throw err  }
    // console.log('stdout', stdout);
    // console.log('stderr', err);
    const winAppDriverProcess = 'WinAppDriver.exe';
    shell.exec(`taskkill /im ${winAppDriverProcess} /t /F`, errorPrintOut);
};

const errorPrintOut = (err, stdout, stderr) => {
    if (err) { throw err }
    // console.log('stdout', stdout)
    // console.log('stderr', err)
};

