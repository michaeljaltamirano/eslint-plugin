import { jest } from './jest';
import { typescript } from './typescript';
import { react } from './react';
import { rest } from './rest';

const createAllRules = (...rest: Array<Record<string, unknown>>) =>
	rest.map((ruleSet) => ruleSet);

const config = {
	configs: {
		all: createAllRules(jest, react, typescript, rest),
		jest,
		react,
		typescript,
	},
	rules: {},
};

export = config;
