/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5005')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5005')
    cy.get('a').contains('chariard').click()
    cy.contains('Hidden ability')
    cy.contains('blaze')
  })
})