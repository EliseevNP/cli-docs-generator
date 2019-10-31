module.exports = {
  extends: '@bifot/eslint-config',
  rules: {
    'no-console': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-newline': ['error', 'never'],
    'no-async-promise-executor': 'off',
    'camelcase': 'off',
  }
};
