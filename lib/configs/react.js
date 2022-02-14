"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.react = void 0;
const constants_1 = require("../constants");
const jsxFilenameExtension = [
    constants_1.ERROR,
    {
        extensions: ['.js', '.tsx'],
    },
];
const requireDefaultProps = [
    constants_1.ERROR,
    {
        ignoreFunctionalComponents: true,
    },
];
exports.react = {
    extends: ['plugin:react/all'],
    rules: {
        'react/jsx-filename-extension': jsxFilenameExtension,
        'react/require-default-props': requireDefaultProps,
        'react/state-in-constructor': constants_1.OFF,
        'react/static-property-placement': constants_1.OFF,
    },
};
