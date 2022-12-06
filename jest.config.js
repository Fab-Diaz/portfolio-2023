/**
 * Jest set-up based on: https://dev.to/maciekgrzybek/setup-next-js-with-typescript-jest-and-react-testing-library-28g5
 */

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^context(.*)$': '<rootDir>/src/context$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^lib(.*)$': '<rootDir>/src/lib$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^src(.*)$': '<rootDir>/src$1',
    '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/stylesMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
