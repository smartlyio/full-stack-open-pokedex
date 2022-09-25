import process from "node:process";
const PORT = 5000;
const CURRENT_PORT = process.env.PORT || PORT;

describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:" + CURRENT_PORT);
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("pokemon can be clicked and leads to pokemon page", function () {
    cy.contains("ivysaur").click();
    cy.contains("chlorophyll");
  });
});
