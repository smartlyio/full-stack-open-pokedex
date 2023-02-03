describe('can view details of specific pokemon', () => { 
    it('opening Ninetales', () => {
        cy.visit("http://localhost:8080")
        cy.contains('ninetales').click()
        cy.contains('ninetales')
        cy.contains('flash fire')
        cy.contains('a','Previous').click()
        cy.get('div.pokemon-name').should('contain','vulpix')
    }) 
})