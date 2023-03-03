const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.url = 'http://localhost:5000'

      return config
    }
  }
})
