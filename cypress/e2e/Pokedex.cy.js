describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5001')
  })
  it('front page can be opened', () => {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', () => {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
