module.exports = {
  "collectCoverage": true,
  "coverageDirectory": "/home/rajkumara/projects/meteor/products/tests/reports/coverage",
  "coverageReporters": [
    "cobertura",
    "html"
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js'
  ],
  modulePaths: [
    '<rootDir>/node_modules/',
    '<rootDir>/node_modules/jest-meteor-stubs/lib/',
  ],
  moduleNameMapper: {
    "meteor/(.*)": "<rootDir>/tests/mocks/$1.js",
    '^(.*):(.*)$': '$1_$2',
  },
  unmockedModulePathPatterns: [
    '/^imports\\/.*\\.js?$/',
    '/^node_modules/',
  ],
};