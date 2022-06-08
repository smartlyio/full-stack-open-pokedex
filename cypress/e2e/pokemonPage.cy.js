describe('Pokedex', function () {
  it('pokemon item can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
