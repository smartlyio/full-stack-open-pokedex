describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8081')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})