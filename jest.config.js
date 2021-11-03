module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['node_modules'],
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true
}
