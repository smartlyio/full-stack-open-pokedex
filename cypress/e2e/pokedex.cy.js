describe('template spec', () => {
  it('front page can be opened', () => {
    cy.visit('/', { timeout: 5000 }) //use baseUrl in cypress.config.js
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
