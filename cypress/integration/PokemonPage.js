
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate from main page to individual pokemon page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('pidgeotto').click()
    cy.contains('speed')
    cy.contains('71')
    cy.contains('special defense')
    cy.contains('50')
    cy.contains('Hidden ability')
    cy.contains('keen eye')
    cy.contains('Hidden ability')
    cy.contains('big pecks')
  })
})