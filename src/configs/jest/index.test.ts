import { jest } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('jest config', () => {
		generateTest(__dirname, jest);
	});
});
