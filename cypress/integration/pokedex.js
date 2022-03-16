describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('page of a particular Pokemon', function () {
    cy.visit('http://localhost:8080/pokemon/pikachu')
    cy.contains('lightning rod')
  })
})