describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex', function() {
  it('ivysaur is here', function() {
    cy.visit('http://localhost:5000/pokemon/ivysaur')
    cy.contains('chlorophyll')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})