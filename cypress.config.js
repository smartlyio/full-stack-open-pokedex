const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, _config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(launchOptions.args)
    
        if (browser.name == 'chrome') {
          launchOptions.args.push('--disable-gpu')
        }
    
        return launchOptions
      }),
    },
  },
})
