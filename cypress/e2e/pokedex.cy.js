/* eslint-disable no-undef */
describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('Can visit Ivysaur', () => {
    cy.visit('http://localhost:5001')
    cy.get('a[href*="/pokemon/ivysaur"]').click()
    cy.contains('ivysaur')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})
