describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('single pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
  it('/health returns ok', function() {
    cy.visit('http://localhost:5000/health')
    cy.contains('ok')
  })
})