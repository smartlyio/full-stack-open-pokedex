describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})
describe('can go to particular pokemon', function () {
  it('can go to ivysaur', function () {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
