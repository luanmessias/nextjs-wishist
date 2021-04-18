module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/assets/**',
    '!src/pages/**',
    '!src/themes/**',
    '!src/**/types/**',
    '!src/**/styles.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@globalStyles/(.*)': '<rootDir>/src/styles/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@svg/(.*)': '<rootDir>/src/assets/svg/$1'
  }
}
