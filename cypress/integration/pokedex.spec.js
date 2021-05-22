describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to Ninetales page and see Drought', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ninetales').click()
    cy.contains('Drought')
  })
})