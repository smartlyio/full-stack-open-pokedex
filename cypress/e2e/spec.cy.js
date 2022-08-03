/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    Cypress.config('pageLoadTimeout', 100000);
    cy.visit('http://localhost:5000');
    cy.contains('ivysaur');
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');
  }),

  it('link can be opened', function() {
    Cypress.config('pageLoadTimeout', 100000);
    cy.visit('http://localhost:5000');
    cy.contains('ivysaur').click();
    cy.contains('chlorophyll');
  });

});

