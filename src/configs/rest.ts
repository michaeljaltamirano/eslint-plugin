import { TSESLint } from '@typescript-eslint/experimental-utils';
import { ERROR, OFF } from '../constants';

const noConsole: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		allow: ['warn', ERROR],
	},
];

export const rest = {
	rules: {
		'arrow-parens': OFF,
		'no-console': noConsole,
	} as const,
};
