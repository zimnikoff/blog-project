module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'linebreak-style:': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
    globals: {
        __IS_DEV__: 'readonly',
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
