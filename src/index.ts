import { base } from './configs/base';
import { jest } from './configs/jest';
import { react } from './configs/react';
import { prettier } from './configs/prettier';
import { typescript } from './configs/typescript';
import { cypress } from './configs/cypress';
import { all } from './configs/all';

const config = {
	configs: {
		all,
		base,
		cypress,
		jest,
		react,
		prettier,
		typescript,
	},
	rules: {},
};

export = config;
