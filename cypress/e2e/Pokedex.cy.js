/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to certain Pokemon', () => {
    cy.visit('http://localhost:5000')
    cy.contains('charizard').click()
    cy.contains('speed').should('exist')
    cy.contains('solar power').should('exist')
    cy.get('div[class="pokemon-page pokemon-type-fire"]').should('exist')
  })
})