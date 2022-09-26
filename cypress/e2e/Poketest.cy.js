describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})

describe('Navitest', function () {
  it('can navigate from front page to ivysaur', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
    cy.get('a[href*="ivysaur"]').click()
    cy.get('div[class*="pokemon-page"]')
      .find('div[class="pokemon-name"]')
      .contains('ivysaur')
  })
})
