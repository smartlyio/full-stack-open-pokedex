const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.{js,jsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
