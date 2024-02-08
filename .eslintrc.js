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
        'react-hooks',
        'unused-imports',
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'unused-imports/no-unused-imports': 'error',
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
        'i18next/no-literal-string': ['error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'role',
                    'as',
                    'feature',
                    'variant',
                    'color',
                ],
            },
        ],
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'linebreak-style:': 'off',
        'import/no-extraneous-dependencies': 'off',
        'linebreak-style': 'off',
        'arrow-body-style': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'react/self-closing-comp': 'off',
        'object-curly-newline': 'off',
        'lines-between-class-members': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'operator-linebreak': 'off',
        'react/no-unstable-nested-components': 'warn',
        variant: 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
