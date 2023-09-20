describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5001')
  })

  it('frontpage can be opened', function () {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })


  it('pokemon page can be navigated to', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})