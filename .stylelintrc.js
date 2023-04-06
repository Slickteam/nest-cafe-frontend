module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.scss', '**/*.scss'],
      rules: {
        indentation: 2,
        'string-quotes': 'single',
        'declaration-empty-line-before': 'never',
        'rule-empty-line-before': [
          'always',
          {
            except: ['first-nested'],
          },
        ],
        'selector-class-pattern': '^([a-z][a-z0-9]*)(-(-)?[a-z0-9]+)*(__[a-z0-9]+)*$',
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
          },
        ],
      },
    },
  ],
};
