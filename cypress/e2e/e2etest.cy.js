describe('Pokedex', function(){
  it('front page can be opened', function(){
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokemon and Pokemon character names are trademark of Nintendo.')
  })
})