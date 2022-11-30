module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "jest/globals": true,
    "node": true,
    "cypress/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest", "cypress"
  ],
  "rules": {
    "indent": [
      "error",
        2
      ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "off",
      "single"
    ],
    "semi": [
      "off",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "off",
    "react/prop-types": 0
  }
}
