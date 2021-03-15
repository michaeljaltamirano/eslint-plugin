export const jest = {
	extends: ['plugin:jest/all'],
	rules: {
		'jest/lowercase-name': [
			'error',
			{
				ignore: ['describe'],
			},
		],
		'jest/no-large-snapshots': 'off',
		'jest/prefer-called-with': 'off',
		'jest/prefer-expect-assertions': 'off',
		'jest/valid-title': ['error', { ignoreTypeOfDescribeName: true }],
	},
};
