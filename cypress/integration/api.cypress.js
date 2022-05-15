describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.on('uncaught:exception', error => {
      console.error(error)
    })
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', () => {
    cy.visit('http://localhost:5000')
    cy.get('.list-item:nth-child(2)').click()
    cy.contains('chlorophyll')
  })

})