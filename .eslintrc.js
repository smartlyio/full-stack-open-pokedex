module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    "react/prop-types": 0,
    radix: 0,
    "react/function-component-definition": 0,
    "no-shadow": 0,
    "no-console": 0,
    "arrow-body-style": 0,
  },
};
