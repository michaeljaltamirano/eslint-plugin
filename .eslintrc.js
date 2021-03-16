module.exports = {
	root: true,
	env: {
		browser: false,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-base',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
	},
};
