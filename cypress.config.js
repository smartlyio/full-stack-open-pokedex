const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        launchOptions.args = launchOptions.args.filter(item => item !== "--disable-dev-shm-usage")
        return launchOptions;
      });
    },
  },
})
