describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  describe('after opening a single pokemon', function() {
    beforeEach(function() {
      cy.visit('http://localhost:5001')
      cy.contains('ivysaur').click()
    })
    it('pokemon page can be navigated to', function() {
      cy.contains('ivysaur')
      cy.contains('chlorophyll')
    })
  }
  )
})