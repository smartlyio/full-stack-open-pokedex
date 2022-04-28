module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
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
    "react", "jest", "cypress"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "indent": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    // "quotes": [
    //   "error",
    //   "single"
    // ],
    // "semi": [
    //   "error",
    //   "never"
    // ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    // "no-console": "error",
    "react/prop-types": 0
  }
}
