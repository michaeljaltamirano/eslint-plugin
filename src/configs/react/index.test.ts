import { react } from '.';
import { generateTest } from '../testUtils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('react config', () => {
		generateTest(__dirname, react);
	});
});
