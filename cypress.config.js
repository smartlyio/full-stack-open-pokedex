const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    blockHosts: [
      'raw.githubusercontent.com'
    ]
  },
})
