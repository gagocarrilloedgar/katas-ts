module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true
}
