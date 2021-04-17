describe('Ivysaur page', function() {
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
// Did not inform that you cannot access the dynamic route through url