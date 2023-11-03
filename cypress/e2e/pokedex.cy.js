describe('Pokedex', function () {
	it('front page can be opened', function () {
		cy.visit('http://localhost:5000')
		cy.contains('ivysaur')
		cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
	})
})

describe('Pokemon Navigation Test', () => {
	it('should navigate to Ivysaur\'s page and check for content', () => {
		cy.visit('http://localhost:5000')
		cy.contains('ivysaur').click()
		cy.contains('chlorophyll').should('exist')
	})
})