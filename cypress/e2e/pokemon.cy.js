/* global cy */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://127.0.0.1:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex', function() {
  it('can navigate from the main page to a specific Pokemon page', function() {
    cy.visit('http://127.0.0.1:5000')
    cy.contains('ivysaur').click() // Нажать на ссылку ivysaur
    cy.contains('chlorophyll') // Проверить наличие текста 'chlorophyll' на странице покемона
  })
})