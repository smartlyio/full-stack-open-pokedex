const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { // eslint-disable-line no-unused-vars
      // implement node event listeners here
    },
  },
})
