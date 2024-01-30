/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    reporters: [
        'default',
        ['jest-html-reporters', {
            publicPath: '<rootDir>/reports/unit',
            filename: 'report.html',
            openReport: true,
        }],
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^@/(.*)$': '<rootDir>/src/$1',

    },
    testEnvironment: 'jsdom',
    testMatch: [
        // '**/__tests__/**/*.[jt]s?(x)',
        // '**/?(*.)+(spec|test).[tj]s?(x)',
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
};
