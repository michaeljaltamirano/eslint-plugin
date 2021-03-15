'use strict';
const jest_1 = require('./jest');
const typescript_1 = require('./typescript');
const react_1 = require('./react');
const rest_1 = require('./rest');
const createAllRules = (...rest) => rest.map((ruleSet) => ruleSet);
const config = {
	configs: {
		all: createAllRules(
			jest_1.jest,
			react_1.react,
			typescript_1.typescript,
			rest_1.rest,
		),
		jest: jest_1.jest,
		react: react_1.react,
		typescript: typescript_1.typescript,
	},
	rules: {},
};
module.exports = config;
