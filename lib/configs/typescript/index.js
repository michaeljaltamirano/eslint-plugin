"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescript = void 0;
const constants_1 = require("../../constants");
const banTypes = [
    constants_1.ERROR,
    {
        extendDefaults: true,
    },
];
const consistentTypeDefinitions = [
    constants_1.ERROR,
    'interface',
];
const memberOrdering = [
    constants_1.ERROR,
    {
        default: {
            memberTypes: ['field', 'constructor', 'method', 'signature'],
            order: 'alphabetically',
        },
    },
];
const noUnusedVars = [
    constants_1.ERROR,
    {
        argsIgnorePattern: '^_',
    },
];
exports.typescript = {
    extends: ['plugin:@typescript-eslint/all'],
    rules: {
        '@typescript-eslint/ban-ts-comment': constants_1.OFF,
        '@typescript-eslint/ban-types': banTypes,
        '@typescript-eslint/camelcase': constants_1.OFF,
        '@typescript-eslint/consistent-indexed-object-style': constants_1.ERROR,
        '@typescript-eslint/consistent-type-assertions': constants_1.ERROR,
        '@typescript-eslint/consistent-type-definitions': consistentTypeDefinitions,
        '@typescript-eslint/dot-notation': constants_1.OFF,
        'dot-notation': constants_1.OFF,
        '@typescript-eslint/explicit-function-return-type': constants_1.OFF,
        '@typescript-eslint/explicit-module-boundary-types': constants_1.OFF,
        '@typescript-eslint/member-ordering': memberOrdering,
        '@typescript-eslint/naming-convention': constants_1.OFF,
        '@typescript-eslint/no-base-to-string': constants_1.ERROR,
        '@typescript-eslint/no-confusing-non-null-assertion': constants_1.ERROR,
        '@typescript-eslint/no-confusing-void-expression': constants_1.ERROR,
        '@typescript-eslint/no-duplicate-imports': constants_1.ERROR,
        'no-duplicate-imports': constants_1.OFF,
        '@typescript-eslint/no-dynamic-delete': constants_1.ERROR,
        '@typescript-eslint/no-extraneous-class': constants_1.ERROR,
        '@typescript-eslint/no-implicit-any-catch': constants_1.ERROR,
        '@typescript-eslint/no-invalid-void-type': constants_1.ERROR,
        '@typescript-eslint/non-nullable-type-assertion-style': constants_1.OFF,
        '@typescript-eslint/no-parameter-properties': constants_1.ERROR,
        '@typescript-eslint/no-require-imports': constants_1.ERROR,
        '@typescript-eslint/no-shadow': constants_1.ERROR,
        'no-shadow': constants_1.OFF,
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': constants_1.ERROR,
        '@typescript-eslint/no-unnecessary-condition': constants_1.ERROR,
        '@typescript-eslint/no-unnecessary-qualifier': constants_1.OFF,
        '@typescript-eslint/no-unnecessary-type-arguments': constants_1.OFF,
        '@typescript-eslint/no-unnecessary-type-constraint': constants_1.ERROR,
        '@typescript-eslint/no-unused-vars': noUnusedVars,
        '@typescript-eslint/no-use-before-define': constants_1.ERROR,
        'no-use-before-define': constants_1.OFF,
        '@typescript-eslint/prefer-includes': constants_1.ERROR,
        '@typescript-eslint/prefer-nullish-coalescing': constants_1.ERROR,
        '@typescript-eslint/prefer-optional-chain': constants_1.ERROR,
        '@typescript-eslint/prefer-readonly': constants_1.OFF,
        '@typescript-eslint/prefer-readonly-parameter-types': constants_1.OFF,
        '@typescript-eslint/prefer-reduce-type-parameter': constants_1.OFF,
        '@typescript-eslint/prefer-string-starts-ends-with': constants_1.ERROR,
        '@typescript-eslint/promise-function-async': constants_1.ERROR,
        '@typescript-eslint/sort-type-union-intersection-members': constants_1.OFF,
        '@typescript-eslint/strict-boolean-expressions': constants_1.ERROR,
        '@typescript-eslint/switch-exhaustiveness-check': constants_1.ERROR,
        '@typescript-eslint/unified-signatures': constants_1.ERROR,
    },
};
