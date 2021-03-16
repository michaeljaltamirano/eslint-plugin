module.exports = {
	'*.{ts}': ['eslint --fix', () => 'yarn run tsc -p tsconfig.json'],
	'*.json': 'prettier --write',
	'*.yml': 'prettier --write',
};
