module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:jest/recommended'
  ],
  plugins: [
    'eslint-plugin-jest'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
