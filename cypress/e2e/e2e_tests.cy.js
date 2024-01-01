describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to ivysaur page', function() {
    cy.get('.list-item-name').contains('ivysaur').parent().click()
    cy.contains('chlorophyll')
  })
})