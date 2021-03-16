import { TSESLint } from '@typescript-eslint/experimental-utils';
import { ERROR, OFF } from '../../constants';

const banTypes: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		extendDefaults: true,
	},
];

const consistentTypeDefinitions: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	'interface',
];

const memberOrdering: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		default: {
			memberTypes: ['field', 'constructor', 'method', 'signature'],
			order: 'alphabetically',
		},
	},
];

const noUnusedVars: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		argsIgnorePattern: '^_',
	},
];

export const typescript = {
	extends: ['plugin:@typescript-eslint/all'],
	rules: {
		'@typescript-eslint/ban-ts-comment': OFF,
		'@typescript-eslint/ban-types': banTypes,
		'@typescript-eslint/camelcase': OFF,
		'@typescript-eslint/consistent-indexed-object-style': ERROR,
		'@typescript-eslint/consistent-type-assertions': ERROR,
		'@typescript-eslint/consistent-type-definitions': consistentTypeDefinitions,
		'@typescript-eslint/dot-notation': OFF,
		'dot-notation': OFF,
		'@typescript-eslint/explicit-function-return-type': OFF,
		'@typescript-eslint/explicit-module-boundary-types': OFF,
		'@typescript-eslint/member-ordering': memberOrdering,
		'@typescript-eslint/naming-convention': OFF,
		'@typescript-eslint/no-base-to-string': ERROR,
		'@typescript-eslint/no-confusing-non-null-assertion': ERROR,
		'@typescript-eslint/no-confusing-void-expression': ERROR,
		'@typescript-eslint/no-duplicate-imports': ERROR,
		'no-duplicate-imports': OFF,
		'@typescript-eslint/no-dynamic-delete': ERROR,
		'@typescript-eslint/no-extraneous-class': ERROR,
		'@typescript-eslint/no-implicit-any-catch': ERROR,
		'@typescript-eslint/no-invalid-void-type': ERROR,
		'@typescript-eslint/non-nullable-type-assertion-style': OFF,
		'@typescript-eslint/no-parameter-properties': ERROR,
		'@typescript-eslint/no-require-imports': ERROR,
		'@typescript-eslint/no-shadow': ERROR,
		'no-shadow': OFF,
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
		'@typescript-eslint/no-unnecessary-condition': ERROR,
		'@typescript-eslint/no-unnecessary-qualifier': OFF,
		'@typescript-eslint/no-unnecessary-type-arguments': OFF,
		'@typescript-eslint/no-unnecessary-type-constraint': ERROR,
		'@typescript-eslint/no-unused-vars': noUnusedVars,
		'@typescript-eslint/no-use-before-define': ERROR,
		'no-use-before-define': OFF,
		'@typescript-eslint/prefer-includes': ERROR,
		'@typescript-eslint/prefer-nullish-coalescing': ERROR,
		'@typescript-eslint/prefer-optional-chain': ERROR,
		'@typescript-eslint/prefer-readonly': OFF,
		'@typescript-eslint/prefer-readonly-parameter-types': OFF,
		'@typescript-eslint/prefer-reduce-type-parameter': OFF,
		'@typescript-eslint/prefer-string-starts-ends-with': ERROR,
		'@typescript-eslint/promise-function-async': ERROR,
		'@typescript-eslint/sort-type-union-intersection-members': OFF,
		'@typescript-eslint/strict-boolean-expressions': ERROR,
		'@typescript-eslint/switch-exhaustiveness-check': ERROR,
		'@typescript-eslint/unified-signatures': ERROR,
	} as const,
};
