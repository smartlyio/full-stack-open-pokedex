const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log('setupNodeEvents')
      console.log('on', on)
      console.log('config', config)
    },
  },
})
