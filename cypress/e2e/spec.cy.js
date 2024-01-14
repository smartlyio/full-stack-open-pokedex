describe('Pokedex', function () {
  it('front page can be opened', function () {
    // eslint-disable-next-line
    cy.visit('http://localhost:5000/')
    // eslint-disable-next-line
    cy.contains('ivysaur')
    // eslint-disable-next-line
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('navigate from the main page to the page of a particular Pokemon', function () {
    // eslint-disable-next-line
    cy.visit('http://localhost:5000/')
    // eslint-disable-next-line
    cy.get('#ivysaur').click()
    // eslint-disable-next-line
    cy.url().should('include', 'pokemon/ivysaur')
    // eslint-disable-next-line
    cy.contains('chlorophyll')
    // eslint-disable-next-line
    cy.contains('overgrow')
  })
})
