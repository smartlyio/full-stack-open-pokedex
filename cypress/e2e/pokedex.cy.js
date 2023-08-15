describe("Pokedex", () => {
  it("opens front page", () => {
    cy.visit("http://localhost:3001");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
});
