describe('Pokedex2', function() {
    it('pokepage can be opened', function() {
      cy.visit('http://localhost:5000')
      cy.request('pokemon/ivysaur')
      cy.contains('chlorophyll')
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
  })