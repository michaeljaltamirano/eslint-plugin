import { base } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('base config', () => {
		generateTest(__dirname, base);
	});
});
