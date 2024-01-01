describe('Note app', () => {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5173')
    cy.get('.list-item')
  })
})