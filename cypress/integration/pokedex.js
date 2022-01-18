describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigate', function() {
  beforeEach(() => {

    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur').click()
  })
  it('to view more details', function() {
    cy.get('.pokemon-ability-name')
  })
})