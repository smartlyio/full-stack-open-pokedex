module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'sourceType': 'module',

		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12

	},
	'plugins': [
		'react'
	],
	'settings': {
		'react': {
			'version': 'detect'
		} },

	'rules': {
		'indent': [
			'error',
			'tab'
		],
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
