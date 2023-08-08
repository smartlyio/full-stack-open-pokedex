describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.',
    )
  })

  it('clicking link goes to page with content', function () {
    cy.visit('http://localhost:5000')

    cy.contains('ivysaur').click()
    cy.location('pathname').should('eq', '/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})
