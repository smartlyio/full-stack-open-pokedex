const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
    pageLoadTimeout: 90000,
  },
})
