describe('Navigate to an individual Pokemon\'s page', function() {
  it('Pokemon page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})