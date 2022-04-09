describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate from main page to the page of a particular Pokemon', function() {
    cy.contains('psyduck').click()
    cy.contains('swift swim')
  })
})