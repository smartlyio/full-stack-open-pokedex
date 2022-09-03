/* global cy */

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('kakuna')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('a pokemon page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})