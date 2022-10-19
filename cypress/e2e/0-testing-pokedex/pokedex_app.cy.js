describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001', { timeout: 100000 })
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.contains('arbok')
    cy.contains('mew')
  })

  it('viewing a pokemon and its attributes', function() {
    cy.visit('http://localhost:3001', { timeout: 100000 })
    cy.contains('pikachu').click()
    cy.contains('Previous')
    cy.contains('Next')
    cy.contains('Home')
    cy.contains('speed')
    cy.contains('special defense')
  })

  it('viewing previous and next pokemon', function() {
    cy.visit('http://localhost:3001', { timeout: 100000 })
    cy.contains('pikachu').click()
    cy.contains('Previous').click()
    cy.contains('arbok')
    cy.contains('Next').click()
    cy.contains('pikachu')
    cy.contains('Next').click()
    cy.contains('raichu')
  })
})