describe('Pokedex', function() {
  it('Single pokemon page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.get('.list-item:nth-child(3)').invoke('text').then((pokeName) => {
      cy.get('.list-item:nth-child(3)').click()
      cy.contains(pokeName)
    })
  })
})