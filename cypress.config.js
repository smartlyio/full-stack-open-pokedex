/*global module, a*/
/*eslint no-undef: "error"*/
/* eslint-disable no-unused-vars */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
/* eslint-enable no-unused-vars */
