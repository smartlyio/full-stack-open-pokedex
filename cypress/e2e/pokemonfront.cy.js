describe('Pokedex', function() {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function () {
    cy.contains('ivysaur').click()
    cy.get('[id=app]')
      .should('contain', 'chlorophyll')
      .and('contain', 'Previous')
      .and('contain', 'Home')
      .and('contain', 'Next')
  })
/* This appeared to work for me
  it('Bulbasaur page can be navigated to', function () {
    cy.contains('bulbasaur').click()
    cy.get('[id=app]')
      .should('contain', 'chlorophyll')
      .and('contain', 'Home')
      .and('contain', 'Next')
  })*/
})

