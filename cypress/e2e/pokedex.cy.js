describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('raticate').click()
    cy.contains('raticate')
    cy.contains('run away')
    cy.contains('hustle')
  })
})