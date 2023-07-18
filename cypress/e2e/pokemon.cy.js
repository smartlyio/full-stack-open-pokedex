describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('Navigation works', () => {
    cy.contains('ivysaur')
    cy.contains('kakuna').click()
    cy.contains('ivysaur').should('not.exist')
    cy.contains('Next').click()
    cy.contains('kakuna').should('not.exist')
    cy.contains('beedrill')
  })
})