import { type Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules/', 'e2e'],
  transform: {},
  transformIgnorePatterns: [],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/tests/*.ts(x)?',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};

export default config;
