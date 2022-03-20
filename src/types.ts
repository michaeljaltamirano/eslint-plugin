import type { TSESLint } from '@typescript-eslint/experimental-utils';

export interface EslintConfig extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: string[];
}

export interface EslintConfigWithReadonlyExtends
	extends Omit<TSESLint.Linter.Config, 'extends'> {
	extends: readonly string[];
}
