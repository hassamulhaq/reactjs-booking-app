import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['dist/**/*'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      // "react-refresh",
      // "simple-import-sort"
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'error',
      // 'react-refresh/only-export-components': 'error',
      'react/no-unescaped-entities': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'], // default was `flat.recommended`
];
