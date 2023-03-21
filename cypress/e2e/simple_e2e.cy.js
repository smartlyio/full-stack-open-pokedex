
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('squirtle').click()

    cy.get('.pokemon-info').children().should('have.length', 3)
    cy.get('.pokemon-name').should('include.text', 'squirtle')
    cy.get('[data-testid="stats"]').should('be.visible')
    cy.get('.pokemon-abilities').should('be.visible')
  })
})