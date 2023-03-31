describe('pokedex', () => {
  beforeEach(() => cy.visit('/', { timeout: 5000 }))

  it('front page can be opened', () => {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('pokemon page can be navigated to', () => {
    cy.get('a[href*="ivysaur"]').click()
    cy.contains('chlorophyll')
  })
})
