import pluginJs from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
      import: pluginImport,
      prettier: pluginPrettier,
      cypress,
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2021: true,
        Cypress: true,
        cy: true,
        describe: true,
        beforeEach: true,
        it: true,
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        expect: true,
        jest: true,
        test: true,
        React: true,
      },
    },
    rules: {
      'no-unused-expressions': 'off',
      'no-undef': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.config.js', 'server.js'],
    languageOptions: {
      globals: {
        module: true,
        require: true,
        console: true,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
