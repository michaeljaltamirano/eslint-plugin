import { other } from '.';
import { generateTest } from '../testUtils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('other config', () => {
		generateTest(__dirname, other);
	});
});
