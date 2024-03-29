import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

import { isJson } from '../utils';
import type { EslintConfigWithReadonlyExtends } from '../types';

const FIXTURE_FILE = 'fixture.json';

const getFilePath = (dirname: string) => (file: string) =>
	path.resolve(dirname, file);

export const generateTest = (
	dirname: string,
	config: EslintConfigWithReadonlyExtends,
): void => {
	test('serializes to a snapshot', () => {
		const baseJson = JSON.stringify(config);
		const setPath = getFilePath(dirname);

		fs.writeFileSync(setPath(FIXTURE_FILE), baseJson, {
			flag: 'w',
		});

		execSync(`yarn run prettier --write ${setPath(FIXTURE_FILE)}`);

		const eslintConfig = execSync(
			`yarn run eslint --no-eslintrc -c ${setPath(
				FIXTURE_FILE,
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
