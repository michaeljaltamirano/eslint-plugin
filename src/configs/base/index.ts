import type { TSESLint } from '@typescript-eslint/experimental-utils';
import { ERROR, OFF } from '../../constants';

const noConsole: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		allow: ['warn', ERROR],
	},
];

export const base = {
	extends: [
		'eslint:recommended',
		'plugin:promise/recommended',
		'plugin:sonarjs/recommended',
		'airbnb-base',
	],
	rules: {
		'arrow-parens': OFF,
		'no-console': noConsole,
		'promise/no-nesting': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/valid-params': 'error', // Not needed if using TS
		'promise/prefer-await-to-then': 'error',
		'promise/prefer-await-to-callbacks': 'error',
	},
} as const;
