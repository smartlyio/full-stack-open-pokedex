/* eslint-disable no-undef, no-console*/
describe('Pokedex', function () {
	beforeEach(function () {
		cy.visit('http://localhost:5000')
	})

	it('front page can be opened', function () {
		cy.contains(
			'Pokémon and Pokémon character names are trademarks of Nintendo.',
		)
	})
	// navigating test
	it('pokemon page can be navigated to', function () {
		cy.contains('charmander').click()
		cy.contains('solar power')
	})
})
