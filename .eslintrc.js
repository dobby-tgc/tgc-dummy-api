/* eslint-disable quotes */
/* eslint-disable quote-props */
module.exports = {
  "env": {
    "browser": false,
    "node": true,
    "es2020": true,
  },
  "extends": ["airbnb-base"],
  "rules": {
    "semi": ["error", "never", {
      "beforeStatementContinuationChars": "always",
    }],
    'consistent-return': ['warn'],
    "no-unused-vars": "warn",
    "camelcase": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "max-len": "warn",
    "prefer-const": "error",
  },
  "globals": {
    "require_from": "readonly",
    "devenv": "readonly",
  },
}
