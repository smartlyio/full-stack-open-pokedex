describe('Pokedex', function () {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('can navigate from the main page to the page of a particular Pokemon', function () {
    cy.contains('ivysaur').click()

    cy.contains('chlorophyll')
  })
})
