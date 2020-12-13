module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "cypress/globals": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
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
    "react", "jest","cypress"
  ],
  "rules": {
    "indent": [
      "error",
        2
      ],
    "linebreak-style": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
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
    "no-console": "error",
    "react/prop-types": 0,
    'no-console': 0
  }
}
