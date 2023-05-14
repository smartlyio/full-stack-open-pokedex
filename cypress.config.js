const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
