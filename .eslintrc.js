module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'cypress'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'react/prop-types': 0,
    /// OPTIONAL LINTING RULES
    // "linebreak-style": [
    //   "error",
    //   "unix"
    // ],
    // "semi": [
    //   "error",
    //   "never"
    // ],
  },
};
