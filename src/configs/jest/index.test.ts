import { jest } from '.';
import { generateTest } from '../testUtils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('jest config', () => {
		generateTest(__dirname, jest);
	});
});
