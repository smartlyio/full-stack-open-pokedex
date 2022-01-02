describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit(`http://localhost:${process.env.PORT || 5000}`)
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
    cy.contains('ivysaur').click()
    cy.get('.pokemon-name').should('contain', 'ivysaur')
    cy.get('.pokemon-ability-name').should('contain', 'overgrow')
    cy.get('.pokemon-ability-name').should('contain', 'chlorophyll')
  })
})
