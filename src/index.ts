import type { TSESLint } from '@typescript-eslint/experimental-utils';
import { base } from './configs/base';
import { jest } from './configs/jest';
import { react } from './configs/react';
import { prettier } from './configs/prettier';
import { typescript } from './configs/typescript';
import { isNotNullish } from './utils';

interface Accumulator extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: string[];
}

const FIRST_CONFIG = 0;
const OFF_BY_ONE_DIFF = 1;

const baseExtendsWithoutAirbnbBase = base.extends.filter(
	(rule) => rule !== 'airbnb-base',
);

const mergeRules = (...restRules: TSESLint.Linter.Config[]) =>
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
				} else {
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
		 * Ignore airbnb-base-eslint-config in favor of airbnb-eslint-config
		 */
		{ extends: baseExtendsWithoutAirbnbBase, rules: { ...base.rules } },
	);

const config = {
	configs: {
		all: mergeRules(jest, react, typescript),
		base,
		jest,
		react,
		prettier,
		typescript,
	},
	rules: {},
};

export = config;
