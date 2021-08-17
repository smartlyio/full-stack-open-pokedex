describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000', { timeout: 900000 })
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.get('.list-item').eq(1).click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})