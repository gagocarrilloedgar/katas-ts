module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true
}
