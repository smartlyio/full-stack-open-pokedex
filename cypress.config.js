const cypress = require('cypress')

module.exports = cypress.defineConfig({
  e2e: {
    supportFile: false,
    video: false
  },
})