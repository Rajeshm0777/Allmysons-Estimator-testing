const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,

    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
  
    "baseUrl" : "http://estimatorappuat.allmysons.com",//http://estimatorapptesting.allmysons.com/
    "defaultCommandTimeout": 5000,
    "pageLoadTimeout":7000,
    "video": true,
    "viewportWidth" : 1920,
    "viewportHeight": 1080,
    "retries":{ "runMode": 1, "openMode": 1 },
    env:{

        "customerid":null, 
             "token": null

    },
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
