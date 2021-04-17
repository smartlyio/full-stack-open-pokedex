describe('Ivysaur page', function() {
  it('pokemon page can be navigated to', function() {
    cy.view('http://localhost:8080/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})