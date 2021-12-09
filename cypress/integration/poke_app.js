describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('Navigation from homepage to individual pokemon page works', function() {
    cy.contains('venusaur').click()
    cy.contains('venusaur')
    cy.contains('speed')
  })
})