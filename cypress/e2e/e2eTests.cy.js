/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000/')
    cy.get('a[href="/pokemon/butterfree"]').click()
    cy.contains('butterfree')
  })
})