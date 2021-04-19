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
    '~/assets/(.*)': ['<rootDir>/src/assets/$1'],
    '~/components/(.*)': ['<rootDir>/src/components/$1'],
    '~/contexts/(.*)': ['<rootDir>/src/contexts/$1'],
    '~/mocks/(.*)': ['<rootDir>/src/mocks/$1'],
    '~/pages/(.*)': ['<rootDir>/src/pages/$1'],
    '~/reducers/(.*)': ['<rootDir>/src/reducers/$1'],
    '~/services/(.*)': ['<rootDir>/src/services/$1'],
    '~/styles/(.*)': ['<rootDir>/src/styles/$1'],
    '~/utils/(.*)': ['<rootDir>/src/utils/$1']
  }
}
