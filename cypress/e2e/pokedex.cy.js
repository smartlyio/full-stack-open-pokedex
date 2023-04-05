describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can visit pokemon page and checks for string', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})