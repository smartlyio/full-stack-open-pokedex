module.exports = {
  'env': {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true,
    "commonjs": true
  },
  'extends': ['eslint:recommended', "plugin:jest/recommended"],
  'parserOptions': {
      'ecmaVersion': 6
  },
  'rules': {
      'indent': [
          'error',
          4
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
  ]
  }
}