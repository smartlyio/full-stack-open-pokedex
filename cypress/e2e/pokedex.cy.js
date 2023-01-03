describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('can navigate to a pokemon page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu').click()
    cy.contains('lightning rod')
  })
})
