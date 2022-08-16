describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:5000/pokemon/ivysaur', {
        timeout: 120000
      })
      cy.contains('speed')
    })
  })