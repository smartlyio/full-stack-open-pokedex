describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Wartortle page can be opened and it contains correct information', function() {
    cy.visit('http://localhost:5000')
    cy.contains('wartortle').click()
    cy.contains('wartortle')
    cy.contains('torrent')
  })
})