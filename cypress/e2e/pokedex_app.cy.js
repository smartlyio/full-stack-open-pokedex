describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:1232')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  //! revert back to 3000
  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:1212')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
