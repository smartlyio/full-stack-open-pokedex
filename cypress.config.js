const { defineConfig } = require("cypress");

module.exports = defineConfig({
  /* eslint-disable */
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  /* eslint-enable */
});
