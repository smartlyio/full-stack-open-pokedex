const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  chromeArgs: ["--disable-web-security", "--ssl-version-min=tls1.2"],
});
