module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true,
        "jest/globals": true
    },
    'extends': ['plugin:react/recommended', 'plugin:jest/recommended', 'eslint:recommended'],
    'parserOptions': {
        'ecmaVersion': 12,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'jest'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'double'
        ],
        'semi': [
            'error',
            'never'
        ],
        'eqeqeq': 'error',
            'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ]
    }
}