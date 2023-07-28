const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {     // eslint-disable-line
      // implement node event listeners here
    },
  },
})
