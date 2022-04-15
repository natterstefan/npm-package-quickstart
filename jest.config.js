/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  preset: 'jest-preset-ns',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/$1', '<rootDir>/src/$1'],
  },
}
