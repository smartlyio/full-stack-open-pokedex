
describe('Pokedex', function () {
    it('front page can be opened', function () {
        cy.visit('http://localhost:5000')
        cy.contains('ivysaur')
        cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
})

// describe('Pokedex', function () {
//     it('card page can be opened', function () {
//         cy.visit('http://localhost:5000')
//         cy.visit('http://localhost:5000/pokemon/charmander')
//         cy.contains('blaze')
//         cy.contains('solar power')
//     })
// })
