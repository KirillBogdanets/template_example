const path = require("path");
const fs = require("fs");
const PageMap = require("./pop/PageMap");
const ConstantMap = require("./pop/ConstantMap");
const envs = require("./protractor.environments");

exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    restartBrowserBetweenTests: true,
    onPrepare: function () {
        if (browser.params.baseUrl) {
            envs[browser.params.environment].baseUrl = browser.params.baseUrl;
        }
        browser.params.envData = envs[browser.params.environment];

        new PageMap().init();
        new ConstantMap().init();
    },
    beforeLaunch: function () {
        const dir = path.resolve("./output/");
        console.log("Cleaning 'output' folder.");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        } else {
            fs.readdirSync(dir).forEach(file => fs.unlinkSync(path.resolve(dir + "/" + file)));
        }
    },
    cucumberOpts: {
        require: path.resolve('./step_definitions/*.js'),
        ignoreUncaughtExceptions: true,
        format: ['json:output/cucumber.json']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};