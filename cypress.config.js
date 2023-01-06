const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(_on, _config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'http://localhost:8080',
  },
})
