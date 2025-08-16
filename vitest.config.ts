import { defineConfig } from 'vitest/config'

export default defineConfig({
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
      include: ['app/components', 'app/layouts', 'app/pages', 'app/utilities']
    },
    setupFiles: ['./vitest.setup.ts'],
    restoreMocks: true
  }
})