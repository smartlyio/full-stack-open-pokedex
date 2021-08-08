module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true,
        "jest/globals": true,
        'cypress/globals': true
    },
    'extends': ['plugin:cypress/recommended', 'plugin:react/recommended', 'plugin:jest/recommended', 'eslint:recommended'],
    'parserOptions': {
        'ecmaVersion': 2018,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react', 'jest', 'cypress'
    ],
    'rules': {
        'indent': [
            'error',
            2
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
        ],
        'eqeqeq': 'error',
            'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ],
    'no-console': 'error',
    'react/prop-types': 0,
    }
}