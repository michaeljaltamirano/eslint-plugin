"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
const constants_1 = require("../../constants");
const noConsole = [
    constants_1.ERROR,
    {
        allow: ['warn', constants_1.ERROR],
    },
];
exports.base = {
    extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'airbnb-base',
    ],
    rules: {
        'arrow-parens': constants_1.OFF,
        'no-console': noConsole,
        'promise/no-nesting': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'error',
    },
};
