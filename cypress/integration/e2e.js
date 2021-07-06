describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('can navigate to particular Pokemon page', () => {
    cy.visit('http://localhost:5000')
    cy.contains('kakuna').click()
    cy.contains('shed skin')
  })
})
