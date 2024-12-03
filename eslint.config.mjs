import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginCypress from 'eslint-plugin-cypress';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/**',
      '**/reports/**',
      '**/coverage/**',
      '**/*.config.js',
      '**/.config.mjs',
      '**/config-overrides.js',
    ],
  },
  {
    name: 'Back-end',
    files: ['back-end/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      js: pluginJs,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginPrettier.configs.recommended.rules,
      ...prettierConfig.rules, // Disable conflicting ESLint formatting rules
      'prettier/prettier': 'error', // Enforce Prettier as an ESLint rule
    },
  },
  {
    name: 'Front-end',
    files: ['front-end/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: pluginImport,
      js: pluginJs,
      'jsx-a11y': pluginJsxA11y,
      prettier: pluginPrettier,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginImport.configs.recommended.rules, // Import recommended rules
      ...pluginJs.configs.recommended.rules, // JS recommended rules
      ...pluginJsxA11y.configs.recommended.rules, // JSX a11y recommended rules
      ...pluginPrettier.configs.recommended.rules, // Prettier recommended rules
      ...pluginReact.configs.recommended.rules, // React recommended rules
      ...pluginReactHooks.configs.recommended.rules, // React hooks recommended rules
      ...prettierConfig.rules, // Disable conflicting ESLint formatting rules
      'prettier/prettier': 'error', // Enforce Prettier as an ESLint rule
      'react-hooks/exhaustive-deps': 'off',
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
    name: 'Front-end Cypress',
    files: ['front-end/cypress/**/*.js', 'front-end/cypress/**/*.cy.js'],
    languageOptions: {
      globals: pluginCypress.environments.globals.globals,
    },
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
    },
  },
  {
    name: 'Tests',
    files: ['back-end/**/*.test.js', 'front-end/**/*.test.js'],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
    settings: {
      jest: {
        version: 'detect',
      },
    },
  },
];
