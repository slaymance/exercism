module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    babelOptions: {
      configFile: `${__dirname}/babel.config.js`
    }
  },
  globals: {
    BigInt: true
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['*.spec.js'],

  extends: ['problems'],
  rules: {
    'no-empty': 'off',
    'no-useless-escape': 'warn'
  },
};


