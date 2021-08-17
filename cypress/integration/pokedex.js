describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('Pokemon details can be viewed', function () {
    cy.visit('http://localhost:5000')
    cy.get('.list-item').contains('squirtle').click()
    cy.contains('torrent')
  })
})
