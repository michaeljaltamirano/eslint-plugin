import { all } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('all config', () => {
		generateTest(__dirname, all);
	});
});
