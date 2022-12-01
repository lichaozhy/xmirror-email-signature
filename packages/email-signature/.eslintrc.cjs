/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: [
			'error',
			'tab',
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		]
	},
};
