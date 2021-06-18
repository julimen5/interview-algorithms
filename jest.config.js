module.exports = {
  testEnvironment: 'node',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  modulePathIgnorePatterns: ['<rootDir>/spec/e2e'],
  restoreMocks: true,
};
