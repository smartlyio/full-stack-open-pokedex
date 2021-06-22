describe('Ivysaur page', function () {
  it('have correct content', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
