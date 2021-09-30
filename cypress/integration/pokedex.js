describe('Pokedex', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5000')
    })

    it('front page can be opened', () => {
        cy.contains('ivysaur')
        cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })

    it('pokemon info can be opened', () => {
        cy.contains('charmander').click()
        cy.contains('blaze')
    })
})