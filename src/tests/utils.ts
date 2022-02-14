import type { TSESLint } from '@typescript-eslint/experimental-utils';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { isJson } from '../utils';

const getFilePath = (dirname: string) => (file: string) =>
	path.resolve(dirname, file);

interface Config extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: readonly string[];
}

export const generateTest = (dirname: string, config: Config): void => {
	test('serializes to a snapshot', () => {
		const baseJson = JSON.stringify(config);
		const setPath = getFilePath(dirname);

		fs.writeFileSync(setPath('fixture.json'), baseJson, {
			flag: 'w',
		});

		const eslintConfig = execSync(
			`yarn run eslint --no-eslintrc -c ${setPath(
				'fixture.json',
			)} --print-config ${setPath('index.ts')}`,
			{
				encoding: 'utf8',
			},
		);

		const configJson: unknown = JSON.parse(
			eslintConfig.substring(eslintConfig.indexOf('{')),
		);

		if (!isJson(configJson)) {
			throw new Error('parse error');
		}

		/**
		 * We don't care about the parser option; the TypeScript
		 * config will also fail in CI due to directory path
		 */
		const { parser, ...otherConfigOptions } = configJson;

		expect(parser === undefined).toBe(false);
		expect(otherConfigOptions).toMatchSnapshot();
	});
};
