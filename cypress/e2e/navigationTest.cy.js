
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('bulbasaur').click()
    cy.url().should('equal','http://localhost:5000/pokemon/bulbasaur')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})