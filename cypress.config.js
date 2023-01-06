const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(_on, _config) {
    //   // implement node event listeners here
    // },
    env: {
      localUrl: 'http://localhost:8080',
      buildUrl: 'http://localhost:5000',
    },
  },
})
