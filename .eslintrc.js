module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true  // "jest" direkt hier hinzufügen
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "react": {
      "version": "latest" // Hier die gewünschte React-Version angeben
    }
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "no-console": "off", // Sie können dies auf "error" setzen, wenn Sie Konsolenmeldungen nicht erlauben möchten
    "react/prop-types": 0
  }
};
