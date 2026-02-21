import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vitestPlugin from '@vitest/eslint-plugin'

export default [
  // Global ignores (replaces --ignore-path .gitignore)
  {
    ignores: [
      'node_modules/**',
      '**/*.log*',
      '.nuxt/**',
      '.nitro/**',
      '.cache/**',
      '.output/**',
      '.env',
      '.data/**',
      'dist/**',
      'coverage/**',
      '.eslintcache',
    ],
  },

  // Vue flat config (sets up vue-eslint-parser + vue rules for .vue files)
  ...vuePlugin.configs['flat/essential'],

  // JS / TS files: use TypeScript parser directly (vue-eslint-parser is overridden here)
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },

  // JS / TS / Vue files config
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parserOptions: {
        // TypeScript parser delegated from vue-eslint-parser for <script> blocks
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        // Node
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      // TypeScript recommended rules
      ...tsPlugin.configs.recommended.rules,

      // TypeScript overrides (equivalent to @nuxtjs/eslint-config-typescript)
      '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',

      // Project-specific overrides
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
    },
  },

  // Vitest test files
  {
    files: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}'],
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },
]
