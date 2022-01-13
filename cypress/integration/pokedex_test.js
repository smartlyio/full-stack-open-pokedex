describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon\'s page can be opened', function() {
    cy.visit('http://localhost:5000')
    // https://docs.cypress.io/api/commands/get#Examples
    cy.get('a[href*="ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})