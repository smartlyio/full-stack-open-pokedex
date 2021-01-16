describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Rattata page can be accessed from front page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('rattata').click()
    cy.contains('rattata')
    cy.contains('run away')
    cy.contains('hustle')
  })
})