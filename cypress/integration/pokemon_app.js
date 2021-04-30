describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigate', function() {
  it('Navigate from main to particular Pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('Previous')
    cy.contains('Home')
    cy.contains('Next')
    cy.contains('ivysaur')
    cy.contains('speed')
    cy.contains('chlorophyll')
  })
})