describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5001");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("Links to specific pokemons route work", function () {
    cy.visit("http://localhost:5001");
    cy.contains("charmander").click();
    cy.contains("solar power");
  });
});
