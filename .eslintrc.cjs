module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['vitest'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vitest/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-named-as-default': 'off',
    'vue/no-v-html': 'off'
  }
}