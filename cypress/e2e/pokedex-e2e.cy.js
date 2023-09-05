describe('Pokedex', function() {
  const PORT = process.env.PORT || 5000
  const MAINSITE = `http://localhost:${PORT}`
  it('front page can be opened', function() {
    cy.visit(MAINSITE)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('ivysaur page opens', function() {
    cy.visit(MAINSITE)
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})