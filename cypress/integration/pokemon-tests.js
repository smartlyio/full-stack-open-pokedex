describe('Pokedex', function() {
  it('front and pokemon page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.request('pokemon/charmeleon')
    cy.contains('charmeleon')

  })
})