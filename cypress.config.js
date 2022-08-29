/*global module*/
/*eslint no-undef: "error"*/
/* eslint-disable no-unused-vars */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "pageLoadTimeout": 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
/* eslint-enable no-unused-vars */
