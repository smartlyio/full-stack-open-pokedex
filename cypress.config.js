const { defineConfig } = require('cypress');
const { node } = require('webpack');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      node
      config
    },
  },
});
