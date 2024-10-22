module.exports = {
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort', 'import'] /*
   UPGRADE NOTE: [nextjs]
   1. overrides property is copied from next.js/packages/eslint-config-next/index.js
   and we add "parserOptions.project" to it. (because we want to use "plugin:@typescript-eslint/recommended-type-checked" and "parserOptions.project" is necessary for it to work)
   be careful when updating Nextjs. (simply you should copy "overrides" from next.js again and add parserOptions.project to it).
   2. @typescript-eslint/parser is not installed manually,
   instead we relay on @typescript-eslint/parser installed from Nextjs.

   So, changes in brief:
    ++ parserOptions.project
  */,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-type-checked'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'import/newline-after-import': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `use client` `use server`
              ['^use client', '^use server'], // `react` first, `next` second, third packages starting with a character, last specific packages packages starts with `@`
              ['^react', '^next', '^[a-z]', '^@ant-design.*'], // Packages starting with `~`
              ['^~'], // Configs, helpers, utils, hooks
              ['^@config.*', '^@store.*', '^@utils.*', '^@hooks.*'], // UseCases
              ['^@entities.*', '^[^/\\.].*\u0000$', '^\\..*\u0000$'], // // Aliases starting with `@` &
              // ['^@?\\w'],
              // Components
              ['^@components.*'], // routes
              ['^@routes.*'], // App Components
              // ['^@?\\w'],
              ['^@app?.\\w'], // Side effect imports
              ['^\\u0000'], // Assets
              ['^@assets.*'], // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Style imports
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
  },
  root: true,
};