module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-var': 'error',
    'no-eval': 'error',
    'eol-last': 'error',
    'no-console': 'error',
    'default-case': 'error',
    semi: 'off',
    'no-regex-spaces': 'error',

    'constructor-super': 'error',
    'no-invalid-regexp': 'error',
    curly: ['error', 'multi-line'],
    'no-irregular-whitespace': 'error',
    'quote-props': ['error', 'as-needed'],
    'linebreak-style': ['error', 'unix'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression', 'TemplateLiteral'],
      },
    ],
  },
  globals: {
    expect: true,
  },
};
