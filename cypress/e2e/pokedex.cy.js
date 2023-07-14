const port = process.env.PORT || 5001

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit(`http://localhost:${port}`)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('Right Pokemon content when navigate', function () {
    cy.visit(`http://localhost:${port}`)
    cy.contains('charizard').click()
    cy.contains('blaze')
    cy.contains('solar power')
  })
})