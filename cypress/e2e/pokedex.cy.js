describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigation Test', () => {
  it('navigates from the main page to Ivysaur page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('a', 'ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll').should('exist')
  })
})
