describe('Visit Weedle', function () {
  it('Can visit a pokemon page', function () {
    cy.visit('http://localhost:5000')
    cy.contains('weedle').click()
    // The weedle page contains its hidden abilities
    cy.contains('shield dust')
    cy.contains('run away')
  })
})