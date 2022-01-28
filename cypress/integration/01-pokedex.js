
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('could access pokemon information', function() {
    cy.visit('http://localhost:5000')
    cy.contains('charmander').click()
    cy.contains('solar power')
  })
})