describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('Main page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('ivysaur containts the correct attribute', function () {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})