import { TSESLint } from '@typescript-eslint/experimental-utils';
import { ERROR, OFF } from '../constants';

const lowercaseName: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		ignore: ['describe'],
	},
];

const validTitle: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{ ignoreTypeOfDescribeName: true },
];

export const jest = {
	extends: ['plugin:jest/all'],
	rules: {
		'jest/lowercase-name': lowercaseName,
		'jest/no-large-snapshots': OFF,
		'jest/prefer-called-with': OFF,
		'jest/prefer-expect-assertions': OFF,
		'jest/valid-title': validTitle,
	},
};
