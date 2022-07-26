const { defineConfig } = require('cypress')

/* eslint-disable no-unused-vars */
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 100000,
})
