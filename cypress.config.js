/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    console.log(launchOptions.args)
    if (browser.name == 'chrome') {
      launchOptions.args.push('--disable-gpu')
    }
    return launchOptions
  }),
}
