/// <reference types='codeceptjs' />
Feature('homepage')

Scenario('On the correct page', ({ I }) => {
  I.amOnPage('http://localhost:5000')
})

Scenario('Displayed appropriate animal name', ({ I }) => {
  I.see('Ivysaur')
  I.see('Pokémon and Pokémon character names are trademarks of Nintendo.')
})

Scenario('Ivysaur contains the correct attribute', ({ I }) => {
  I.click('ivysaur')
  I.see('Chlorophyll')
})