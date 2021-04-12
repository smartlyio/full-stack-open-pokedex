describe('Navigate back to Home', function () {
	it('front page can be opened', function () {
		cy.visit('http://localhost:5000/pokemon/ivysaur')
		cy.contains('Chlorophyll')
		cy.contains('Home').click()
		cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
	})
})
