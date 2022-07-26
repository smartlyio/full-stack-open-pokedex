describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains(/ivysaur/i);
    cy.contains(
      /Pokémon and Pokémon character names are trademarks of Nintendo./i
    );
  });
});
