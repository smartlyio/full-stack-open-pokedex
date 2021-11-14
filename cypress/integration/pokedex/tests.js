describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('navigate to a pokemon page', function() {
    const homeUrl = 'http://localhost:5000'
    cy.visit(homeUrl)
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('Previous').should('have.attr', 'href').and('include', 'bulbasaur')
  })
})