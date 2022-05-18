describe("Pokedex", function () {
    beforeEach(function () {
        cy.visit("http://localhost:8080");
    });

    it("front page can be opened", function () {
        cy.contains("ivysaur");
        cy.contains(
            "Pokémon and Pokémon character names are trademarks of Nintendo."
        );
    });

    it("card contains correct details", function () {
        cy.contains("pikachu").click();
        cy.get("tr:first").find("td:first").should("have.text", "speed");
        cy.get("tr:first").find("td:last").should("have.text", "90");
    });
});
