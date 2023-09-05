describe('Pokedex', function() {
  const MAINSITE = 'http://localhost:5000'
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