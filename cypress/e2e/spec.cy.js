describe('Pokedex', function () {
  it('front page can be opened', function () {
    // eslint-disable-next-line
    cy.visit('http://localhost:5000/')
    // eslint-disable-next-line
    cy.contains("ivysaur")
    // eslint-disable-next-line
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
