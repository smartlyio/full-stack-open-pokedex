describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('/')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('pokemon details page can be opened', function () {
    cy.visit('/')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })

  it('Next pokemon can be opened', function () {
    cy.visit('/')
    cy.contains('ivysaur').click()
    cy.contains('Next').click()
    cy.contains('venusaur')
  })
})
