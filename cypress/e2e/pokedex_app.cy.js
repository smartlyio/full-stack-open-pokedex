describe('Pokedex', function() {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('charmander page can be found', function() {
    cy.get('a[href="/pokemon/charmander"]').click()
    cy.contains('charmander')
    cy.contains('solar power')
  })
})