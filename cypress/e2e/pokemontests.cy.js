describe('Pokedex', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:5000')
      cy.contains('ivysaur')
      cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
    it('pokemon page can be opened', function() {
        cy.visit('http://localhost:5000')
        cy.contains('ivysaur').click()
        cy.contains('Home')
        cy.contains('Next')
        cy.contains('Previous')
        cy.get('[data-testid="stats"]').should('be.visible');
      })
  })