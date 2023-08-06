const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://emicalculator.net",
    specPattern: "cypress/e2e/*.feature",
    chromeWebSecurity: false,
    blockHosts: [
      "pagead2.googlesyndication.com",
      "www.google-analytics.com",
      "stats.g.doubleclick.net",
    ],
  },
});
