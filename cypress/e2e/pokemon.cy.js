/*global cy*/
/*eslint no-undef: "error"*/
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex', function() {
  it('navigation to individual pokemon page works', function() {
    cy.visit('http://localhost:5000')
    cy.contains('butterfree').click()
    cy.contains('tinted lens')
  })
})