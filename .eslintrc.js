module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'warn',
      {
        ignoreConditionalTests: false,
      },
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'object-shorthand': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message:
                "Please use direct import of a function or a type. E.g. import { useState, FC } from 'react'",
          },
        ],
      },
    ],
  },
}
