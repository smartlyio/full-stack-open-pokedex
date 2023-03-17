describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pages can be navigated', function() {
    cy.visit('http://localhost:5001')
    cy.get('[href="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})