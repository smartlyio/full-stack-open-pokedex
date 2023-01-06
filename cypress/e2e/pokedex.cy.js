const { isDev } = require('../../src/utils/isDev')

describe('Pokedex', function () {
  it('front page can be opened', function () {
    const url = isDev() ? Cypress.env('localUrl') : Cypress.env('buildUrl')
    cy.visit(url)
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
