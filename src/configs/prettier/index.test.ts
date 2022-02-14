import { prettier } from '.';
import { generateTest } from '../../tests/utils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('prettier config', () => {
		generateTest(__dirname, prettier);
	});
});
