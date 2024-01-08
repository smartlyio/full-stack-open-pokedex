describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.contains('charmander').click()
    cy.contains('charmander')
    cy.contains('Home').click()
    cy.contains('nidorina')
  })
})