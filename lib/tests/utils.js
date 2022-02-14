"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTest = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils");
const getFilePath = (dirname) => (file) => path_1.default.resolve(dirname, file);
const generateTest = (dirname, config) => {
    test('serializes to a snapshot', () => {
        const baseJson = JSON.stringify(config);
        const setPath = getFilePath(dirname);
        fs_1.default.writeFileSync(setPath('fixture.json'), baseJson, {
            flag: 'w',
        });
        const eslintConfig = (0, child_process_1.execSync)(`yarn run eslint --no-eslintrc -c ${setPath('fixture.json')} --print-config ${setPath('index.ts')}`, {
            encoding: 'utf8',
        });
        const configJson = JSON.parse(eslintConfig.substring(eslintConfig.indexOf('{')));
        if (!(0, utils_1.isJson)(configJson)) {
            throw new Error('parse error');
        }
        /**
         * We don't care about the parser option; the TypeScript
         * config will also fail in CI due to directory path
         */
        const { parser } = configJson, otherConfigOptions = __rest(configJson, ["parser"]);
        expect(parser === undefined).toBe(false);
        expect(otherConfigOptions).toMatchSnapshot();
    });
};
exports.generateTest = generateTest;
