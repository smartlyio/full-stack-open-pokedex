describe('Pokedex', function () {
  beforeEach(function () {
    cy.visit(Cypress.env('url'))
  })

  it('should be able to open the front page', function () {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('should be able to navigate to pokemon page', function () {
    cy.contains('ivysaur').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})
