export default {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
  },
};
