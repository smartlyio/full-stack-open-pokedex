describe('Pokedex', function(){
  it('front page can be opened', function(){
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })
  it('clicking pokemon navigates to its page', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})