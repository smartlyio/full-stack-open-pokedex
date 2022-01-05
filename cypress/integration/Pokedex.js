describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('navigate to pokemon', function () {
    cy.visit('http://localhost:5000')
    cy.get('[href="/pokemon/caterpie"]').click()
    cy.contains('caterpie')
    cy.contains('shield dust')
  })
})
