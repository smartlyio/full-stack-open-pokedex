const { defineConfig } = require('cypress')

global.process = {
  env: {
    NODE_ENV: 'test'
  }
}


module.exports = defineConfig({
  e2e: {
    supportFile: false,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    setupNodeEvents() {
      // implement node event listeners here
    }
  },
})