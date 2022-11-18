module.exports = {
  reportUnusedDisableDirectives: true,
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      parserOptions: { project: 'tsconfig.json' },
      rules: {
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/default-param-last': 'error',
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    requestAnimationFrame: true,
    fetch: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'testing-library',
    'jest-dom',
    'jsx-a11y',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-return-await': 'error',
    'no-nested-ternary': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'React',
        message:
          "React.ReactNode (or similar) should be imported directly at the top of the file as 'import { ReactNode } from 'react'",
      },
    ],
    'spaced-comment': 'error',
    'dot-notation': 'error',
    'default-param-last': 'error',
    'no-dupe-class-members': 'off', // covered by tslint
    'no-invalid-this': 'off', // covered by tslint
    'no-loop-func': 'off', // covered by tslint
    'no-loss-of-precision': 'off', // covered by tslint
    'no-redeclare': 'off', // covered by tslint
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
      },
    ],
    // ts
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      { builtinGlobals: false, hoist: 'functions', allow: [] },
    ],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // react
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/no-unused-prop-types': 2,
    'react/prefer-stateless-function': 2,
    'react/no-deprecated': 'error',
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-no-duplicate-props': 'error',
    'react/self-closing-comp': 'error',
    // jsx-a11y
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
};
