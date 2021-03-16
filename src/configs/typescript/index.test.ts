import { typescript } from '.';
import { generateTest } from '../testUtils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('typescript config', () => {
		generateTest(__dirname, typescript);
	});
});
