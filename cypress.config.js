const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {},

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
