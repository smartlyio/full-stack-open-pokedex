describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),
  it('Checks Inkay\'s abilities', function() {
    cy.visit('http://localhost:5000/')
    cy.contains('inkay').click()
    cy.contains('contrary')
  })
})