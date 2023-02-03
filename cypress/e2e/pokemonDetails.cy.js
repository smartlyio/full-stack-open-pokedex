describe('can view details of specific pokemon', () => { 
    it('can navigate through details', () => {
        cy.visit("http://localhost:5000")
        cy.contains('ninetales').click()
        cy.contains('ninetales')
        cy.contains('flash fire')
        cy.contains('a','Previous').click()
        cy.get('div.pokemon-name').should('contain','vulpix')
    }) 
})