import { TSESLint } from '@typescript-eslint/experimental-utils';
import { base } from './configs/base';
import { jest } from './configs/jest';
import { react } from './configs/react';
import { rest } from './configs/rest';
import { prettier } from './configs/prettier';
import { typescript } from './configs/typescript';

interface Accumulator extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: string[];
}

const mergeAllRules = (...restRules: Array<TSESLint.Linter.Config>) =>
	restRules.reduce<Accumulator>(
		(acc, ruleSet, index) => {
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

			/**
			 * Not passed as explicit arg handling
			 */
			if (index === restRules.length - 1) {
				// Push prettier overrides as last entry in extends
				acc.extends.push(prettier.extends[0]);
			}

			return acc;
		},
		/**
		 * Pull in only eslint recommended rules, ignore airbnb-base in favor of
		 * airbnb pulled in from `react`
		 */
		{ extends: [base.extends[0]] },
	);

const config = {
	configs: {
		all: mergeAllRules(jest, react, rest, typescript),
		base,
		jest,
		react,
		rest,
		prettier,
		typescript,
	},
	rules: {},
};

export = config;
