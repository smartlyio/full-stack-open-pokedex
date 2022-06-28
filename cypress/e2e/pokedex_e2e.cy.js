describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('navigation from link works', function () {
    cy.visit('http://localhost:5000')
    cy.contains('pichu').click()
    cy.contains('pichu')
    cy.contains('lightning rod')

  })
})