const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    specPattern: 'cypress/e2e/*.cy.js',
    supportFile: false,
    pageLoadTimeout: 6000
  }});
