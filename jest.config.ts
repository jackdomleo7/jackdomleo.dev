import { type Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true
}

export default config