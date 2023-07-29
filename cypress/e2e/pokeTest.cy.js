describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000', { timeout: 150000 })
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('link from main to PokemonPage works', function() {
    cy.visit('http://localhost:5000', { timeout: 150000 })
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('venusaur').should('not.exist')
  })
})