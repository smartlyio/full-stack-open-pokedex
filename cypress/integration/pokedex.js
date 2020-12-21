describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('particular pokemon page can be visited', function() {
    cy
      .contains('charizard')
      .click()
    cy.contains(/blaze/i)
    cy.contains(/solar power/i)
  })
})