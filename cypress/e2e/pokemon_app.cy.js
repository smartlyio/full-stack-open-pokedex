describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('click link', function() {
  it('click the link, then the page would be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})