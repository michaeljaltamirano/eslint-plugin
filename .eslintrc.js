module.exports = {
	root: true,
	env: {
		browser: false,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'plugin:@michaeljaltamirano/all',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json'
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
