export default {
  // Specifies the root
  roots: ['.'],
  // use the 'ts-jest' preset for TypeScript files
  preset: 'ts-jest',

  // clear mock calls and instances between every test
  clearMocks: true,

  // coverage
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  
  // coverage output
  coverageDirectory: 'coverage',

  // handle different file types
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // paths to mock modules
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // environment
  testEnvironment: 'jsdom',

  // reset mock state between every test
  resetMocks: true,

  // glob patterns to detect test files
  testMatch: ['<rootDir>/**/*.test.{ts,tsx,js,jsx}'],

  // transform the code using Babel and ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },

  // additional setup files
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // ignore
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // verbose mode for more detailed output
  verbose: true,
};
