"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.other = void 0;
const constants_1 = require("../../constants");
const noConsole = [
    constants_1.ERROR,
    {
        allow: ['warn', constants_1.ERROR],
    },
];
exports.other = {
    rules: {
        'arrow-parens': constants_1.OFF,
        'no-console': noConsole,
    },
};
