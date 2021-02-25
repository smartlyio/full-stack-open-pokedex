describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000') // 8080
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigation', function() {
  it('navigates from main page to particular page', function() {
    cy.visit('http://localhost:5000')
    // cy.contains('ivysaur')
    cy.contains('ivysaur').click()
    cy.contains('Chlorophyll')
    cy.contains('ivysaur')
    cy.contains('Overgrow')
  })
})