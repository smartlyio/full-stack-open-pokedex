describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })
  it('check Ivisaur is visible on the home page', () => {
    cy.contains('ivysaur').should('exist').and('be.visible').and('have.text', 'ivysaur')
  })
  it('navigate to Ivisaur page and check the specs', () => {
    cy.contains('ivysaur').click()
    cy.get('.pokemon-image').should('be.visible')
    cy.contains('ivysaur').should('exist').and('have.text', 'ivysaur')
    cy.url().should('include', '/pokemon/ivysaur')
  })
})
