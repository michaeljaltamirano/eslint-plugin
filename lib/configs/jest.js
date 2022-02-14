"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jest = void 0;
const constants_1 = require("../constants");
const lowercaseName = [
    constants_1.ERROR,
    {
        ignore: ['describe'],
    },
];
const validTitle = [
    constants_1.ERROR,
    { ignoreTypeOfDescribeName: true },
];
exports.jest = {
    extends: ['plugin:jest/all'],
    rules: {
        'jest/lowercase-name': lowercaseName,
        'jest/no-large-snapshots': constants_1.OFF,
        'jest/prefer-called-with': constants_1.OFF,
        'jest/prefer-expect-assertions': constants_1.OFF,
        'jest/valid-title': validTitle,
    },
};
