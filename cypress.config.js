const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}'
  },
})

