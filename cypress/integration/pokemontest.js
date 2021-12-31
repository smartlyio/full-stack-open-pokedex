//import { PORT } from '../../utils';

describe('Pokedex', function () {
	it('front page can be opened', function () {
		//cy.visit(`http://localhost:${PORT}`);
		cy.visit('http://localhost:3003');
		cy.contains('ivysaur');
		cy.contains('nidoran-f');
		cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');

		// eslint-disable-next-line no-unused-vars
		function abortEarly() {
			if (this.currentTest.state === 'failed') {
				return cy.task('shouldSkip', true);
			}
			cy.task('shouldSkip').then(value => {
				if (value) return cy.interrupt();
			});
		}
	});
});