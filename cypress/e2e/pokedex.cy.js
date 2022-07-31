describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('clicking on a Pokemon will navigate to its page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('squirtle').click()
    cy.contains('rain dish')
  })
})