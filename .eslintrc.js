module.exports = {
	'parser': 'babel-eslint',
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'plugin:react/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 8,
		'sourceType': 'module',
	},
	'rules': {
		'no-console': 'off',
		'indent': [
			"error",
    	2,
		],
		'react/prop-types': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}