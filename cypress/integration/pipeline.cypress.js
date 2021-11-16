describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened at beginning', () => {
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.',
    )
  })

  it('can navigate from frontpage to a particular Pokemon page', () => {
    cy.contains('ivysaur').click()
    cy.contains(/chlorophyll/i)
  })

  it('can navigate from a particular Pokemon page to the next one', () => {
    cy.contains('ivysaur').click()
    cy.contains(/chlorophyll/i)
    cy.contains(/next/i).click()
    cy.contains(/venusaur/i)
  })

  it('can navigate from a particular Pokemon page to the homepage', () => {
    cy.contains('ivysaur').click()
    cy.contains(/chlorophyll/i)
    cy.contains(/home/i).click()
    cy.contains(/pidgeot/i)
  })
})
