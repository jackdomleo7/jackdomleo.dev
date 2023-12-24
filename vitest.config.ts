import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    environmentOptions: {
      nuxt: {
        dotenv: {
          fileName: './.env'
        }
      }
    },
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['components', 'layouts', 'pages', 'utilities']
    },
    setupFiles: ['./vitest.setup.ts'],
    restoreMocks: true
  }
})