module.exports = {
	'*.{js,ts,tsx}': ['prettier --write', () => 'yarn run tsc -p tsconfig.json'],
	'*.json': 'prettier --write',
	'*.yml': 'prettier --write',
};
