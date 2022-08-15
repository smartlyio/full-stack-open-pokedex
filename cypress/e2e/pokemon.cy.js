// eslint-disable-next-line no-undef
describe('Pokedex', function() {
  // eslint-disable-next-line no-undef
  it('front page can be opened', function() {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5000')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    // eslint-disable-next-line no-undef
    cy.get('#ivysaur').click()
    // eslint-disable-next-line no-undef
    cy.contains('chlorophyll')
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-undef
    cy.contains('overgrow')
    // eslint-disable-next-line no-undef
    cy.contains('speed')
    // eslint-disable-next-line no-undef
    cy.contains('Previous')
    // eslint-disable-next-line no-undef
    cy.contains('Next')
  })
})