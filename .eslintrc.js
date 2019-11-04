module.exports = {
  extends: '@bifot/eslint-config',
  rules: {
    'no-console': 'off',
    'no-async-promise-executor': 'off',
    'camelcase': 'off',
    'no-return-await': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
  }
};
