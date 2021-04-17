describe('Ivysaur page', function() {
  it('dynamic page can be opened', function() {
    cy.view('http://localhost:8080/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})