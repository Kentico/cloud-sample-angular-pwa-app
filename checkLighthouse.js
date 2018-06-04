const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const appConfig = require('./package');

const opts = {
    chromeFlags: ['--headless']
};

function launchChromeAndRunLighthouse(url, opts, config = null) {
    return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
            delete results.artifacts;
            return chrome.kill().then(() => results)
        });
    });
}

launchChromeAndRunLighthouse(appConfig.config.deployUrl, opts).then(results => {
    setTimeout(() => {
      if (results.reportCategories.filter((item) => item.id === "pwa").length) {
        const score = results.reportCategories.filter((item) => item.id === "pwa")[0].score;
        if (score >= 100) {
            console.info(`PWA score is 100.`);
            process.exit(0);
        }
        console.error(`Score is lower than 100. It is ${score}`);
        process.exit(1);
    }
    console.error(`No PWA score provided by lighthouse.`);
    process.exit(1);
    }, 2000);    
});