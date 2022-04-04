import { cypress } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('cypress config', () => {
		generateTest(__dirname, cypress);
	});
});
