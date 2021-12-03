describe("Pokedex", function () {
	it("front page can be opened", function () {
		cy.visit("http://localhost:8080");
		cy.contains("ivysaur");
		cy.contains(
			"Pokémon and Pokémon character names are trademarks of Nintendo."
		);
	});
	it("a page for a pokemon can be opened", function () {
		cy.visit("http://localhost:8080");
		cy.get('a[href*="/pokemon/raichu"]').click();
		cy.contains("static");
	});
});
