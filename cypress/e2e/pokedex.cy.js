describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('links open subpages', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})