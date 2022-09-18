describe('Pokedex', function () {
  it('Navigating to some pokemon', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.wait(500)
    cy.contains('chlorophyll')
  })
})
