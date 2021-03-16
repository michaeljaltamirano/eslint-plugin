import { TSESLint } from '@typescript-eslint/experimental-utils';
import { ERROR, OFF } from '../../constants';

const jsxFilenameExtension: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		extensions: ['.js', '.tsx'],
	},
];

const requireDefaultProps: TSESLint.Linter.RuleLevelAndOptions = [
	ERROR,
	{
		ignoreFunctionalComponents: true,
	},
];

export const react = {
	extends: ['plugin:react/all', 'airbnb'],
	rules: {
		'react/jsx-filename-extension': jsxFilenameExtension,
		'react/require-default-props': requireDefaultProps,
		'react/state-in-constructor': OFF,
		'react/static-property-placement': OFF,
	} as const,
};
