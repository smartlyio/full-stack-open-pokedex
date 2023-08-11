describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:8081')
  })
  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})