import { typescript } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('typescript config', () => {
		generateTest(__dirname, typescript);
	});
});
