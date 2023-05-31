describe('Navigate', () => {
  it('navigates from main page to any pokemons page', () => {
    cy.visit('http://localhost:5000')
    cy.get('a[href="/pokemon/ivysaur"]').click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})