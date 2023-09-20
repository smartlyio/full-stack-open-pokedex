describe('Pokedex', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('can navigate to pokemon from main page', function () {
    cy.contains('charizard').click()
    cy.contains('blaze')
  })
})
