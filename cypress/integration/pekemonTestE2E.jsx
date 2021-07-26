describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('click in link pikachu and go intro in page pikachu', ()=>{
    cy.visit('http://localhost:5000')
    cy.get('[href="/pokemon/pikachu"]').click()
    cy.get('.pokemon-name').contains('pikachu')
    cy.get('.links > :nth-child(1)').click()
    cy.get('.pokemon-name').contains('arbok')
  })

})