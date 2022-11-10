/* global cy */

describe('Pokedex', () => {
  it('frontpage can be open') ,() => {
    cy.visit('http://localhost:5000')
    cy.contains('Pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  }
})