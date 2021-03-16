import { TSESLint } from '@typescript-eslint/experimental-utils';
import { jest } from './configs/jest';
import { typescript } from './configs/typescript';
import { react } from './configs/react';
import { rest } from './configs/rest';

interface Accumulator extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: string[];
}

const mergeAllRules = (...restRules: Array<TSESLint.Linter.Config>) =>
	restRules.reduce<Accumulator>(
		(acc, ruleSet) => {
			if (ruleSet.rules) {
				acc.rules = {
					...acc.rules,
					...ruleSet.rules,
				};
			}

			if (ruleSet.extends) {
				if (typeof ruleSet.extends === 'string') {
					acc.extends.push(ruleSet.extends);
				} else if (ruleSet.extends.length > 0) {
					acc.extends = [...acc.extends, ...ruleSet.extends];
				}
			}

			return acc;
		},
		{ extends: [] },
	);

const config = {
	configs: {
		all: mergeAllRules(jest, react, typescript, rest),
		jest,
		react,
		rest,
		typescript,
	},
	rules: {},
};

export = config;
