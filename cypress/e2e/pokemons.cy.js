describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('single pokemon page can be opened', function() {
    cy.visit('')
    cy.get('.list-item[href="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})