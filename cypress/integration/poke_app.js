describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:8080')
      cy.contains('ivysaur')
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })

    it('can navigate from main page to ivysaur', function() {
        cy.visit('http://localhost:8080')
        cy.visit('http://localhost:8080/pokemon/ivysaur')
        cy.contains('chlorophyll')
        cy.contains('overgrow')
    })
  })