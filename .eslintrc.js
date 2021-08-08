module.exports = {
  'env': {
      'commonjs': true,
      'es2021': true,
      'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
      'ecmaVersion': 12
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