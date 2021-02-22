describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),

  it('navigation works from main page to pokemon page', function() {
    cy.visit('http://localhost:5000')

    cy.contains('kakuna').click();
    cy.contains('shed skin')
  })
})