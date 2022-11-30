describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('shows individual pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="/pokemon/clefairy"]').click()
    cy.contains('clefairy')
  })
})