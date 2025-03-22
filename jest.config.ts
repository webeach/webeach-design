import type { Config } from 'jest';

const jestConfig: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: ['**/?(*.)+(test|spec).ts'],
};

export default jestConfig;
