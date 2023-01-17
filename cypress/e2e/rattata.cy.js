describe('Rattata', function () {
  it('check rattata page', function () {
    cy.visit('http://localhost:5000')
    cy.contains('rattata').click()

    // Check abilitys
    cy.contains('hustle')
    cy.contains('run away')

    // Check links
    cy.contains('Previous')
    cy.contains('Home')
    cy.contains('Next')
  })
})
