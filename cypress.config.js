/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
})
