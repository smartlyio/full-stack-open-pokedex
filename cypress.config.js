const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {},
  retries: {
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
})
