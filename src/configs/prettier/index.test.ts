import { prettier } from '.';
import { generateTest } from '../testUtils';

describe('@michaeljaltamirano/eslint-plugin', () => {
	describe('prettier config', () => {
		generateTest(__dirname, prettier);
	});
});
