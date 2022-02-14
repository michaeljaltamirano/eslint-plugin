"use strict";
const base_1 = require("./configs/base");
const jest_1 = require("./configs/jest");
const react_1 = require("./configs/react");
const prettier_1 = require("./configs/prettier");
const typescript_1 = require("./configs/typescript");
const utils_1 = require("./utils");
const FIRST_CONFIG = 0;
const OFF_BY_ONE_DIFF = 1;
const baseExtendsWithoutAirbnbBase = base_1.base.extends.filter((rule) => rule !== 'airbnb-base');
const mergeRules = (...restRules) => restRules.reduce((acc, ruleSet, index) => {
    if (ruleSet.rules) {
        acc.rules = Object.assign(Object.assign({}, acc.rules), ruleSet.rules);
    }
    if ((0, utils_1.isNotNullish)(ruleSet.extends)) {
        if (typeof ruleSet.extends === 'string') {
            acc.extends.push(ruleSet.extends);
        }
        else {
            acc.extends = [...acc.extends, ...ruleSet.extends];
        }
    }
    /**
     * Not passed as explicit arg handling
     */
    if (index === restRules.length - OFF_BY_ONE_DIFF) {
        // Push prettier overrides as last entry in extends
        acc.extends.push(prettier_1.prettier.extends[FIRST_CONFIG]);
    }
    return acc;
}, 
/**
 * Ignore airbnb-base-eslint-config in favor of airbnb-eslint-config
 */
{ extends: baseExtendsWithoutAirbnbBase, rules: Object.assign({}, base_1.base.rules) });
const config = {
    configs: {
        all: mergeRules(jest_1.jest, react_1.react, typescript_1.typescript),
        base: base_1.base,
        jest: jest_1.jest,
        react: react_1.react,
        prettier: prettier_1.prettier,
        typescript: typescript_1.typescript,
    },
    rules: {},
};
module.exports = config;
