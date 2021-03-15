export const react = {
	'react/jsx-filename-extension': [
		'warn',
		{
			extensions: ['.js', '.tsx'],
		},
	],
	'react/require-default-props': [
		'error',
		{
			ignoreFunctionalComponents: true,
		},
	],
	'react/state-in-constructor': 'off',
	'react/static-property-placement': 'off',
};
