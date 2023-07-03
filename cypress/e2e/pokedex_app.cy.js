describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit(`http://localhost:${process.env.PORT || 5000}`)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('can navigate to a specific Pokemon page', function() {
    cy.visit(`http://localhost:${process.env.PORT || 5000}`)
    cy.contains('ivysaur').click() // Click on the link for the desired Pokemon
    cy.contains('chlorophyll') // Verify that the page contains the string 'chlorophyll'
  })
})