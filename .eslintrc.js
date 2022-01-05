module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:cypress/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "settings": {
    "react": {
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    }  },
  "rules": {
    "indent": [
      "error",
        2
      ],
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    // "linebreak-style": [
    //   "error",
    //   "windows"
    // ],
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
    "react/prop-types": 0,
    'no-console': 0
  }
}
