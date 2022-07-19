const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    timeouts: {
      pageLoadTimeout: 100000,
    },
  },
});
