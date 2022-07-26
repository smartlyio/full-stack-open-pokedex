describe('Pokedex', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function () {
    cy.contains(/ivysaur/i)
    cy.contains(
      /Pokémon and Pokémon character names are trademarks of Nintendo./i
    )
  })

  it('pokemon page can be navigated to', function () {
    cy.contains(/ivysaur/i).click()
    cy.contains(/chlorophyll/i)
  })
})
