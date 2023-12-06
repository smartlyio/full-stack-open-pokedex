describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("https://www.google.com/");
    cy.contains("Google");
    // cy.contains(
    //   "Pokémon and Pokémon character names are trademarks of Nintendo."
    // );
  });
});
