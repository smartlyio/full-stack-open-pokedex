const port = process.env.NODE_ENV === 'development' ? 8080 : 5000

describe('Pokedex', function() {
  it('front page can be opened', function() {
    console.log('STARTING CYPRESS TEST')
    cy.visit(`http://localhost:${port}`)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})