import { base } from '../base';
import { jest } from '../jest';
import { react } from '../react';
import { prettier } from '../prettier';
import { typescript } from '../typescript';
import { isNotNullish } from '../../utils';
import type {
	EslintConfig,
	EslintConfigWithReadonlyExtends,
} from '../../types';

const FIRST_CONFIG = 0;
const OFF_BY_ONE_DIFF = 1;

const baseExtendsWithoutAirbnbBase = base.extends.filter(
	(rule) => rule !== 'airbnb-base',
);

const mergeRules = (...restRules: EslintConfigWithReadonlyExtends[]) =>
	restRules.reduce<EslintConfig>(
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

export const all = mergeRules(jest, react, typescript);
