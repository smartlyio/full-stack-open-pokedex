/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("Pokemon Page can be navigated to", function () {
    cy.visit("http://localhost:5000/");
    cy.contains("charizard").click();
    cy.contains("solar power");
    cy.contains("Next").click();
    cy.contains("charmeleon");
  });
});
