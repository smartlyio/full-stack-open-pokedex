/* global cy */

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigation', () => {
  it('should navigate to Ivysaur page', () => {
    cy.visit('http://localhost:5000')

    cy.contains('ivysaur').click()

    // Validate that the page has loaded successfully.
    cy.url().should('include', '/pokemon/ivysaur')
    cy.get('.pokemon-abilities').should('contain', 'chlorophyll')
  })
})