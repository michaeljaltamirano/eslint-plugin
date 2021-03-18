export const base = {
	extends: ['eslint:recommended', 'plugin:promise/recommended', 'airbnb-base'],
	rules: {
		'promise/no-nesting': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/valid-params': 'error', // Not needed if using TS
		'promise/prefer-await-to-then': 'error',
		'promise/prefer-await-to-callbacks': 'error',
	},
} as const;
