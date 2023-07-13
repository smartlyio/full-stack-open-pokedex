describe('Pokedex', function () {
  it('front page can be opened', function () {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5001')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})