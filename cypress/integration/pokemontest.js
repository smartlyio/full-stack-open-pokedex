import { PORT } from '../../utils';

describe('Pokedex', function() {
	it('front page can be opened', function() {
		cy.visit(`http://localhost:${PORT}`);
		cy.contains('ivysaur');
		cy.contains('nidoran-f');
		cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');
	});
});