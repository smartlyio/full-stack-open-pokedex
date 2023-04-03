describe('Pokedex', function() {
    it('pokemon can be clicked', function() {
      cy.visit('http://localhost:5000')
      cy.get('a.list-item')
      .contains('caterpie')
      .click();

      cy.wait(2000);
      cy.contains('speed')
      cy.contains(45)
    })
  })
  