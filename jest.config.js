module.exports = {
  collectCoverageFrom: ['./src/**/*.js', '!src/bin.js', '!src/index.js'],
  testMatch: ['**/tests/**/*.js'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coverageDirectory: './reports',
};
