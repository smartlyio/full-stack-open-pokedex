const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'integration/**/*.cy.{js,jsx,ts,tsx}',
    pageLoadTimeout: 120000
  },
})
