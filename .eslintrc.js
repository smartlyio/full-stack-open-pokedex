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
    "react", "jest"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ]
  },
  "linebreak-style": [
    "error",
    "unix"
  ],
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
  "react/prop-types": 0
}
}
