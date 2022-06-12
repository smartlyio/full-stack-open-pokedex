/* eslint-disable */
describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
});

describe("Specific Pokemon", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("venusaur").click();
    cy.url().should("include", "/pokemon/venusaur");
    cy.contains("overgrow");
    cy.contains("chlorophyll");
    cy.contains("venusaur")
  });
});
