describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('get to venusaur page', () => {
    cy.get('[href="/pokemon/venusaur"]').click()
    cy.location('pathname').should('equal', '/pokemon/venusaur')
  })
})
