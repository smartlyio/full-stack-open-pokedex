describe('Pokedex', function () {
  Cypress.config('pageLoadTimeout', 180000)
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('single pokemon can be clicked', function () {
    cy.contains('charmander').click()
    cy.contains('solar power')
  })
})