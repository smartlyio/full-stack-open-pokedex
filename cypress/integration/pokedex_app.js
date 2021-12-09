describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')

    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('should have hidden skill', function () {
    cy.visit('http://localhost:5000/pokemon/pichu')
    cy.contains('pichu')
    cy.contains('lightning rod')
  })
})
