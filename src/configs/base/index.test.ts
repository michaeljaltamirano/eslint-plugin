import { base } from '.';
import { generateTest } from '../testUtils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('base config', () => {
		generateTest(__dirname, base);
	});
});
