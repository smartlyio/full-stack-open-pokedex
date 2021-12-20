// pokedex-app.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('check that pokemonpage renders hidden ability', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})