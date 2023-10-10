module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'plugin:jsx-a11y/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:storybook/recommended'],
    plugins: [
        'react',
        'jsx-a11y',
        'import',
        '@typescript-eslint',
        'simple-import-sort',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            'typescript': {
                'alwaysTryTypes': true,
            },
        },
    },
    'parserOptions': {
        'project': './tsconfig.json',
        'tsconfigRootDir': './',
    },
    rules: {
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/function-component-definition': [2, { 'namedComponents': 'arrow-function', 'unnamedComponents': 'arrow-function' }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-plusplus': 'off',
        'linebreak-style': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/require-default-props': 'off',
        'no-param-reassign': 'off',
        'no-restricted-exports': 'off',
        'no-unused-vars': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.tsx'],
            },
        ],
        'import/no-unresolved': 'error',
    },
};
