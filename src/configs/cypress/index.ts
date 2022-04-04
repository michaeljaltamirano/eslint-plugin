export const cypress = {
	extends: ['plugin:cypress/recommended'],
	rules: {
		'cypress/no-assigning-return-values': 'error',
		'cypress/no-unnecessary-waiting': 'error',
		'cypress/assertion-before-screenshot': 'error',
		'cypress/no-force': 'error',
		'cypress/no-async-tests': 'error',
		'cypress/no-pause': 'error',
		'cypress/require-data-selectors': 'off',
	},
} as const;
