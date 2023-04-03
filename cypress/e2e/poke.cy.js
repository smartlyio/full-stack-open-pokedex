describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:5000')
    cy.get('a.list-item')
      .contains('caterpie')
      .click()
    cy.contains('caterpie')
    cy.contains('speed')
    cy.contains(45)
    cy.contains('Hidden ability')
    cy.contains('shield dust')
  })
}) 