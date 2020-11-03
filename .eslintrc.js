module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    AMap: true,
    Loca: true,
  },
  rules: {
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 2,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'object-shorthand': ['error', 'always'],
    'no-unused-vars': 1,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'func-names': 0,
    'max-len': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    semi: ['error', 'never'],
    camelcase: 'off',
  },
}
