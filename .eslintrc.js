module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'vue/require-default-prop': 'off',
    'vue/require-name-property': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-trailing-spaces': 'error',
    'spaced-comment': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
  },
};
