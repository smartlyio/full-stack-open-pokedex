describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('can open a pokemos"s page', function () {
    // cy.server()
    // cy.route('GET', '/api/v2/pokemon/ivysaur').as('pokePage')

    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    // cy.wait('@pokePage')
    cy.contains('chlorophyll')
  })
})
