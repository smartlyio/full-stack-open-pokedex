//import cy from 'cypress'

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8080')
    cy.contains('ivysau')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})