describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
describe('Pokemon Page can be navigated to', () => {
  it('Navigates to Ivysaur page and checks for chlorophyll ability', () => {
    // Visit the main page
    cy.visit('http://localhost:5000/')

    // Find and click on the link for Ivysaur
    cy.contains('ivysaur').click()

    // Wait for the page to load and check for the presence of chlorophyll ability
    cy.contains('chlorophyll')
  })
})