import { react } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('react config', () => {
		generateTest(__dirname, react);
	});
});
