import type { TSESLint } from '@typescript-eslint/experimental-utils';
import { base } from './configs/base';
import { jest } from './configs/jest';
import { react } from './configs/react';
import { other } from './configs/other';
import { prettier } from './configs/prettier';
import { typescript } from './configs/typescript';
import { isNotNullish } from './utils';

interface Accumulator extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: string[];
}

const FIRST_CONFIG = 0;
const OFF_BY_ONE_DIFF = 1;

const mergeAllRules = (...restRules: Array<TSESLint.Linter.Config>) =>
	restRules.reduce<Accumulator>(
		(acc, ruleSet, index) => {
			if (ruleSet.rules) {
				acc.rules = {
					...acc.rules,
					...ruleSet.rules,
				};
			}

			if (isNotNullish(ruleSet.extends)) {
				if (typeof ruleSet.extends === 'string') {
					acc.extends.push(ruleSet.extends);
				} else if (!!ruleSet.extends.length) {
					acc.extends = [...acc.extends, ...ruleSet.extends];
				}
			}

			/**
			 * Not passed as explicit arg handling
			 */
			if (index === restRules.length - OFF_BY_ONE_DIFF) {
				// Push prettier overrides as last entry in extends
				acc.extends.push(prettier.extends[FIRST_CONFIG]);
			}

			return acc;
		},
		/**
		 * Pull in only eslint recommended rules, ignore airbnb-base in favor of
		 * airbnb pulled in from `react`
		 */
		{ extends: [base.extends[FIRST_CONFIG]] },
	);

const config = {
	configs: {
		all: mergeAllRules(jest, react, other, typescript),
		base,
		jest,
		react,
		other,
		prettier,
		typescript,
	},
	rules: {},
};

export = config;
