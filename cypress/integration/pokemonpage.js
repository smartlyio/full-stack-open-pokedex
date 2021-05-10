describe('Pokedex Pokemon page', function() {
  it('Single pokemon page can be opened', function() {
    const pokemonName = 'ivysaur'
    cy.visit('http://localhost:5000')
    cy.get(`.list-item:contains(${pokemonName})`).click().then(() => {
      cy.get('.pokemon-name').contains(pokemonName)
    })
  })
})