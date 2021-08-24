describe('Pokedex pages', function () {
  it('Front page can be opened.', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('Ivysaur link can be clicked and correct page opens.', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains(
      'chlorophyll'
    )
  })
})
