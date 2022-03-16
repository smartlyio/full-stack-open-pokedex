describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('navigate from main page to a pokemon page', function () {
    cy.visit('http://localhost:5000')
    cy.contains('metapod').click()
    cy.contains('shed skin')
  })
})
