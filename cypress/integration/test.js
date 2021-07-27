describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('ivysaur', function() {
  it('page can be accessed from the front page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
      .click()

    cy.contains('chlorophyll')
  })
})