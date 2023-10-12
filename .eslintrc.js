module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		'jest/globals': true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:cypress/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'jest', 'cypress'],
	rules: {
		indent: 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		eqeqeq: 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': ['error', 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'no-console': 0,
		'react/prop-types': 0,
	},
};
