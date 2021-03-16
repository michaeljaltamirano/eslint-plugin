import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { isJson } from '../utils';

const getFilePath = (dirname: string) => (file: string) =>
	path.resolve(dirname, file);

// eslint-disable-next-line jest/no-export
export const generateTest = (
	dirname: string,
	config: Record<string, unknown>,
): void => {
	// eslint-disable-next-line jest/require-top-level-describe
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

		expect(configJson).toMatchSnapshot();
	});
};
